import {Routes, Route, useNavigate} from 'react-router-dom'
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
import {useContext} from "react";
import {AuthContext} from "./Context/AuthContext.jsx";
import Game from "./Pages/Courses/Game/Game.jsx";
import AdminPage from "./Pages/Admin/AdminPage.jsx";
import ProfilePage from "./Pages/Profile/ProfilePage.jsx";
// import ProtectetRoute from "./Compenents/ProtectetRoute.jsx";

function App() {

    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

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
                <Route path="/admin" element={<AdminPage/>}/>
                <Route path="/profiel" element={<ProfilePage/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/spel-des-levens" element={<Game/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registreren" element={<Register/>}/>
                <Route path="/*" element={<PageNotFound/>}/>
            </Routes>

            {/*<Routes>*/}
            {/*    <Route path="/" element={auth.isAuth ? <Home/> : <Login/>}/>*/}
            {/*    <Route path="/activiteiten" element={auth.isAuth ? <Activities/> : <Login/>}/>*/}
            {/*    <Route path="activiteiten/:id" element={auth.isAuth ? <ActivityMoreInfo/> : <Login/>}/>*/}
            {/*    <Route path="/leeromgeving" element={auth.isAuth ? <Leeromgeving/> : <Login/>}/>*/}
            {/*    <Route path="/profiel" element={auth.isAuth ? <Contact/> : <Login/>}/>*/}
            {/*    <Route path="/contact" element={auth.isAuth ? <Contact/> : <Login/>}/>*/}
            {/*    <Route path="/activiteit-toevoegen" element={auth.isAuth ? <AddActivity/> : <Login/>}/>*/}
            {/*    <Route path="/login" element={<Login/>}/>*/}
            {/*    <Route path="/registreren" element={<Register/>}/>*/}
            {/*    <Route path="/*" element={<PageNotFound/>}/>*/}
            {/*</Routes>*/}

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
