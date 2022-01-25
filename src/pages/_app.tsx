/* eslint-disable prettier/prettier */
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import GlobalStyle from '../styles/globals'

function App({ Component, pageProps }: AppProps) {
    return (
        <React.Fragment>
            <Head>
                <title>Next Avançado With LeafLet</title>
                <link rel="stylesheet" href="/im" />
                <meta name="A simple project in next using GraphQl and LeafLet"/>
            </Head>
            <Component {...pageProps} />
        </React.Fragment>
    )
}

export default App
