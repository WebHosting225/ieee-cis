import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Events from "./pages/events";
import Committee from "./pages/committee";

const links = [
    {link: <Link to="/">Home</Link>},
    {link: <Link to="/gallery">Gallery</Link>},
    {link: <Link to="/events">Events</Link>},
    {link: <Link to="/committee">Committee</Link>},
];

const NoPage = () => {
  return <h1>404 Not Found</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App links={links}/>}>
                    <Route index element={<Home/>}/>
                    <Route path="gallery" element={<Gallery/>}/>
                    <Route path="events" element={<Events/>}/>
                    <Route path="committee" element={<Committee/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
