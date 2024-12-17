"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const HEIGHT = 200;
const WIDTH = 200;

export default function MyCanvas() {
  const refContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentRef = refContainer.current;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(WIDTH, HEIGHT);
    currentRef && currentRef.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(3, 3, 3);
    var material = new THREE.MeshBasicMaterial({ color: 0x0fff83 });
    var sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      currentRef && currentRef.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={refContainer}></div>;
}
