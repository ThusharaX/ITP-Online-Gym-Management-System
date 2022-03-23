import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sample, Home } from "../pages";

// import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';

const AppRoutes = () => {
    return (
        <>
            <Router>
                {/* <NavBar /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sample" element={<Sample />} />

                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
                {/* <Footer /> */}
            </Router>
        </>
    )
}

export default AppRoutes