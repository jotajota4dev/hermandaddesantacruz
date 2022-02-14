import Head from 'next/head'
import Layout from 'components/layout'
import { createGlobalStyle } from 'styled-components'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Hermandad de Santa Cruz</title>
        <meta
          name="description"
          content="Ilustre y antigua Hermandad del Santísimo Sacramento y Nuestra Señora de la Paz; Fervorosa Cofradía de nazarenos del Santísimo Cristo de las Misercordias, Santa María de la Antigua y Nuestra Señora de los Dolores"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400;0,600;1,600&family=Rokkitt:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Rokkitt', Arial, Helvetica, sans-serif;
    * {
      box-sizing: border-box;
    }
  }
  body {
    margin: 0;
    background-color: #f9f9f9;
  }
`
