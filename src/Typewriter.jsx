import React, { useState, useEffect } from 'react';

export default function Typewriter({
  words = ['Hello', 'World'],
  speed = 100,
  eraseSpeed = 50,
  eraseDelay = 1500,
  typingDelay = 500,
  cursor = '|',
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (!deleting && subIndex === 0) {
      const timeout = setTimeout(() => {
        setSubIndex(1);
      }, typingDelay);
      return () => clearTimeout(timeout);
    }

    if (!deleting && subIndex === words[index].length + 1) {
      const timeout = setTimeout(() => {
        setDeleting(true);
      }, eraseDelay);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? eraseSpeed : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, speed, eraseSpeed, eraseDelay, typingDelay]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span style={{ fontFamily: 'monospace' }}>
      {words[index].substring(0, subIndex)}
      {blink ? cursor : ' '}
    </span>
  );
}