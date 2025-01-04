import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Internships from "./components/Internships";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Colors } from "./components/Colors";

const App = () => {

  const [bgColor, setbgColor] = useState(Colors.backgroundLight);
  const [textColor, settextColor] = useState(Colors.textDark);
  const [symbolIcon, setsymbolIcon] = useState('🌙')
  const changeBackground = () => {
    setbgColor((prev) =>
      prev === Colors.backgroundLight ? Colors.backgroundDark : Colors.backgroundLight
    )
    settextColor((prev) =>
      prev === Colors.textDark ? Colors.textLigt : Colors.textDark
    )
    setsymbolIcon((prev) =>
      prev === '🌙' ? '☀️' : '🌙'
    )
  }


  return (
    <>
      <Header bgColor={bgColor} bgText={textColor} handleClick={changeBackground} symbol={symbolIcon} />
      <Home bgColor={bgColor} bgText={textColor} />
      <About bgColor={bgColor} bgText={textColor} />
      <Skills bgColor={bgColor} bgText={textColor} />
      <Internships bgColor={bgColor} bgText={textColor} />
      <Contact bgColor={bgColor} bgText={textColor} />
      <Footer bgColor={bgColor} bgText={textColor} />
    </>
  );
};

export default App;
