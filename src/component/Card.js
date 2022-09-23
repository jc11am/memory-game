import './Card.css'

const cards = ({ card, choice, flipped }) => {

  const playerChoice = () => {
    choice(card)
  }

    return (
        <div className='card'>
        <div className={ flipped ? "flipped" : "" }>
          <img className='front' src={card.src} alt="card front" />
          <img
          onClick={playerChoice}
           className='back'
            src="/img/cover.png"
             alt="card back" />
        </div>
        </div>
    )
  };

export default cards;

