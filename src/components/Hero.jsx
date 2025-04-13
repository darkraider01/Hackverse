import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = styled.section`
  min-height: 60vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 3;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #00ffcc;
  text-shadow: 0 0 10px #00ffcc;
  z-index: 4;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

function Hero({ id }) {
  const canvasRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0xff00cc, wireframe: true });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    ScrollTrigger.create({
      trigger: `#${id}`,
      start: 'top top',
      end: 'bottom top',
      onEnter: () => {
        gsap.to(torus.scale, { x: 1, y: 1, z: 1, duration: 1, ease: 'power3.out' });
      },
      onLeaveBack: () => {
        gsap.to(torus.scale, { x: 0, y: 0, z: 0, duration: 1, ease: 'power3.in' });
      },
    });

    return () => {
      renderer.dispose();
    };
  }, [id]);

  return (
    <HeroSection id={id}>
      <Canvas ref={canvasRef} />
      <Title ref={titleRef}>Welcome to HackaVerse</Title>
    </HeroSection>
  );
}

export default Hero;