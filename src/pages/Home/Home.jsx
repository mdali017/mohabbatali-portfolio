import React from "react";
import Hero from "../../components/Hero";
import Brands from "../../components/Brands";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Portfolio from "../../components/Portfolio";
import Services from "../../components/Services";
import ProjectView from "../../components/ProjectView";
import Testimonials from "../../components/Testimonials";
import Contact from "../../components/Contact";
// import MyTechnology from "../MyTechnology/MyTechnology";
import MyTechnology from '../../pages/Home/MyTechnology/MyTechnology';

const Home = () => {
  return (
    <div>
      <Hero />
      <MyTechnology />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      {/* <ProjectView /> */}
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
