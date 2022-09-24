import "./header.css";
import {useEffect, useRef} from "react";


export default function ({imgSrc, links}) {
    let header_ref = useRef();

    function overFlowCheck(element, width) {
        if (window.innerWidth < element.clientWidth && !width) {
            width = element.clientWidth;
            element.setAttribute("panned", "out");
        } else if (window.innerWidth > width) {
            width = undefined;
            element.setAttribute("panned", "ok");
        }
        return width
    }

    useEffect(() => {
        let element = header_ref.current, width = overFlowCheck(element);
        window.addEventListener('resize', () => width = overFlowCheck(element, width));
    }, [])
    let menuToggle = ["yes", "no"];
    return (
        <header ref={header_ref}>
            <img src={imgSrc} className="header-hero" alt="header hero"/>
            <div className="header-pan">
                <ul className="header-links">
                    {links.map(link => <li key={links.indexOf(link)}><a href={link.ref}>{link.name}</a></li>)}
                </ul>
                <button onClick={() => {
                    header_ref.current.setAttribute("menu", menuToggle[0]);
                    menuToggle = menuToggle.reverse();
                }} className="header-links-menu">|||
                </button>
            </div>
        </header>
    );
}
