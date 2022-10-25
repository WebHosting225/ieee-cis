import "./App.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import {Outlet} from "react-router-dom";

export default function App ({links}) {
    return (
        <>
            <Header imgSrc={"/static/images/ieee_cis.png"} links={links}/>
            <div className="App"><Outlet/></div>
            <Footer imgSrc={"/static/images/ieee_cis.png"} links={links}/>
        </>
    );
}
