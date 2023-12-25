// import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";

const Main = (props) => {
  return (
    <div className="App">
      <Header />

      <div>
        <main class="main">
          <Home
            hometext={props.hometext}
            name={props.name}
            role={props.role}
            mail={"mailto:" + props.mail}
          />
          <About abouttext={props.abouttext} skilltext={props.skilltext} />
          <Services />
          <Projects getProjectId={props.getProjectIdHandler} />;
          <Contact />
        </main>
        <Footer
          name={props.name}
          mail={props.mail}
          role={props.role}
          mobile={props.mobile}
          abouttext={props.hometext}
        />
      </div>
      {/* //  <!--========== SCROLL UP ==========-->  */}
      <a href="#" class="scrollup" id="scroll-up">
        <i class="ri-arrow-up-s-line"></i>
      </a>
    </div>
  );
};

export default Main;
