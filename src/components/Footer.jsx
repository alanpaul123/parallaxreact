import React from "react";


function Footer() {
  
  return (
    <>
      <footer>
        <ul>
          <li className="fh">Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>

        <ul>
          <li className="fh">Location</li>
          <li className="kk">
            <i class="fa-solid fa-location-dot"></i> Kochi,Kerala
          </li>
          <li>+91 4567843</li>
          <li>More Places</li>
        </ul>
        <div className="fooLink">
          <p className="logo  a">ApexHills</p>
          <p className="h">
            Visit the best hills <br /> in the world a view
            <br /> worth beholding
          </p>

          <div className="socials">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-whatsapp"></i>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
