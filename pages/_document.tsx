import Document, { Html, Head, Main, NextScript } from "next/document";

import Script from 'next/script';

const Home = () => {
  return (
    <div class="container">
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-213807336-1');
        `}
      </Script>
    </div>
  )
}

export default Home;

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />{" "}
          <script
            defer
            async
            src="https://widget.siteminder.com/ibe.min.js"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
