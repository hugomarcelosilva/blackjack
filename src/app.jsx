import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from '@/components/theme/theme-provider'

import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="blackjack-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | challenge" />
        <Toaster richColors position="bottom-center" closeButton />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
