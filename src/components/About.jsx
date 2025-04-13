import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = styled.section`
  min-height: 60vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
`;

const Text = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  text-align: center;
  color: #fff;
  z-index: 4;
  opacity: 0;
  position: relative;
`;

const CodeRain = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0.7;
`;

function About({ id }) {
  const textRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '0101HACKAVERSE';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(0);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00ffcc';
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 33);

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    gsap.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: `#${id}`,
        start: 'top 80%',
      },
    });

    return () => clearInterval(interval);
  }, [id]);

  return (
    <AboutSection id={id}>
      <CodeRain ref={canvasRef} />
      <Text ref={textRef} style={{ transform: 'translateY(50px)' }}>
        HackaVerse is a cosmic hackathon where innovators code the future, blending tech and creativity in a galactic showdown.
      </Text>
    </AboutSection>
  );
}

export default About;