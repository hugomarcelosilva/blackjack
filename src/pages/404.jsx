import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="font-bond text-4xl">Page not found</h1>
      <p className="text-accent-foreground">
        Back to the{' '}
        <Link to="/" className="text-sky-500 dark:text-sky-400">
          Blackjack Game
        </Link>
      </p>
    </div>
  )
}
