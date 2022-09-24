import "./header.css";
import {useEffect, useRef, useState} from "react";


export default function ({imgSrc, links}) {
    let header_ref = useRef();
    const [topPad, setTopPad] = useState(40);

    function overFlowCheck(element) {
        if (window.innerWidth < element.clientWidth) element.setAttribute("panned", "out");
        else {
            element.setAttribute("panned", "ok");
            if (menuToggle[1] === "yes") menuButtonCnt(element);
        }
    }

    function scrollCheck(element) {
        if (window.scrollY < 25) {
            setTopPad(40 - window.scrollY);
            element.setAttribute("scrolled", "false")
        } else element.setAttribute("scrolled", "true")
    }

    function menuButtonCnt(element) {
        element.setAttribute("menu", menuToggle[0]);
        menuToggle = menuToggle.reverse();
    }

    useEffect(() => {
        overFlowCheck(header_ref.current);
        window.addEventListener('resize', () => overFlowCheck(header_ref.current));
        window.addEventListener('scroll', () => scrollCheck(header_ref.current));
    }, [])
    let menuToggle = ["yes", "no"];
    return (
        <header ref={header_ref} style={{paddingTop: topPad}}>
            <img src={imgSrc} className="header-hero" alt="header hero"/>
            <div className="header-pan">
                <ul className="header-links">
                    {links.map(link => <li key={links.indexOf(link)}>{link.link}</li>)}
                </ul>
                <button onClick={() => menuButtonCnt(header_ref.current)} className="header-links-menu">
                    |||
                </button>
            </div>
        </header>
    );
}
