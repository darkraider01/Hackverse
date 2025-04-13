import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RegisterSection = styled.section`
  min-height: 60vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  opacity: 0;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-bottom: 2px solid #00ffcc;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-bottom-color: #ff00cc;
  }
`;

const Button = styled.button`
  padding: 0.5rem 2rem;
  background: #00ffcc;
  border: none;
  border-radius: 5px;
  color: #0a0a1e;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

function Register({ id }) {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.to(formRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: `#${id}`,
        start: 'top 80%',
      },
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registered for HackaVerse!');
  };

  return (
    <RegisterSection id={id}>
      <h2>Join the HackaVerse</h2>
      <Form ref={formRef} style={{ transform: 'translateY(50px)' }} onSubmit={handleSubmit}>
        <Input type="text" placeholder="Name" required />
        <Input type="email" placeholder="Email" required />
        <Button type="submit">Register</Button>
      </Form>
    </RegisterSection>
  );
}

export default Register;