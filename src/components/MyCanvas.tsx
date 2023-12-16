"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MyCanvas() {
  const refContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentRef = refContainer.current;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, 300);

    currentRef && currentRef.appendChild(renderer.domElement);

    return () => {
      currentRef && currentRef.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={refContainer}></div>;
}
