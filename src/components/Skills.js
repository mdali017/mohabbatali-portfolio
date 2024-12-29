import React from "react";
import img1 from "../assets/img/skills/html5.png";
import img2 from "../assets/img/skills/css3.png";
import img3 from "../assets/img/skills/js.png";
import img4 from "../assets/img/skills/nodejs.png";
import img5 from "../assets/img/skills/reactjs.png";
import img6 from "../assets/img/skills/nextjs.png";
import img7 from "../assets/img/skills/git.png";
import img8 from "../assets/img/skills/figma.png";
import Marquee from "react-fast-marquee";

const skills = [
  { src: img5, alt: "React.js" },
  { src: img6, alt: "Next.js" },
  { src: img4, alt: "Node.js" },
  { src: img1, alt: "HTML5" },
  { src: img2, alt: "CSS3" },
  { src: img3, alt: "JavaScript" },
  { src: img7, alt: "Git" },
  { src: img8, alt: "Figma" },
  // { src: img1, alt: "HTML5" },
];

function Skills() {
  return (
    <section className="bg-tertiary py-12">
      <div className="container mx-auto">
        <Marquee>
          <div className="flex gap-4">
            {skills.map((skill, index) => (
              <img
                key={index}
                src={skill.src}
                alt={skill.alt}
                className="w-24 h-auto object-cover"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}

export default Skills;
