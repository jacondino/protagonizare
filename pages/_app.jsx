import React, { Component } from 'react'
import Head from 'next/head'
import App from 'next/app'
import { Header } from '../src/components'
import { HeaderHome } from '../src/components'
import './style.scss'


class Layout extends Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Head>
          {/* <link rel="shortcut icon" href={FAVICON} /> */}
          <title>Wings</title>
        </Head>
        <div className="app">
          {/* <Header /> */}
          <HeaderHome />
          <div className="app--page">{children}</div>
        </div>
      </>
    )
  }
}

export default class Pages extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

Pages.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

  return { pageProps }
}