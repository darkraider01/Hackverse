import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const FooterSection = styled.footer`
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const Ticker = styled.div`
  display: flex;
  gap: 2rem;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 1rem;
`;

const Node = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 204, 0.2);
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: rgba(0, 255, 204, 0.4);
    transform: scale(1.05);
  }
`;

const CodeSnippet = styled.pre`
  margin-top: 2rem;
  font-size: 0.8rem;
  opacity: 0;
`;

function Footer() {
  const tickerRef = useRef(null);
  const snippetRef = useRef(null);

  useEffect(() => {
    gsap.to(tickerRef.current, {
      x: '-100%',
      duration: 20,
      repeat: -1,
      ease: 'linear',
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % (tickerRef.current.scrollWidth / 2)),
      },
    });

    gsap.to(snippetRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: snippetRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  const submissions = [
    { team: 'Quantum Coders', project: 'AI Nebula' },
    { team: 'Byte Blasters', project: 'VR Hack' },
    { team: 'Pixel Pioneers', project: 'AR Dashboard' },
  ];

  return (
    <FooterSection>
      <h3>Live Hackathon Updates</h3>
      <Ticker ref={tickerRef}>
        {submissions.map((submission, index) => (
          <Node
            key={index}
            onClick={() => {
              alert(`${submission.team}: ${submission.project}`);
            }}
          >
            {submission.team} submitted {submission.project}
          </Node>
        ))}
      </Ticker>
      <CodeSnippet ref={snippetRef}>
        {`// Sample HackaVerse submission
const hackaverse = {
  team: "${submissions[0]?.team || 'Quantum Coders'}",
  project: "${submissions[0]?.project || 'AI Nebula'}",
  innovate: () => console.log('Building the future!')
};
hackaverse.innovate();`}
      </CodeSnippet>
    </FooterSection>
  );
}

export default Footer;