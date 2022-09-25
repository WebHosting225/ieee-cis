import "./footer.css";
import {Link} from "react-router-dom";


export default function ({imgSrc, links}) {
    return (
        <footer>
            <div className="Footer">
                <div className="content-h">
                    <div className="content-v" style={{paddingRight: 25}}>
                        <span>Contact Us</span>
                        <p>Ramaiah Institute Of Technology, MSRIT Post, MSR Nagar, Bengaluru, Karnataka 560054</p>
                        <img src={imgSrc} className="footer-hero" alt="footer hero"/>
                    </div>
                    <div className="content-v">
                        <span>Quick Links</span>
                        <ul className="footer-links">
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
                </div>
            </div>
            <div className="Footer--end">
                <p>Follow Us For Updates</p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>IEEE <span>Bangalore</span></p>
            </div>
        </footer>
    );
}
