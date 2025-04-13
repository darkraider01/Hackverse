import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import Teams from './components/Teams';
import Register from './components/Register';
import Gallery from './components/Gallery';
import NavOrb from './components/NavOrb';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const AppContainer = styled.div`
  font-family: 'Orbitron', sans-serif;
  color: #fff;
  background: #0a0a1e;
  overflow-x: hidden;
  position: relative;
`;

const CanvasOverlay = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const GlitchOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEklEQVQIW2P8z/D/PwMDAwMjjwEJYq0BkwAAAABJRU5ErkJggg==');
  opacity: 0;
  pointer-events: none;
  z-index: 2;
`;

function App() {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const glitchRef = useRef(null);

  useEffect(() => {
    // Initialize Three.js for background particles
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    composer.addPass(bloomPass);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: 0x00ffcc,
      transparent: true,
      opacity: 0.8,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    camera.position.z = 10;

    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 0.1;
      const y = (e.clientY / window.innerHeight - 0.5) * 0.1;
      gsap.to(camera.rotation, { x: y, y: x, duration: 0.5 });
    });

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.0005;
      composer.render();
    };
    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    });

    // Cursor trail
    document.addEventListener('mousemove', (e) => {
      const cursor = document.createElement('div');
      cursor.style.position = 'fixed';
      cursor.style.width = '5px';
      cursor.style.height = '5px';
      cursor.style.background = '#00ffcc';
      cursor.style.borderRadius = '50%';
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.pointerEvents = 'none';
      document.body.appendChild(cursor);
      gsap.to(cursor, {
        opacity: 0,
        scale: 0,
        duration: 1,
        onComplete: () => cursor.remove(),
      });
    });

    // Glitch transitions
    ['hero', 'about', 'schedule', 'prizes', 'sponsors', 'teams', 'register', 'gallery'].forEach((id) => {
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: 'top center',
        onEnter: () => {
          gsap.to(glitchRef.current, {
            opacity: 0.2,
            duration: 0.1,
            yoyo: true,
            repeat: 3,
            onComplete: () => gsap.set(glitchRef.current, { opacity: 0 }),
          });
          gsap.to(particlesMesh, {
            opacity: 0.5,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
          });
        },
      });
    });

    // Auto-play lo-fi music
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      const playAudio = () => {
        audioRef.current.play().catch((err) => {
          console.log('Autoplay blocked:', err);
          document.addEventListener('click', playAudio, { once: true });
        });
      };
      playAudio();
    }

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <AppContainer>
      <CanvasOverlay ref={canvasRef} />
      <GlitchOverlay ref={glitchRef} />
      <audio ref={audioRef} loop autoPlay>
        <source src="/lofi.mp3" type="audio/mp3" />
        <source src="https://www.chosic.com/wp-content/uploads/2021/07/lofi-2.mp3" type="audio/mp3" />
      </audio>
      <NavOrb />
      <Hero id="hero" />
      <About id="about" />
      <Schedule id="schedule" />
      <Prizes id="prizes" />
      <Sponsors id="sponsors" />
      <Teams id="teams" />
      <Register id="register" />
      <Gallery id="gallery" />
      <Footer />
    </AppContainer>
  );
}

export default App;