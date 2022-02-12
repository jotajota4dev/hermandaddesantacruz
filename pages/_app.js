import Head from 'next/head'
import Layout from '../components/layout'
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
      </Head>
      <Layout />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ibarra Real Nova';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('../public/fonts/ibarra-real/ibarra-real-nova-v18-latin-regular.woff2') format('woff2'),
        url('../public/fonts/ibarra-real/ibarra-real-nova-v18-latin-regular.woff') format('woff');
  }
  @font-face {
    font-family: 'Ibarra Real Nova';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url('../public/fonts/ibarra-real/ibarra-real-nova-v18-latin-600.woff2') format('woff2'),
        url('../public/fonts/ibarra-real/ibarra-real-nova-v18-latin-600.woff') format('woff');
  }
  @font-face {
    font-family: 'Ibarra Real Nova';
    font-style: italic;
    font-weight: 600;
    src: local(''),
        url('../public/fonts/ibarra-real/ibarra-real-nova-v18-latin-600italic.woff2') format('woff2'),
        url('../public/fonts/ibarra-real/ibarra-real-nova-v18-latin-600italic.woff') format('woff');
  }
  @font-face {
    font-family: 'Rokkitt';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('../public/fonts/rokkitt/rokkitt-v27-latin-regular.woff2') format('woff2'),
        url('../public/fonts/rokkitt/rokkitt-v27-latin-regular.woff') format('woff');
  }
  @font-face {
    font-family: 'Rokkitt';
    font-style: normal;
    font-weight: 500;
    src: local(''),
        url('../public/fonts/rokkitt/rokkitt-v27-latin-500.woff2') format('woff2'),
        url('../public/fonts/rokkitt/rokkitt-v27-latin-500.woff') format('woff');
  }
  @font-face {
    font-family: 'Rokkitt';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url('../public/fonts/rokkitt/rokkitt-v27-latin-600.woff2') format('woff2'),
        url('../public/fonts/rokkitt/rokkitt-v27-latin-600.woff') format('woff');
  }
  html {
    font-family: 'Rokkitt', Arial, Helvetica, sans-serif;
  }
  body {
    margin: 0;
    background-color: #f9f9f9;
  }
`
