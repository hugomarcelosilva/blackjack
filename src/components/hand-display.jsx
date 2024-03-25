export function HandDisplay({ title, hand, score, hideFirstCard }) {
  return (
    <div>
      <div className="mb-2 text-lg font-medium">
        {title} <span className="text-xl font-bold">({score})</span>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {hand.map((card, index) => (
          <img
            className="mx-1 h-24 w-16 md:h-36 md:w-24"
            key={index}
            alt={`${card.value} of ${card.suit}`}
            src={
              hideFirstCard && index === 0
                ? 'cards/blue_back.png'
                : `cards/${card.value} of ${card.suit}.png`
            }
          />
        ))}
      </div>
    </div>
  )
}
