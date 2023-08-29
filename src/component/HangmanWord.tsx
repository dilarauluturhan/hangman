type HangmanWordProps = {
  guessLetters: string[],
  wordToGuess: string
}

const HangmanWord = ({guessLetters, wordToGuess}: HangmanWordProps) => {
  return (
    <div style={{
      display: 'flex',
      gap: '.25em',
      fontSize: '4rem',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }}>
      {/* take the word, create individual characters, write with map */}
      {wordToGuess.split('').map((letter, index) => (
        <span style={{ borderBottom: '.6rem solid black' }} key={index}>
          <span style={{
            visibility: guessLetters.includes(letter)
              ? 'visible'
              : 'hidden'
          }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord