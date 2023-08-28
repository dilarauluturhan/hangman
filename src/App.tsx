import { useState } from 'react';
import words from './wordList.json';
import HangmanDraw from './component/HangmanDraw';
import HangmanWord from './component/HangmanWord';
import Keyboard from './component/Keyboard';


function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });

  const [guessLetters, setGuessLetters] = useState<string[]>([])
  return (
    <div style={{
      maxWidth: '800px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '2rem',
      margin: '1rem auto'
    }}>
      <div style={{
        fontSize: '2rem',
        textAlign: 'center'
      }}>
        Lose
        Win
      </div>
      <HangmanDraw />
      <HangmanWord />
      <Keyboard />
    </div>
  )
}

export default App
