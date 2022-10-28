import "./Footer.css";
import {Link} from "react-router-dom";


export default function Footer({imgSrc, links}) {
    return (
        <footer className="footer-cnt">
            <div className="footer">
                <div className="content-h">
                    <div className="content-v">
                        <span className="head">Contact Us<hr/></span>
                        <div className="content-v">
                            <p>Ramaiah Institute Of Technology, MSRIT Post, MSR Nagar, Bengaluru, Karnataka 560054</p>
                        </div>
                        <div className="content-v">
                            <img src={imgSrc} className="footer--hero head" alt="footer hero"/>
                        </div>
                    </div>
                    <div className="content-v">
                        <span className="head">Quick Links<hr/></span>
                        <ul className="footer--links">
                            {links.map(link =>
                                <li key={links.indexOf(link)}>
                                    <Link to={link.link} onClick={() => {
                                        window.scrollTo(0, 0);
                                        document.body.classList.toggle("refresh");
                                        setTimeout(() => document.body.classList.remove("refresh"), 750);
                                    }}>{link.name}</Link>
                                </li>)}
                        </ul>
                    </div>
                    <div className="content-v">
                        <span className="head">Socials<hr/></span>
                    </div>
                </div>
            </div>
            <div className="footer--end">
                <p>Follow Us For Updates</p>
                <span>©IEEE(CIS) RIT</span>
            </div>
        </footer>
    );
}
