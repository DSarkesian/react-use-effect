function Card({card}) {
  console.log("in card:", card)
  return (
    <div>
      <p>Code: {card.code}</p>
      {/* <img src={require(`${card.image}`)}></img> */}
      <p>Suit: {card.suit}</p>
      <p>Value: {card.value}</p>
    </div>
  )
}

export default Card;