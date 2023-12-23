import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from "./Pages/Home/Home.jsx"
import Navigation from "./Pages/Navigation/Navigation.jsx";

function App() {


  return (
    <>
        <Navigation/>
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </main>
    </>
  )
}

export default App
