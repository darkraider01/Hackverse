
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQSection = styled.section`
  min-height: 80vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const Question = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0.5rem 0;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #00ffcc;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0;
`;

const QuestionText = styled.h3`
  padding: 1rem;
  margin: 0;
  color: #00ffcc;
`;

const Answer = styled.p`
  padding: 0 1rem 1rem;
  margin: 0;
  display: none;
  color: #fff;
  &.open {
    display: block;
  }
`;

function FAQ({ id }) {
  const questionRefs = useRef([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    // Animate questions
    questionRefs.current.forEach((question, index) => {
      gsap.to(question, {
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

    // Typing effect for answers
    questionRefs.current.forEach((question, index) => {
      const answer = question.querySelector('.answer');
      if (answer) {
        answer.addEventListener('transitionend', () => {
          if (openIndex === index) {
            gsap.fromTo(
              answer,
              { text: '' },
              {
                text: answer.dataset.text,
                duration: 1,
                ease: 'none',
                onUpdate: function () {
                  answer.textContent = this.targets()[0].text;
                },
              }
            );
          }
        });
      }
    });
  }, [id, openIndex]);

  const faqs = [
    {
      question: 'What is HackaVerse?',
      answer: 'A cosmic hackathon where coders build the future.',
    },
    {
      question: 'Who can participate?',
      answer: 'Anyone passionate about tech and innovation.',
    },
    {
      question: 'What are the prizes?',
      answer: 'Tech gadgets and galactic bragging rights!',
    },
  ];

  return (
    <FAQSection id={id}>
      <h2>FAQ</h2>
      {faqs.map((faq, index) => (
        <Question
          key={index}
          ref={(el) => (questionRefs.current[index] = el)}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <QuestionText>{faq.question}</QuestionText>
          <Answer
            className={`answer ${openIndex === index ? 'open' : ''}`}
            data-text={faq.answer}
          >
            {faq.answer}
          </Answer>
        </Question>
      ))}
    </FAQSection>
  );
}

export default FAQ;