import { useState } from "react";

import ImageOne from "./components/imageOne.jsx";
import ImageTwo from "./components/imageTwo.jsx";
import ImageThree from "./components/imageThree.jsx";
import Textbox from "./components/Textbox.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ImageOne />
      <ImageThree />
      <ImageTwo />
      <div className="container"></div>
      <Footer />
    </div>
  );
}

export default App;
