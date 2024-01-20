import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from "./Pages/Home/Home.jsx"

import Contact from "./Pages/Contact/Contact.jsx";
import Footer from "./Pages/Footer/Footer.jsx";
import Leeromgeving from "./Pages/Leeromgeving/Leeromgeving.jsx";
import AddActivity from "./Pages/AddActivity/AddActivity.jsx";
import Activities from "./Pages/Activities/Activities.jsx";
import PageNotFound from "./Pages/PageNotFound/PageNotFound.jsx";
import ActivityMoreInfo from "./Pages/Activities/ActivityMoreInfo.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginRegister from "./Pages/LoginRegister/LoginRegister.jsx";
import Navbar from "./Pages/Navigation/Navbar.jsx";

function App() {


  return (
    <>


        <Navbar/>
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/activiteiten" element={<Activities/>}/>
                <Route path="activiteiten/:id" element={<ActivityMoreInfo/>}/>
                <Route path="/leeromgeving" element={<Leeromgeving/>}/>
                <Route path="/profiel" element={<Contact/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/activiteit-toevoegen" element={<AddActivity/>}/>
                <Route path="/login-registreren" element={<LoginRegister/>}/>
                <Route path="/*" element={<PageNotFound/>}/>
            </Routes>
        </main>
            <Footer/>

        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </>
  )
}

export default App
