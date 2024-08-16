import { useState } from 'react';
import { marked } from 'marked';
import '/app/globals.css';

function Flashcard() {
  const [prompt, setPrompt] = useState('');
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateFlashcard = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate flashcard');
      }

      const data = await response.json();
      const newFlashcard = {
        front: data.front,
        back: data.back,
        flipped: false,
      };
      setFlashcards([...flashcards, newFlashcard]);
      setPrompt('');
    } catch (error) {
      console.error('Error generating flashcard:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFlip = (index) => {
    setFlashcards(flashcards.map((flashcard, i) =>
      i === index ? { ...flashcard, flipped: !flashcard.flipped } : flashcard
    ));
  };

  const handleReset = () => {
    setFlashcards([]);
  };

  return (
    <div className="container">
      <h1>SocialQ Flashcard Generator</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter the context for your flashcard"
      />
      <button onClick={handleGenerateFlashcard} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Flashcard'}
      </button>
      <button onClick={handleReset} style={{ marginLeft: '10px' }}>
        Reset All
      </button>

      {flashcards.map((flashcard, index) => (
        <div
          key={index}
          className={`flashcard ${flashcard.flipped ? 'flipped' : ''}`}
          onClick={() => handleFlip(index)}
        >
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <h2>Front</h2>
              <div dangerouslySetInnerHTML={{ __html: marked(flashcard.front) }} />
            </div>
            <div className="flashcard-back">
              <h2>Back</h2>
              <div dangerouslySetInnerHTML={{ __html: marked(flashcard.back) }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Flashcard;