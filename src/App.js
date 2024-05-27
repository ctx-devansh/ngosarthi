import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './widgets/Home';
import AboutUs from './widgets/AboutUs';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>  
          <Route path="/home" element={<Home />}/>
          <Route path="/about-us" element={<AboutUs />}/>
          <Route path="*" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
