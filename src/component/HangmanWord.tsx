type HangmanWordProps = {
  guessLetters: string[],
  wordToGuess: string,
  result?: boolean
}

const HangmanWord = ({ guessLetters, wordToGuess, result = false }: HangmanWordProps) => {
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
            visibility: guessLetters.includes(letter) || result
              ? 'visible'
              : 'hidden',
            color: !guessLetters.includes(letter) && result ? 'red' : 'black'
          }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord