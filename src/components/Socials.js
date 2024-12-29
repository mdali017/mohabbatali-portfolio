import React from "react";
import { social } from "../data";

function Socials() {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return (
          <li
            className="flex  justify-center items-center text-green-500 "
            key={index}
          >
            <a href={item.href} className=" text-xl">
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Socials;
