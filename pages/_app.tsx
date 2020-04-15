import "bootstrap/dist/css/bootstrap.min.css";
import App, { Container } from "next/app";
import React from "react";
import Layout from "../components/Layout";
import "../components/Carousel.css";
import "./cv.css";
import "../components/Layout.css";

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
        <Container>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </>
    );
  }
}
