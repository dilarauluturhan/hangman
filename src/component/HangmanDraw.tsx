const HEAD = (
  <div style={{
    width: '50px',
    height: '50px',
    borderRadius: '100%',
    border: '7px solid black',
    position: 'absolute',
    top: '50px',
    right: '-20px'
  }} />
)

const BODY = (
  <div style={{
    width: '10px',
    height: '120px',
    background: 'black',
    position: 'absolute',
    top: '100px',
    right: '0'
  }} />
)

const RIGHT_ARM = (
  <div
    style={{
      width: "90px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-90px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
)

const LEFT_ARM = (
  <div
    style={{
      width: "90px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
)

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
)

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
)

const HangmanDraw = () => {
  return (
    <div style={{ position: 'relative' }}>
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div style={{
        height: '50px',
        width: '10px',
        background: 'black',
        position: 'absolute',
        top: '0',
        right: '0'
      }} />

      <div style={{
        height: '10px',
        width: '200px',
        background: 'black',
        marginLeft: '120px'
      }} />

      <div style={{
        height: '400px',
        width: '10px',
        background: 'black',
        marginLeft: '120px'
      }} />

      <div style={{
        height: '10px',
        width: '250px',
        background: 'black'
      }} />
    </div>
  )
}

export default HangmanDraw