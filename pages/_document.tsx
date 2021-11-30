import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-213807336-1%22%3E"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-213807336-1');
          </script>
        </Head>
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
