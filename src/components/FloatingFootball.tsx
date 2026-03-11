"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const BALL_RADIUS = 0.62;
const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;
const DEFAULT_BALL_SIZE = 132;
const MOBILE_BALL_SIZE = 108;
const BOUNCE_DAMPING = 0.94;
const MOTION_DAMPING = 0.996;
const MIN_SPEED = 6;
const PATCH_NORMALS = [
  new THREE.Vector3(-1, GOLDEN_RATIO, 0),
  new THREE.Vector3(1, GOLDEN_RATIO, 0),
  new THREE.Vector3(-1, -GOLDEN_RATIO, 0),
  new THREE.Vector3(1, -GOLDEN_RATIO, 0),
  new THREE.Vector3(0, -1, GOLDEN_RATIO),
  new THREE.Vector3(0, 1, GOLDEN_RATIO),
  new THREE.Vector3(0, -1, -GOLDEN_RATIO),
  new THREE.Vector3(0, 1, -GOLDEN_RATIO),
  new THREE.Vector3(GOLDEN_RATIO, 0, -1),
  new THREE.Vector3(GOLDEN_RATIO, 0, 1),
  new THREE.Vector3(-GOLDEN_RATIO, 0, -1),
  new THREE.Vector3(-GOLDEN_RATIO, 0, 1),
].map((vector) => vector.normalize());

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getBallSize() {
  return typeof window !== "undefined" && window.innerWidth < 640
    ? MOBILE_BALL_SIZE
    : DEFAULT_BALL_SIZE;
}

function getAnchorCenter(ballSize: number) {
  const anchor = document.getElementById("fruitball-card");

  if (!anchor) {
    return {
      x: window.innerWidth - ballSize * 0.9,
      y: window.innerHeight - ballSize * 0.9,
    };
  }

  const rect = anchor.getBoundingClientRect();

  return {
    x: clamp(
      rect.left + Math.min(rect.width * 0.18, 80),
      ballSize / 2,
      window.innerWidth - ballSize / 2,
    ),
    y: clamp(
      rect.top + rect.height * 0.55,
      ballSize / 2,
      window.innerHeight - ballSize / 2,
    ),
  };
}

function createFootball() {
  const group = new THREE.Group();
  const baseMaterial = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    roughness: 0.76,
    metalness: 0.02,
  });
  const patchMaterial = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    roughness: 0.82,
    metalness: 0.04,
  });

  const base = new THREE.Mesh(
    new THREE.SphereGeometry(BALL_RADIUS, 64, 64),
    baseMaterial,
  );
  group.add(base);

  const patchGeometry = new THREE.CircleGeometry(0.18, 5);
  patchGeometry.rotateZ(Math.PI / 5);

  PATCH_NORMALS.forEach((normal) => {
    const patch = new THREE.Mesh(patchGeometry, patchMaterial);
    patch.position.copy(normal.clone().multiplyScalar(BALL_RADIUS * 1.002));
    patch.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 0, 1),
      normal.clone(),
    );
    group.add(patch);
  });

  return group;
}

