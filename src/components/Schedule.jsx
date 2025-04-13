import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScheduleSection = styled.section`
  min-height: 60vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #00ffcc;
  border-radius: 10px;
  padding: 1rem;
  margin: 0.5rem;
  width: 100%;
  max-width: 600px;
  opacity: 0;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

function Schedule({ id }) {
  const cardRefs = useRef([]);

  useEffect(() => {
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
  }, [id]);

  const events = [
    { time: '09:00', desc: 'Opening Ceremony' },
    { time: '10:00', desc: 'Hacking Begins' },
    { time: '18:00', desc: 'Project Submission' },
  ];

  return (
    <ScheduleSection id={id}>
      <h2>Schedule</h2>
      {events.map((event, index) => (
        <Card
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          style={{ transform: 'translateY(50px)' }}
        >
          <h3>{event.time}</h3>
          <p>{event.desc}</p>
        </Card>
      ))}
    </ScheduleSection>
  );
}

export default Schedule;