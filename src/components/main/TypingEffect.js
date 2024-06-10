import React, { useEffect, useState } from 'react';
import '../../styles/Text.scss'

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;
      if (index > text.length) {
        clearInterval(intervalId);
      }
    }, 100); // Vitesse d'écriture (100ms par caractère)

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <span className="typing-effect">
      {displayedText}
    </span>
  );
}

export default TypingEffect;