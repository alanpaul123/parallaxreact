import { Parallax } from "react-parallax";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

import React from "react";

function imageTwo() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Parallax
        bgImage="https://hips.hearstapps.com/hmg-prod/images/beautiful-landscape-view-of-fuji-mountain-in-royalty-free-image-1623253648.jpg"
        strength={800}
        className="view"
      >
        <div className="box" data-aos="fade-right">
          <p>
            This exquisite landscapes captures ever enticing mountain view and
            mirror like lake.
          </p>
          <button className="btnE">Exploe now</button>
        </div>
      </Parallax>
    </>
  );
}

export default imageTwo;

// const ImageTwo = () => (
//   <Parallax
//     bgImage="https://hips.hearstapps.com/hmg-prod/images/beautiful-landscape-view-of-fuji-mountain-in-royalty-free-image-1623253648.jpg"
//     strength={800}
//     className="view"
//   >
//     <div className="box">
//       <p>
//         This exquisite lanscapes captures the beauty of <br /> ever enticing
//         mountain view and mirror like lake.
//       </p>
//       <button className="btnE">Exploe now</button>
//     </div>
//   </Parallax>
// );

// export default ImageTwo;
