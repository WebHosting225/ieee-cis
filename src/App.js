import './App.css';

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Events from "./pages/events";
import Committee from "./pages/committee";

export default function () {
    let links = [
        {name: "Home", link: "#"},
        {name: "Gallery", link: "#"},
        {name: "Events", link: "#"},
        {name: "Committee", link: "#"}
    ]
    return (
        <div className="App">
            <Header imgSrc={"/static/images/ieeeb.png"} links={links}/>
            <Footer imgSrc={"/static/images/ieeeb.png"} links={links}/>
        </div>
    );
}
