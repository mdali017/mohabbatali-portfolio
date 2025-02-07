import React from "react";
import heroImg from "../assets/img/my_pic_remove.png";
import { FileJson, Database, PlusSquare } from "lucide-react";

const Hero = () => {
  const handleDownloadCV = () => {
    // Replace this URL with your actual CV PDF file path
    const cvUrl = "/path/to/your/cv.pdf";
    
    // Create an anchor element
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Mohabbat_Ali_CV.pdf"; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full min-h-screen md:pl-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-8 mt-12">
          <h1 className="font-bold">
            <span className="text-3xl">Hi, I'm</span>{" "}
            <span className="text-purple-600 text-3xl">Mohabbat</span>
            <br />
            <span className="text-6xl">
              {" "}
              A Passionate
              <br />
              Software Developer
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl">
            Hi, I'm Mohabbat Ali ! With more than 3 years of experience, I'm
            ready to be a part of your wonderful project!
          </p>

          <div className="flex gap-4">
            <button 
              onClick={handleDownloadCV}
              className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
              Download CV
            </button>
            <button className="px-8 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
              Hire Me
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-purple-100 rounded-full"></div>
            <img
              src={heroImg}
              alt="Professional headshot"
              className="absolute inset-0 w-full h-full object-cover rounded-full p-2"
            />
            {/* Tech Stack Icons */}
            <div className="absolute -right-4 top-1/4 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-bounce">
              <FileJson className="w-6 h-6 text-purple-600" />
            </div>
            <div className="absolute -left-4 top-1/2 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-pulse">
              <Database className="w-6 h-6 text-purple-600" />
            </div>
            <div className="absolute right-8 bottom-0 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-bounce">
              <PlusSquare className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;