/* eslint-disable prettier/prettier */
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import GlobalStyle from '../styles/globals'

function App({ Component, pageProps }: AppProps) {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Head>
                <title>Next Avançado With LeafLet</title>
                <link rel="stylesheet" href="/img/logo.svg" />
                <link rel="stylesheet" href="/manifest.json" />
                <meta name="A simple project in next using GraphQl and LeafLet" />
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                    crossOrigin="" />
                <meta name="theme-color" content="#06092B" />
            </Head>
            <Component {...pageProps} />
        </React.Fragment>
    )
}

export default App
