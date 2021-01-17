import React, { Component } from 'react'
import Head from 'next/head'
import App from 'next/app'
import { Header } from '../src/components'
import { HeaderHome } from '../src/components'
import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

class Layout extends Component {
  render() {
    const { children, isHome } = this.props;

    return (
      <>
        <Head>
          {/* <link rel="shortcut icon" href={FAVICON} /> */}
          <title>Wings</title>
        </Head>
        <div className="app">
          {isHome ? <HeaderHome /> : <Header />}
          <div className="app--page">{children}</div>
        </div>
      </>
    );
  }
}

export default class Pages extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Layout isHome={router.route == "/"}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

Pages.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps };
};
