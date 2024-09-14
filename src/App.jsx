
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar"
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs"
import { Route, Routes } from "react-router-dom";
import "./App.css"
import { useContextGlobal } from "./Components/utils/Context";





function App() {
  const {state} = useContextGlobal();

  return (

      <div className={`App ${state.isDarkMode ? 'dark-mode ':'light-mode'}`}>

<Navbar/>
    <Routes>
   
        <Route path="/" element= {<Home/>} />
        <Route path="/contact" element= {<Contact/>} />
        <Route path="/dentista/:id" element= {<Detail/>} />
        <Route path="/fav" element= {<Favs/>} />
   
    
    </Routes>
    <Footer/>
      </div>
     
  );
}

export default App;
