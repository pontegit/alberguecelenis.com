import * as React from "react";
import Head from "next/head";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <div className="layout">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#e0b973" />
      <meta name="viewport" content="width=device-width" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/assets/images/logo-circle.png" />
      <meta
        name="description"
        content="Un lugar idílico donde descansar en el Camino Portugés de Santiago en Caldas de Reis."
      />      
</script>
    <!-- Google Analytics -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXX-Y', 'auto');
ga('send', 'pageview');
</script>
<!-- End Google Analytics -->
    </Head>
    {children}
    <script
      defer={true}
      src="https://widget.siteminder.com/ibe.min.js"
    ></script>
  </div>
);

export default Layout;
