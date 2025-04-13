import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory';

const ARToggle = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem;
  background: #00ffcc;
  border: none;
  color: #0a0a1e;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

function ARButton() {
  const buttonRef = useRef(null);
  let renderer = null;

  const toggleAR = async () => {
    if (!renderer) {
      // Initialize Three.js for AR
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.xr.enabled = true;
      document.body.appendChild(renderer.domElement);

      // Logo (placeholder sphere)
      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ffcc });
      const logo = new THREE.Mesh(geometry, material);
      scene.add(logo);
      logo.position.set(0, 0, -2);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff);
      scene.add(ambientLight);

      // Orbit controls for non-AR
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enabled = false;

      // Animation loop
      const animate = () => {
        renderer.setAnimationLoop(() => {
          logo.rotation.y += 0.01;
          renderer.render(scene, camera);
        });
      };
      animate();

      // Start AR session
      try {
        const session = await navigator.xr.requestSession('immersive-ar', {
          optionalFeatures: ['dom-overlay'],
          domOverlay: { root: document.body },
        });
        renderer.xr.setSession(session);
        buttonRef.current.textContent = 'Exit AR';
      } catch (error) {
        alert('AR not supported on this device.');
      }
    } else {
      renderer.xr.getSession()?.end();
      renderer.domElement.remove();
      renderer = null;
      buttonRef.current.textContent = 'View in AR';
    }
  };

  return (
    <ARToggle ref={buttonRef} onClick={toggleAR}>
      View in AR
    </ARToggle>
  );
}

export default ARButton;