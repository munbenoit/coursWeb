import "bootstrap/dist/css/bootstrap.min.css";
import App from "next/app";
import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import "../static/assets/css/common.css";
import "./index.css";
import "./cv.css";
import "../components/Layout.css";
import "../components/NavMenu.css";
import "../components/Hero.css";
import "../components/CvCard.css";
import "../components/Footer.css";
import "../components/IndexCard.css";
import "../components/ContactForm.css";
import "../components/ContactMessage.css";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Cours Web</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
