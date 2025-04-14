import React from "react";
<<<<<<< HEAD
import About from "./About";
import  Home from "./Home"
import NavBar from "./NavBar"
 
=======
import NavBar from "../components/NavBar"
import Home from "../components/Home"
import {username} from "../data/user";
import About from "../components/About"
>>>>>>> d97dd4b (add)
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
