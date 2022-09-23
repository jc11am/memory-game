import { useState, useEffect } from 'react'
import './App.css'
import Cards from "./component/Card"


const allCards = [
  { "src": "/img/helmet-1.png", matched:false },
  { "src": "/img/potion-1.png", matched:false },
  { "src": "/img/ring-1.png", matched:false },
  { "src": "/img/scroll-1.png", matched:false },
  { "src": "/img/shield-1.png", matched:false },
  { "src": "/img/sword-1.png", matched:false },
]

function App() {

  const [ cards, setCards ] = useState([])
  const [ firstChoice , setFirstChoice ] = useState(null)
  const [ secondChoice , setSecondChoice ] = useState(null)

  // save player choice

  const choice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card) 
  }


  // shuffle cards

  const shuffleCards = () =>{
      const shuffledCards = [ ...allCards, ...allCards ]
        .sort(()=> Math.random() - 0.5)
        .map((card) =>({ ...card, id: Math.random() }))

        setCards(shuffledCards)
  }

  // compare two selected cards

  useEffect(() => {
    if (firstChoice && secondChoice){
      
      if (firstChoice.src === secondChoice.src){
        setCards((prevCards) => {
          return prevCards.map((card) => {
              if(card.src === firstChoice.src){
                return {...card, matched: true}
              }else {
                return card
              }
            })      
        })
      resetGame()
    
      } else{
      setTimeout(() => {resetGame()}, 1000)
    }

  }}, [ firstChoice, secondChoice ])

  // reset game

  const resetGame = () => {
    setFirstChoice(null)
    setSecondChoice(null)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
      {cards.map((card) => (
        <Cards
         choice={choice} 
         key={card.id}
          card={card}
          flipped={ card === firstChoice || card === secondChoice || card.matched } />
      ))}
      </div>
    </div>
  );
}

export default App