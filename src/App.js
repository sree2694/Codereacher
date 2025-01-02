import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Courses from "./components/Courses";
import ReactPage from "./components/Courses/front-end/ReactPage/Reactjs";
import AngularPage from "./components/Courses/front-end/AngularJs/Angularjs";
import VuePage from "./components/Courses/front-end/Vuejs";
import NodeJsPage from "./components/Courses/back-end/nodejs";
import SpringBootPage from "./components/Courses/back-end/springboot";
import DjangoPage from "./components/Courses/back-end/django";
import ExpressJsPage from "./components/Courses/back-end/expressjs";
import RubyRailsPage from "./components/Courses/back-end/rubyrails";
import MysqlPage from "./components/Courses/databases/mysql";
import PostgresqlPage from "./components/Courses/databases/postgresql";
import MongodbPage from "./components/Courses/databases/mongodb";
import SqlitePage from "./components/Courses/databases/sqlite";
import RedisPage from "./components/Courses/databases/redis";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import AboutUs from "./components/Header/AboutUs";
import TermsOfService from "./components/Footer/TermsOfService";
import HelpCenter from "./components/Footer/HelpCenter";
import HTMLPage from "./components/Courses/front-end/HTMLpage/Html";
import CSSPage from "./components/Courses/front-end/CSSPage/CSS";
import BootstrapPage from './components/Courses/front-end/Bootstrap/Bootstrap';

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
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms-of-service" element={<TermsOfService />} />
                        <Route path="/helpcenter" element={<HelpCenter />} />
                        {/* Technology Pages */}
                        <Route path="/react" element={<ReactPage />} />
                        <Route path="/angular" element={<AngularPage />} />
                        <Route path="/vuejs" element={<VuePage />} />
                        <Route path="/bootstrap" element={<BootstrapPage />} />
                        <Route path="/html" element={<HTMLPage />} />
                        <Route path="/css" element={<CSSPage />} />
                        <Route path="/nodejs" element={<NodeJsPage />} />
                        <Route path="/springboot" element={<SpringBootPage/>} />
                        <Route path="/django" element={<DjangoPage />} />
                        <Route path="/expressjs" element={<ExpressJsPage />} />
                        <Route path="/rubyrails" element={<RubyRailsPage />} />
                        <Route path="/mysql" element={<MysqlPage />} />
                        <Route path="/postgresql" element={<PostgresqlPage />} />
                        <Route path="/mongodb" element={<MongodbPage />} />
                        <Route path="/sqlite" element={<SqlitePage />} />
                        <Route path="/redis" element={<RedisPage />} />

                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
