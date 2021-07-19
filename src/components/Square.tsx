import "../scss/square.scss"

function Square(props: {handleOnClick: React.MouseEventHandler<HTMLButtonElement>, selected: string}) {
  const imageSrc = `./images/${props.selected ? props.selected : 'square'}.png`
  return (
    <div className="square">
      <button onClick={props.handleOnClick}>
        <img src={imageSrc} alt="square_image"></img>
      </button>
    </div>
  )
}

export default Square