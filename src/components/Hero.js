import React, { useEffect } from "react";
import heroImg from "../assets/img/Portfolio-hero-Section2.png";
// import heroImg from "../assets/img/my pic.png";
import "aos/dist/aos.css";
import AOS from "aos";
const PDF_FILE_URL =
  "https://drive.google.com/file/d/1yFXMDKmImDa2rvZeqRFO4DQ_OYEWxW0M/view?usp=sharing";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleDownloadCV = (url) => {
    fetch("Resume (1).pdf")
      .then((res) => res.blob())
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume (1).pdf";
        alink.click();
      });
  };
  return (
    <section
      id="home"
      className="lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden "
    >
      <div className="container flex mx-auto h-full ">
        {/* left */}
        <div
          data-aos="fade-up"
          className="flex flex-1 flex-col lg:mt-40 items-center lg:items-start"
        >
          <p className="text-lg text-accent mb-[22px]">
            Hey, I'm Mohabbat Ali 🙂
          </p>
          <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
            I Develop & Design <br /> Web Interface
          </h1>
          <p className="pt-4 pb-8  md:pt-6 md:pb-12 max-w-[480px] text-sm  ">
            As a skilled MERN Stack Developer with 2 years of experience, I have
            a proven track record of designing, developing, and deploying
            dynamic and responsive web applications.
          </p>
          <button
            onClick={() => {
              handleDownloadCV(PDF_FILE_URL);
            }}
            className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all"
          >
            Download CV
          </button>
        </div>

        {/* right */}
        <div
          data-aos="fade-down"
          className="hidden lg:flex  flex-1 justify-center items-center mt-20  ]"
        >
          <img
            src={heroImg}
            className="w-full scale-110 hover:scale-125 duration-300"
            style={{}}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
