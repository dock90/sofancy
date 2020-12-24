import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #f7f9fc;
    margin: 0;
    padding: 0;
    font-family: Roboto, 'Open Sans', sans-serif;
    color: #4c4f5a;
    cursor: crosshair;
  }

  h1, h2 {
    font-family: Lato, sans-serif;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
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
            content="Salt Lake City based startup marketing studio."
          />
          <meta name="keywords" content="Market Validation, Startup Growth, Content Marketing"></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Lato&family=Roboto&display=swap');
          </style>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </div>
    )
  }
}
