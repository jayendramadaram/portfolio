import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HeadMeta } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <HeadMeta />
    <Component {...pageProps} />
  </div>
}

export default MyApp
