import '../scss/header.scss'

function Header(props: {currentPlayer: string}) {
  return (
    <div className="score-container">
      <div className="score">
        <span>Next player:</span> {props.currentPlayer}
      </div>
      <button onClick={() => {window.location.reload()}}>
        RESTART
      </button>
    </div>
  )
}

export default Header