export default function FloatingFootball() {
  const hostRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const ballElement = ballRef.current;
    if (!host || !ballElement) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 20);
    camera.position.set(0, 0.28, 4.6);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    host.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.1);
    keyLight.position.set(2.6, 3.2, 4.8);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x7dd3fc, 12, 12, 2);
    fillLight.position.set(-2.4, 0.6, 3.2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffffff, 6, 12, 2);
    rimLight.position.set(0, -1.2, 3);
    scene.add(rimLight);

    const football = createFootball();
    football.position.set(0, 0.08, 0);
    scene.add(football);

    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.82, 40),
      new THREE.MeshBasicMaterial({
        color: 0x020617,
        transparent: true,
        opacity: 0.16,
      }),
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.set(0, -0.78, 0);
    scene.add(shadow);

    const state = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      anchored: true,
      size: getBallSize(),
    };

    const setBallPosition = () => {
      ballElement.style.transform = `translate3d(${state.x - state.size / 2}px, ${
        state.y - state.size / 2
      }px, 0)`;
    };

    const syncToAnchor = () => {
      state.size = getBallSize();
      const anchor = getAnchorCenter(state.size);
      state.x = anchor.x;
      state.y = anchor.y;
      ballElement.style.width = `${state.size}px`;
      ballElement.style.height = `${state.size}px`;
      setBallPosition();
    };

    const kickBall = (event: PointerEvent, force = 760) => {
      const rect = ballElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      let dirX = event.movementX;
      let dirY = event.movementY;

      if (Math.abs(dirX) + Math.abs(dirY) < 0.1) {
        dirX = centerX - window.innerWidth / 2 || (Math.random() > 0.5 ? 1 : -1);
        dirY = centerY - window.innerHeight / 2 || -1;
      }

      const length = Math.hypot(dirX, dirY) || 1;

      state.anchored = false;
      state.vx += (dirX / length) * force;
      state.vy += (dirY / length) * force;
    };

    const handlePointerEnter = (event: PointerEvent) => {
      kickBall(event);
    };

    const handlePointerDown = (event: PointerEvent) => {
      kickBall(event, 920);
    };

    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;

      if (!width || !height) {
        return;
      }

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    syncToAnchor();
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);

    const handleWindowResize = () => {
      resize();
      if (state.anchored) {
        syncToAnchor();
      } else {
        state.size = getBallSize();
        ballElement.style.width = `${state.size}px`;
        ballElement.style.height = `${state.size}px`;
        state.x = clamp(state.x, state.size / 2, window.innerWidth - state.size / 2);
        state.y = clamp(
          state.y,
          state.size / 2,
          window.innerHeight - state.size / 2,
        );
        setBallPosition();
      }
    };

    ballElement.addEventListener("pointerenter", handlePointerEnter);
    ballElement.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", handleWindowResize);

    let frame = 0;
    let lastFrame = performance.now();

    const animate = (time: number) => {
      const delta = Math.min((time - lastFrame) / 1000, 0.024);
      lastFrame = time;

      if (state.anchored) {
        const anchor = getAnchorCenter(state.size);
        state.x = THREE.MathUtils.lerp(state.x, anchor.x, 0.08);
        state.y = THREE.MathUtils.lerp(state.y, anchor.y, 0.08);
      } else {
        state.x += state.vx * delta;
        state.y += state.vy * delta;

        const min = state.size / 2;
        const maxX = window.innerWidth - min;
        const maxY = window.innerHeight - min;

        if (state.x <= min) {
          state.x = min;
          state.vx = Math.abs(state.vx) * BOUNCE_DAMPING;
        } else if (state.x >= maxX) {
          state.x = maxX;
          state.vx = -Math.abs(state.vx) * BOUNCE_DAMPING;
        }

        if (state.y <= min) {
          state.y = min;
          state.vy = Math.abs(state.vy) * BOUNCE_DAMPING;
        } else if (state.y >= maxY) {
          state.y = maxY;
          state.vy = -Math.abs(state.vy) * BOUNCE_DAMPING;
        }

        state.vx *= Math.pow(MOTION_DAMPING, delta * 60);
        state.vy *= Math.pow(MOTION_DAMPING, delta * 60);

        if (Math.abs(state.vx) + Math.abs(state.vy) < MIN_SPEED) {
          state.vx = 0;
          state.vy = 0;
        }
      }

      setBallPosition();

      football.rotation.x += state.vy * 0.00022;
      football.rotation.z -= state.vx * 0.00022;
      football.rotation.y = THREE.MathUtils.lerp(
        football.rotation.y,
        clamp(state.vx * 0.00018, -0.28, 0.28),
        0.08,
      );

      shadow.scale.setScalar(
        THREE.MathUtils.lerp(
          shadow.scale.x,
          1 - Math.min(Math.hypot(state.vx, state.vy) * 0.00012, 0.18),
          0.08,
        ),
      );

      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      ballElement.removeEventListener("pointerenter", handlePointerEnter);
      ballElement.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleWindowResize);

      scene.traverse((object) => {
        const mesh = object as THREE.Mesh;
        if ("geometry" in mesh && mesh.geometry) {
          mesh.geometry.dispose();
        }

        const material = (mesh as { material?: THREE.Material | THREE.Material[] })
          .material;
        if (Array.isArray(material)) {
          material.forEach((item) => item.dispose());
        } else {
          material?.dispose();
        }
      });

      renderer.dispose();
      if (host.contains(renderer.domElement)) {
        host.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[70]">
      <div
        ref={ballRef}
        className="pointer-events-auto absolute cursor-grab active:cursor-grabbing will-change-transform"
      >
        <div ref={hostRef} aria-hidden="true" className="h-full w-full" />
      </div>
    </div>
  );
}
