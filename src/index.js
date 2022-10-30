import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Events from "./pages/events";
import Committee from "./pages/committee";

const links = [
    {name: "Home", link: "/"},
    {name: "Gallery", link: "/gallery"},
    {name: "Events", link: "/events"},
    {name: "Committee", link: "/committee"},
];

function Page({title, children}) {
    useEffect(() => {
        title && (document.title = title + " | " + "IEEE - CIS");
    }, [title]);
    return <>{children}</>;
}

const NoPage = () => {
    return <h1>404 Not Found</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Page><App links={links}/></Page>}>
                    <Route index element={<Page title="Home"><Home/></Page>}/>
                    <Route path="gallery" element={<Page title="Gallery"><Gallery/></Page>}/>
                    <Route path="events" element={<Page title="Events"><Events/></Page>}/>
                    <Route path="committee" element={<Page title="Committee"><Committee/></Page>}/>
                    <Route path="*" element={<Page title="Not Found"><NoPage/></Page>}/>
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
