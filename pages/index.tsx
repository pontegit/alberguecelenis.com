import * as React from "react";
import { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

import Facilities from "../components/Home/Facilities";
import Hero from "../components/Home/Hero";
import Testimonials from "../components/Home/Testimonials";
import ContactUs from "../components/Home/ContactUs";
import Rooms from "../components/Home/Rooms";
import Reservations from "../components/Home/Reservations";

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
};

export default Home;

const IndexPage: NextPage = () => {
  return (
    <Layout title="Albergue Celenis | Descanso en Caldas de Reis del Camino de Santiago">
      <div className="top">
        <div className="top_image"></div>
        <div className="top_overlay"></div>
        <Header />
        <Hero />
      </div>

      <div className="page-wrapper">
        <Rooms />
        <Reservations />
      </div>

      <Testimonials />
      <div className="page-wrapper">
        <Facilities />
      </div>
      <Reservations />
      <ContactUs />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
