import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import type { LinksFunction } from '@remix-run/node'
import type { ReactNode } from 'react'
import { Loader } from './components/elements/Loader'
import styles from './styles/globals.scss?url'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]
const googleFonts = () => {
  const list = [
    `family=Noto+Sans+JP:wght@200;300;400;500;600;700;800`,
    `family=Roboto:wght@100;300;400;500;700;900`,
    `display=swap`,
  ]
  return `https://fonts.googleapis.com/css2?${list.join('&')}`
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link href={googleFonts()} rel="stylesheet" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

// export function HydrateFallback() {
//   return <Loader />
// }

export default function App() {
  return <Outlet />
}
