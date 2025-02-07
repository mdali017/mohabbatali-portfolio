import React from "react";
import Container from "../../components/common/Container";
import project1 from "../../assets/img/projects/project1.png";
import project2 from "../../assets/img/projects/project2.png";
import project3 from "../../assets/img/projects/project3.png";
import project4 from "../../assets/img/projects/project4.png";

const AllProjects = () => {
  const ProjectData = [
    {
      id: 1,
      image: project1,
      name: "Restro Queen",
      description:
        "Restro Queen is an innovative MERN-based project designed to revolutionize the restaurant industry's digital landscape.",
      liveLink: "https://restro-queen-45b4c.web.app",
      clientCode: "https://github.com/mdali017/restro-queen-client",
      serverCode: "https://github.com/mdali017/restro-queen-server",
      userCred: "info@gmail.com / 123456",
      adminCred: "info10@gmail.com / 123456",
      isShowInTop: true
    },
    {
      id: 2,
      image: project2,
      name: "vegFoods",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni recusandae iure eaque corporis.",
      liveLink: "https://zesty-cannoli-f6328d.netlify.app/",
      clientCode: "https://github.com/mdali017/vegFoods",
      serverCode: "https://github.com/mdali017/vegFoods-server",
    },
    {
      id: 3,
      image: project3,
      name: "DreamChef",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni recusandae iure eaque corporis.",
      liveLink: "https://mellow-custard-58dbcf.netlify.app/",
      clientCode: "https://github.com/mdali017/vegFoods",
      serverCode: "https://github.com/mdali017/vegFoods-server",
    },
    {
      id: 4,
      image: project4,
      name: "Kid Sport Academy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni recusandae iure eaque corporis.",
      liveLink: "https://kid-sports-academy.web.app/",
      clientCode: "https://github.com/mdali017/vegFoods",
      serverCode: "https://github.com/mdali017/vegFoods-server",
    },
  ];

  return (
    <div className="py-12 ">
      <Container>
        {/* Heading Section */}
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          All Projects
        </h1>

        {/* Search Input */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search Projects ..."
            className="w-full max-w-lg p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>

        {/* Projects Grid */}
        <section className="grid lg:grid-cols-3 gap-8">
          {ProjectData?.map((project) => (
            <div
              key={project.id}
              className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full">
                {/* Image remains unchanged */}
                <div className="project-section-style">
                  <img
                    className="img-scroller w-full object-cover rounded-t-lg"
                    src={project.image}
                    alt={project.name}
                  />
                </div>

                {/* Updated content section */}
                <div className="px-6 py-4 h-[250px] flex flex-col justify-between bg-white rounded-b-lg">
                  <h2 className="text-lg font-semibold text-gray-800 ">
                    Project Name:{" "}
                    <span className="text-2xl font-bold text-orange-500">
                      {project.name}
                    </span>
                  </h2>
                  <div>
                    {project.userCred && (
                      <p className="text-xs text-gray-500 ">
                        <strong>User:</strong> {project.userCred}
                      </p>
                    )}

                    {project.adminCred && (
                      <p className="text-xs text-gray-500 ">
                        <strong>Admin:</strong> {project.adminCred}
                      </p>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Updated buttons layout */}
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm whitespace-nowrap text-center bg-orange-600 rounded-md text-white px-2 py-1 roun "
                    >
                      Live Site
                    </a>

                    <a
                      href={project.clientCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm whitespace-nowrap text-center bg-blue-600 rounded-md text-white px-2 py-1 roun "
                    >
                      Client Site Code
                    </a>

                    <a
                      href={project.serverCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm whitespace-nowrap text-center bg-green-600 rounded-md text-white px-2 py-1 roun "
                    >
                      Server Site Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </Container>
    </div>
  );
};

export default AllProjects;
