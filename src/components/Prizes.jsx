import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrizesSection = styled.section`
  min-height: 60vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const PrizeItem = styled.div`
  font-size: 1.5rem;
  margin: 1rem;
  opacity: 0;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

function Prizes({ id }) {
  const canvasRef = useRef(null);
  const prizeRefs = useRef([]);

  useEffect(() => {
    // Three.js trophy effect
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ffcc, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // GSAP animations
    prizeRefs.current.forEach((prize, index) => {
      gsap.to(prize, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `#${id}`,
          start: 'top 80%',
        },
      });
    });

    return () => {
      renderer.dispose();
    };
  }, [id]);

  const prizes = ['1st: Quantum PC', '2nd: VR Headset', '3rd: Drone'];

  return (
    <PrizesSection id={id}>
      <Canvas ref={canvasRef} />
      <h2>Prizes</h2>
      {prizes.map((prize, index) => (
        <PrizeItem
          key={index}
          ref={(el) => (prizeRefs.current[index] = el)}
          style={{ transform: 'translateY(50px)' }}
        >
          {prize}
        </PrizeItem>
      ))}
    </PrizesSection>
  );
}

export default Prizes;