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

const IndexPage: NextPage = () => {
  return (
    <Layout title="Celenis Hostel">
      <Header />
      <Hero />

      <div className="page-wrapper">
        <Rooms />
      </div>

      <Testimonials />
      <div className="page-wrapper">
        <Facilities />
      </div>
      <ContactUs />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
