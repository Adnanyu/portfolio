import { useState, useEffect } from "react";

const TypingLoop = () => {
  const phrases = [
    "full-stack developer.",
    "backend developer.",
    "CS Master's student"
  ];

  const highlightParts = [
    'full-stack',
    'backend',
    "CS Master's"
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [startTyping, setStartTyping] = useState(false); // delay flag

  useEffect(() => {
    // Wait 3 seconds before starting
    const delayTimeout = setTimeout(() => setStartTyping(true), 3000);
    return () => clearTimeout(delayTimeout);
  }, []);

  useEffect(() => {
    if (!startTyping) return; // do nothing until delay passes

    const TYPING_SPEED = 100;
    const DELETING_SPEED = 70;
    const PAUSE_AFTER_TYPING = 1000;

    const currentText = phrases[currentPhrase];

    let timeout;

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }, DELETING_SPEED);
      } else {
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase, startTyping, phrases]);

  const highlight = highlightParts[currentPhrase];
  const parts = displayText.split(highlight);
  return (
    <p className="sub-text">
      I am a{' '}
      {parts[0]}
      {parts[1] !== undefined && (
        <span style={{ color: 'rgba(255, 0, 0, 1)' }}>{highlight}</span>
      )}
      {parts[1]}
    </p>
  );
};

export default TypingLoop;
