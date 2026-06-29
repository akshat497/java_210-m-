import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Header } from "./Header/Header.jsx";
import Footer from "./Footer.jsx";
import {New} from "./New.jsx";


createRoot(document.getElementById("root")).render(
  <>
    {/* {props} in react  */}

    {/* <App  age={25} />

    <Footer /> */}
    <New/>
  </>,
);
