import { Parallax } from "react-parallax";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

import React from "react";

function imageOne() {
  return (
    <>
      <Parallax
        bgImage="https://cdn.5280.com/2023/03/00-Boulder-Skyline-Traverse_aerial.jpg"
        strength={800}
        className="image"
      >
        {/* Navvbar */}
        <div className="header">
          <p className="logo">ApexHills</p>

          <input type="checkbox" id="check" />
          <label for="check" className="icons">
            <i className="fa-solid fa-x cross"></i>
            <i className="fa-solid fa-bars menu"></i>
          </label>

          <nav>
            <a href="#">Home</a>
            <a href="">About</a>
            <a href="#">Places</a>
            <a href="#">Footer</a>
          </nav>
        </div>

        <div className="content" data-aos="fade-right">
          <span className="img-txt">Adventure awaits at every altitude</span>
        </div>
      </Parallax>
    </>
  );
}

export default imageOne;
