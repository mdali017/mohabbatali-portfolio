import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactImg from "../../../assets/my_technology/logo_dark.svg";
import MaterialImg from "../../../assets/my_technology/download.png";
import expressImg from "../../../assets/my_technology/expressjs.png";

const MyTechnology = () => {
  const technologyData = [
    {
      id: 1,
      title: "React JS: The Library for Web and Native User Interfaces",
      description:
        "React.js is a front-end library that has become the go-to tool for building modern web applications. It allows developers to create reusable UI components and ensures efficient rendering through its virtual DOM.",
      icon: ReactImg,
    },
    {
      id: 2,
      title: "Node.js: Server-side JavaScript for Scalable Applications",
      description:
        "Node.js allows JavaScript to be run on the server, providing a lightweight and efficient runtime for building fast, scalable network applications. It's known for handling asynchronous requests with ease.",
      icon: "https://banner2.cleanpng.com/20180425/jrw/ave9tlfdy.webp",
    },
    {
      id: 3,
      title: "Express.js: Minimalist Web Framework for Node.js",
      description:
        "Express.js is a flexible Node.js web application framework that provides a robust set of features for building web and mobile applications, including routing, middleware integration, and more.",
      icon: expressImg,
    },
    {
      id: 4,
      title: "Next.js: The React Framework for Production",
      description:
        "Next.js is a React framework that enables server-side rendering, static site generation, and automatic code splitting, making it ideal for building high-performance web applications with SEO optimization.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
    {
      id: 5,
      title: "Redux Toolkit: The Standard Way to Manage State",
      description:
        "Redux Toolkit is the official, recommended toolset for efficient Redux development. It simplifies state management in React applications by providing optimized functions and pre-configured setup for the Redux store.",
      icon: "https://redux.js.org/img/redux-logo-landscape.png",
    },
    {
      id: 6,
      title: "MongoDB: The NoSQL Database for Modern Applications",
      description:
        "MongoDB is a popular NoSQL database known for its flexibility and scalability. It's designed to handle large volumes of structured or unstructured data and supports document-based storage with JSON-like format.",
      icon: "https://marketplacedesignoye.s3.ap-south-1.amazonaws.com/mongodb-branding-icon-symbol-logo-vector-_1540.png",
    },
    {
      id: 7,
      title: "PostgreSQL: The Open Source Relational Database",
      description:
        "PostgreSQL is a powerful, open-source relational database system known for its high performance, extensibility, and standards compliance. It supports complex queries, transactions, and advanced features such as JSON storage.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    },
    {
      id: 8,
      title:
        "Tailwind CSS: Utility-First CSS Framework for Rapid UI Development",
      description:
        "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes, allowing developers to build custom designs directly in their HTML. It helps create responsive, highly customizable user interfaces with ease.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      id: 9,
      title:
        "Material UI: React Components for Faster and Easier Web Development",
      description:
        "Material UI is a popular React component library that implements Google's Material Design guidelines, offering a wide range of customizable components for building user interfaces quickly and effectively.",
      icon: MaterialImg,
    },
  ];

  const bgColors = [
    "bg-gradient-to-l from-indigo-400 to-blue-00 hover:bg-gradient-to-r hover:duration-[5000ms]",
    "bg-gradient-to-r from-purple-500 to-pink-00 hover:bg-gradient-to-l",
    "bg-gradient-to-l from-yellow-400 to-orange-00 hover:bg-gradient-to-r",
    "bg-gradient-to-r from-red-400 to-pink-00 hover:bg-gradient-to-l",
    "bg-gradient-to-l from-indigo-400 to-purple-00 hover:bg-gradient-to-r",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-r py-4 from-gray-900">
        <div className="container mx-auto px-4 lg:px-16 my-8">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Left Section */}
            <div className="lg:w-1/2 w-full" data-aos="fade-right">
              <div className="flex flex-col gap-12 w-full">
                <div className="about">
                  <div className="mb-6">
                    <span className="text-xs font-medium border border-gray-700 tracking-[-0.12px] uppercase p-[10px] rounded-r-md text-white">
                      Modern
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-[50px] tracking-[-0.58px] leading-tight text-white">
                    My Regular Usage <br />
                    <span className="text-indigo-300 lg:text-[40px] text-2xl whitespace-nowrap">
                      Top Most Technologist
                    </span>
                  </h2>
                </div>
                <div
                  className="contact w-full bg-primary bg-gradient-to-r from-gray-800"
                  data-aos="zoom-in"
                >
                  <div className="flex flex-col gap-y-4">
                    {technologyData?.slice(0, 4).map((item, index) => (
                      <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className={`flex items-center justify-between rounded-lg px-5 py-7 hover:shadow-lg duration-1000 transition-transform transform hover:-translate-y-1 ${bgColors[index % bgColors.length]} w-full h-[100px]`} // Fixed height
                      >
                        <div className="mr-4">
                          <img
                            src={item.icon}
                            alt={`${item.title} Icon`}
                            className="w-[40px] sm:w-[50px] h-auto"
                          />
                        </div>
                        <div className="flex-grow w-full">
                          <h4 className="text-sm md:text-md font-semibold text-white">
                            {item.title?.slice(0, 50)}
                          </h4>
                          <p className="text-sm md:text-base">
                            {item.description.slice(0, 100)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="lg:w-1/2 w-full md:mt-24">
              <div className="flex flex-col gap-y-4">
                {technologyData
                  ?.slice(4, technologyData.length)
                  .map((item, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      className={`flex items-center justify-between border border-gray-300 rounded-lg px-5 py-7 hover:shadow-lg transition-transform transform hover:-translate-y-1 ${bgColors[index % bgColors.length]} w-full h-[100px]`} // Fixed height
                    >
                      <div className="mr-4">
                        <img
                          src={item.icon}
                          alt={`${item.title} Icon`}
                          className="w-[40px] sm:w-[50px] h-auto"
                        />
                      </div>
                      <div className="flex-grow w-full">
                        <h4 className="text-sm md:text-md font-semibold text-white">
                          {item.title?.slice(0, 50)}
                        </h4>
                        <p className="text-sm md:text-base">
                          {item.description.slice(0, 100)}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTechnology;
