import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from "./Pages/Home/Home.jsx"
import Contact from "./Pages/Contact/Contact.jsx";
import Footer from "./Pages/Footer/Footer.jsx";
import Leeromgeving from "./Pages/Leeromgeving/Leeromgeving.jsx";

import Activities from "./Pages/Activities/Activities.jsx";
import PageNotFound from "./Pages/PageNotFound/PageNotFound.jsx";
import ActivityMoreInfo from "./Pages/Activities/ActivityMoreInfo.jsx";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Pages/Navigation/Navbar.jsx";
import Login from "./Pages/LoginRegister/Login.jsx";
import Register from "./Pages/LoginRegister/Register.jsx";
import ShowNavBar from "./Compenents/ShowNavBar.jsx";
import Game from "./Pages/Courses/Game/Game.jsx";
import AdminPage from "./Pages/Admin/AdminPage.jsx";
import ProfilePage from "./Pages/Profile/ProfilePage.jsx";

import GameContentId from "./Pages/Courses/Game/GameContentId.jsx";
import Meditations from "./Pages/Courses/Meditations/Meditations.jsx";
import MeditationID from "./Pages/Courses/Meditations/MeditationID.jsx";
import ProtectedRoute from "./Compenents/ProtectedRoute.jsx";



function App() {

    return (
        <>
            <ShowNavBar>
                <Navbar/>
            </ShowNavBar>

            <Routes>
                <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
                <Route path="/activiteiten" element={<ProtectedRoute><Activities/></ProtectedRoute>}/>
                <Route path="/activiteiten/:id" element={<ProtectedRoute><ActivityMoreInfo/></ProtectedRoute>}/>
                <Route path="/leeromgeving" element={<ProtectedRoute><Leeromgeving/></ProtectedRoute>}/>
                <Route path="/meditaties" element={<ProtectedRoute><Meditations/></ProtectedRoute>}/>
                <Route path="/meditaties/:id" element={<ProtectedRoute><MeditationID/></ProtectedRoute>}/>
                <Route path="/admin" element={<ProtectedRoute><AdminPage/></ProtectedRoute>}/>
                <Route path="/profiel" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/>
                <Route path="/contact" element={<ProtectedRoute><Contact/></ProtectedRoute>}/>
                <Route path="/spel-des-levens" element={<ProtectedRoute><Game/></ProtectedRoute>}/>
                <Route path="/spel-des-levens/:id" element={<ProtectedRoute><GameContentId/></ProtectedRoute>}/>

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
