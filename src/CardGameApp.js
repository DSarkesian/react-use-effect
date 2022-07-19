import { useState, useEffect } from "react";
import axios from "axios"
const NEW_DECK = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
//const DRAWCARD = "http://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2"

function CardGame() {
  const [deck,setDeck] = useState({
    deckID: null,
    success:true,
    isLoading:true

  })
  console.log("deck",deck);
  // const [card, setCard] = useState({
  //   data:null,
  //   isLoading:true,
  //   deckID: null
  // });
  // console.log("card",card);

  useEffect(function fetchDeckWhenMounted() {
    async function fetchUser() {
      const userResult = await axios.get(NEW_DECK);
      console.log("USer result = ",userResult)
      setDeck({
        deckID: userResult.data.deckID,
        isLoading: false,
        success: userResult.data.success
      });
    }
    fetchUser();
  }, [deck.success]);

  if (deck.isLoading) return <i>Loading deck...</i>;

  return(
    <div>
      <p>{deck.deckID}</p>
    </div>
  )

}

export default CardGame
