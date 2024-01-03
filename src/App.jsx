import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from "./Pages/Home/Home.jsx"
import Navigation from "./Pages/Navigation/Navigation.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Footer from "./Pages/Footer/Footer.jsx";
import Leeromgeving from "./Pages/Leeromgeving/Leeromgeving.jsx";

function App() {


  return (
    <>
        <Navigation/>
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/leeromgeving" element={<Leeromgeving/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </main>
            <Footer/>
    </>
  )
}

export default App
