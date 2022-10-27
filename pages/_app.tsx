import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Theme from "../styles/theme"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme>
        <Head>
          <title> Anurag Kochar </title>
          <link rel="shortcut icon" href="/images/starfavicon.ico"/>
        </Head>
        <Component {...pageProps} />
      </Theme>
    
    </>
  )
}

export default MyApp
