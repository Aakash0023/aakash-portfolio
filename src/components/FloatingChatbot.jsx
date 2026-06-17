import { useState, useEffect } from "react";
import "../styles/floatingChatbot.css";

const answers = {
  "Why should I hire you?":
    "I combine Full-Stack Development, AI expertise, and problem-solving skills. I enjoy building products that create real-world impact.",

  "Tell me about SceneTheory":
    "SceneTheory is a movie discovery platform built using React and TMDB API featuring trailers, movie details, recommendations, and a modern cinematic UI.",

  "Tell me about Cerabai":
    "Cerabai is my final-year AI project focused on brain stroke detection using Machine Learning and medical imaging techniques.",

  "What tech stack do you use?":
    "React, Next.js, TypeScript, Node.js, Express.js, MongoDB, MySQL, Python, and GenAI technologies.",

  "What are your strengths?":
    "Problem-solving, Full-Stack Development, AI integration, fast learning, and transforming ideas into polished digital products.",
};

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [currentAnswer, setCurrentAnswer] = useState(
    "Hi 👋 Ask me something about Aakash."
  );

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    setDisplayedText("");

    const interval = setInterval(() => {
      setDisplayedText(currentAnswer.slice(0, index + 1));

      index++;

      if (index >= currentAnswer.length) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [currentAnswer]);

  return (
    <>
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

      {isOpen && (
        <div className="chat-popup">
          <h3>🤖 Ask Aakash</h3>

          <div className="chat-answer">
            {displayedText}
            <span className="typing-cursor">|</span>
          </div>

          <div className="chat-questions">
            {Object.keys(answers).map((question) => (
              <button
                key={question}
                onClick={() => setCurrentAnswer(answers[question])}
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatbot;
