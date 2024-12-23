import React from "react";
import { Toaster } from "react-hot-toast";

import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Team from "../components/LatestProducts";

import CallToAction from "../components/CallToAction";

import TestimonialsCarousel from "../components/Testimonials";
import Partners from "../components/Partners";
import FAQ from "../components/FAQ";


const Home = () => {
  return (
    <div>
      <div>
        <Toaster position="top-center" />
        <Hero />

        <Gallery />
        <Team />
        <CallToAction />
        <TestimonialsCarousel />
        <Partners />
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
