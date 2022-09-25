import "./footer.css";


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
                            {links.map(link => <li key={links.indexOf(link)}>{link.link}</li>)}
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
