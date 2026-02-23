"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const HEIGHT = 280;
const WIDTH = 280;

export default function MyCanvas() {
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = refContainer.current;
    if (!currentRef) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, WIDTH / HEIGHT, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentRef.appendChild(renderer.domElement);

    // Wireframe sphere
    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.6,
    });
    const wireframe = new THREE.LineSegments(edges, lineMaterial);
    scene.add(wireframe);

    // Inner solid sphere with glow effect
    const innerGeo = new THREE.IcosahedronGeometry(1.2, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.15,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerSphere);

    camera.position.z = 5;

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      wireframe.rotation.x += 0.004;
      wireframe.rotation.y += 0.007;
      innerSphere.rotation.x -= 0.003;
      innerSphere.rotation.y -= 0.005;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      currentRef.removeChild(renderer.domElement);
      geometry.dispose();
      edges.dispose();
      lineMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={refContainer} className="opacity-90" />;
}
