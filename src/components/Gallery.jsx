import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GallerySection = styled.section`
  min-height: 60vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  max-width: 1200px;
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid #00ffcc;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  opacity: 0;
  transform: perspective(1000px) rotateY(90deg);
  transition: transform 0.3s;
  &:hover {
    transform: perspective(1000px) rotateY(0deg) scale(1.05);
  }
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 150px;
  background: radial-gradient(circle, #00ffcc, #ff00cc);
  border-radius: 5px;
  margin-bottom: 0.5rem;
`;

function Gallery({ id }) {
  const cardRefs = useRef([]);

  useEffect(() => {
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

    // Particle burst on hover
    cardRefs.current.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        const burst = document.createElement('div');
        burst.style.position = 'absolute';
        burst.style.width = '100px';
        burst.style.height = '100px';
        burst.style.background = 'radial-gradient(circle, #00ffcc, transparent)';
        burst.style.borderRadius = '50%';
        burst.style.left = '50%';
        burst.style.top = '50%';
        burst.style.transform = 'translate(-50%, -50%)';
        card.appendChild(burst);
        gsap.to(burst, {
          scale: 2,
          opacity: 0,
          duration: 0.5,
          onComplete: () => burst.remove(),
        });
      });
    });
  }, [id]);

  const projects = [
    { name: 'AI Nebula', desc: 'Neural network visualizer' },
    { name: 'VR Hack', desc: 'Immersive coding game' },
    { name: 'AR Dashboard', desc: 'Augmented analytics' },
  ];

  return (
    <GallerySection id={id}>
      <h2>Project Showcase</h2>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <Thumbnail />
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </GallerySection>
  );
}

export default Gallery;