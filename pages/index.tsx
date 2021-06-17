import * as React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";

import Footer from "../components/Footer";
import Facilities from "../components/Home/Facilities";
import Hero from "../components/Home/Hero";
import Testimonials from "../components/Home/Testimonials";
import Header from "../components/Header";
import ContactUs from "../components/Home/ContactUs";
import Rooms from "../components/Home/Rooms";
import Reservations from "../components/Home/Reservations";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Celenis Hostel">
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
