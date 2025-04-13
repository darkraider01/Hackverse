import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TeamsSection = styled.section`
  min-height: 60vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  max-width: 1200px;
`;

const TeamCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid #ff00cc;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  opacity: 0;
  position: relative;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #ff00cc;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 0, 204, 0.2), transparent);
    transition: 0.5s;
  }
  &:hover:after {
    left: 100%;
  }
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, #00ffcc, #ff00cc);
  border-radius: 50%;
  margin: 0 auto 0.5rem;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

function Teams({ id }) {
  const canvasRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Initialize Three.js for starfield
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: 0x00ffcc,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    camera.position.z = 5;

    // Mouse move effect
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 0.05;
      const y = (e.clientY / window.innerHeight - 0.5) * 0.05;
      gsap.to(particlesMesh.rotation, { x: y, y: x, duration: 0.5 });
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
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

  const teams = [
    { name: 'Quantum Coders', project: 'AI Nebula' },
    { name: 'Byte Blasters', project: 'VR Hack' },
    { name: 'Pixel Pioneers', project: 'AR Dashboard' },
    { name: 'Cosmo Devs', project: 'Blockchain Orbit' },
  ];

  return (
    <TeamsSection id={id}>
      <Canvas ref={canvasRef} />
      <h2>Meet the Teams</h2>
      <TeamGrid>
        {teams.map((team, index) => (
          <TeamCard
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{ transform: 'translateY(50px)' }}
          >
            <Avatar />
            <h3>{team.name}</h3>
            <p>{team.project}</p>
          </TeamCard>
        ))}
      </TeamGrid>
    </TeamsSection>
  );
}

export default Teams;