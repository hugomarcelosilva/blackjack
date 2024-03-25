import { Button } from './ui/button'

export function GameControls({ gameStatus, onHit, onStand, onStartNewGame }) {
  return (
    <>
      {gameStatus === 'In Progress' ? (
        <div className="flex gap-2">
          <Button variant="default" size="lg" onClick={onHit}>
            Hit
          </Button>
          <Button variant="destructive" size="lg" onClick={onStand}>
            Stand
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <Button onClick={onStartNewGame}>New Game</Button>
        </div>
      )}
    </>
  )
}
