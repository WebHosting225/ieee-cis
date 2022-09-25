import "./header.css";
import {useEffect, useRef, useState} from "react";

const approxeq = (v1, v2, epsilon = 5) => v2 - v1 <= epsilon;

export default function ({imgSrc, links}) {
    let header_ref = useRef(), menuToggle = useRef(["yes", "no"]);
    const [topPad, setTopPad] = useState(40);
    let overFlowWidth;

    function overFlowCheck(element) {
        if (!approxeq(window.innerWidth, element.clientWidth) && !overFlowWidth) {
            element.setAttribute("panned", "out");
            overFlowWidth = element.clientWidth;
        }
        else if (!approxeq(overFlowWidth, window.innerWidth)) {
            element.setAttribute("panned", "ok");
            overFlowWidth = undefined;
            if (menuToggle.current[1] === "yes") menuButtonCnt(element);
        }
    }

    function scrollCheck(element) {
        if (window.scrollY < 25) {
            setTopPad(40 - window.scrollY);
            element.setAttribute("scrolled", "false")
        } else element.setAttribute("scrolled", "true")
    }

    function menuButtonCnt(element) {
        element.setAttribute("menu", menuToggle.current[0]);
        menuToggle.current = menuToggle.current.reverse();
    }

    useEffect(() => {
        overFlowCheck(header_ref.current);
        window.addEventListener('resize', () => overFlowCheck(header_ref.current));
        window.addEventListener('scroll', () => scrollCheck(header_ref.current));
    }, [])

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
