import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SponsorsSection = styled.section`
  min-height: 60vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const SponsorCard = styled.div`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #00ffcc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-align: center;
  opacity: 0;
  transform: rotateY(90deg);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 255, 204, 0.5);
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

function Sponsors({ id }) {
  const canvasRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Initialize Three.js for portal effect
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xff00cc,
      transparent: true,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Portal transition
    ScrollTrigger.create({
      trigger: `#${id}`,
      start: 'top top',
      end: 'bottom top',
      onEnter: () => {
        gsap.to(particlesMesh.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 1,
          ease: 'power3.out',
        });
      },
      onLeaveBack: () => {
        gsap.to(particlesMesh.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1,
          ease: 'power3.in',
        });
      },
    });

    // Card animations
    cardRefs.current.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        rotateY: 0,
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

  const sponsors = [
    'NebulaTech',
    'QuantumLabs',
    'StarForge',
    'CodeCosmos',
  ];

  return (
    <SponsorsSection id={id}>
      <Canvas ref={canvasRef} />
      <h2>Our Sponsors</h2>
      <CardContainer>
        {sponsors.map((name, index) => (
          <SponsorCard
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            {name}
          </SponsorCard>
        ))}
      </CardContainer>
    </SponsorsSection>
  );
}

export default Sponsors;