import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Courses from "./components/Courses";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        {/* Route for Hero and Features on the home page */}
                        <Route path="/" element={
                            <>
                                <Hero />
                                <Features />
                            </>
                        } />
                        {/* Additional Route for Courses */}
                        <Route path="/courses" element={<Courses />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
