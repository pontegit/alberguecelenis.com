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
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width" />
      <meta charSet="utf-8" />
    </Head>
    {children}
  </div>
);

export default Layout;
