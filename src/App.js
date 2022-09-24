import './App.css';

import Header from "./components/header";
import Footer from "./components/footer";

import {Outlet} from "react-router-dom";

export default function ({links}) {
    return (
        <>
            <Header imgSrc={"/static/images/ieeeb.png"} links={links}/>
            <div className="App"><Outlet/></div>
            <Footer imgSrc={"/static/images/ieeeb.png"} links={links}/>
        </>
    );
}
