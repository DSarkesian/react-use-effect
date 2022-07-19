import { useState, useEffect } from "react";
import axios from "axios"
import Card from "./Card.js"
const NEW_DECK = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
const DRAW_CARD_URL = `http://deckofcardsapi.com/api/deck/{id}/draw/?count=1`

function CardGame() {
  const [deck,setDeck] = useState({
    deckId: null,
    isLoading:true

  })
  console.log("deck",deck);
  const [cards, setCards] = useState([]);
  console.log("card",cards);

  useEffect(function fetchDeckWhenMounted() {
    async function fetchUser() {
      const userResult = await axios.get(NEW_DECK);
      console.log("USer result = ",userResult)
      setDeck({
        deckId: userResult.data.deck_id,
        isLoading: false,
      });
    }
    fetchUser();
  }, []);

  async function drawCard() {
    const response = await axios.get(
      `http://deckofcardsapi.com/api/deck/${deck.deckId}/draw/?count=1`);
    console.log("in drawCard", response);
    if (response.data.success === true) {
      const card = response.data.cards[0];
      setCards(currCards => [...currCards, card]);
    } else {
      alert("Error: no cards remaining!");
    }

  }

  if (deck.isLoading) return <i>Loading deck...</i>;

  return(
    <div>
      {cards ? cards.map(card => <Card card={card}/>) : <p></p>}
      <button onClick={drawCard}>Draw a Card</button>
    </div>
  )

}

export default CardGame
