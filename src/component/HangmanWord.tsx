const HangmanWord = () => {
  const word = 'test';
  const guessLetters = ['t']

  return (
    <div style={{
      display: 'flex',
      gap: '.25em',
      fontSize: '4rem',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }}>
      {/* take the word, create individual characters, write with map */}
      {word.split('').map((letter, index) => (
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