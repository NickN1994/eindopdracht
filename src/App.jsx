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
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Pages/Navigation/Navbar.jsx";
import Login from "./Pages/LoginRegister/Login.jsx";
import Register from "./Pages/LoginRegister/Register.jsx";
import ShowNavBar from "./Compenents/ShowNavBar.jsx";

function App() {

    return (
        <>
            <ShowNavBar>
                <Navbar/>
            </ShowNavBar>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/activiteiten" element={<Activities/>}/>
                <Route path="activiteiten/:id" element={<ActivityMoreInfo/>}/>
                <Route path="/leeromgeving" element={<Leeromgeving/>}/>
                <Route path="/profiel" element={<Contact/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/activiteit-toevoegen" element={<AddActivity/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registreren" element={<Register/>}/>
                <Route path="/*" element={<PageNotFound/>}/>
            </Routes>

            <ShowNavBar>
                <Footer/>
            </ShowNavBar>


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
