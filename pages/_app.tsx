import type { AppProps } from 'next/app'
import { GlobalStyle } from '../public/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <GlobalStyle/>
    <Component {...pageProps} />
    </>
  )
}
