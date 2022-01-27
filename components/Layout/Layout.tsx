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
      <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NS3DMPV');</script>
<!-- End Google Tag Manager -->
</script>
   <!-- Global site tag (gtag.js) - Google Analytics
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-213807336-1%22%3E</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-213807336-1');
</script> -->
                   
<!-- Global site tag (gtag.js) - Google Ads: 10816458096
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-10816458096"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-10816458096');
</script> -->
                   
    </Head>
    {children}
    <script
      defer={true}
      src="https://widget.siteminder.com/ibe.min.js"
    ></script>
  </div>
);

export default Layout;
