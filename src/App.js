import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./widgets/Home";
import AboutUs from "./widgets/AboutUs";
import Media from "./widgets/Media";
import { Box } from "@mui/material";

function App() {
  return (
    <Box className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/*" element={<Home />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
