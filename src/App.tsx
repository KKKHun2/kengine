import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme";
import { DarkMode } from "./DarkMode";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Side1 from "./routes/Side1";
import Side2 from "./routes/Side2";
import Side3 from "./routes/Side3";
import Side4 from "./routes/Side4";
import Home from "./routes/Home";
import Side5 from "./routes/Side5";




function App() {
  const { isDark } = useContext(DarkMode);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Router>
        <Header />
          <Routes>
          <Route path="/Side5" element={<Side5 />} />
            <Route path="/Side4" element={<Side4 />} />
            <Route path="/Side3" element={<Side3 />} />
            <Route path="/Side2" element={<Side2 />} />
            <Route path="/Side1" element={<Side1 />} />
            <Route path="/" element={<Home />} />
          </Routes>
        <Footer /> 
      </Router>
    </ThemeProvider>
  );
}

export default App;
