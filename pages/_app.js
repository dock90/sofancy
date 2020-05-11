import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #f7f9fc;
    margin: 0;
    padding: 0;
    font-family: Lato, Roboto, 'Open Sans', sans-serif;
    color: #4c4f5a;
    max-width: 1200px;
  }
  p {
    font-size: 1.1rem;
  }
  a {
    text-decoration: none;
    color: #0872a1;
  }
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Lancaster based web app development studio."
          />
          <meta name="keywords" content="Web App, Development, Studio"></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </div>
    )
  }
}
