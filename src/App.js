import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectView from './components/ProjectView';


// import components

const App = () => {
  return <div>
    <Header></Header>
    <Hero></Hero>
    <Brands></Brands>
    <About></About>
    <Skills></Skills>
    <Portfolio></Portfolio>
    <Services></Services>
    <ProjectView></ProjectView>
    <Testimonials></Testimonials>
    <Contact></Contact>
    <Footer></Footer>
    
    <div style={{height: '1000px'}}>

    </div>
  </div>;
};

export default App;
