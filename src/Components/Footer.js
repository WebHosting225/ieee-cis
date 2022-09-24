import "./Footer.css";


export default function () {
    return (
        <footer>
            <div className="Footer">
                <div className="content-h">
                    <div className="content-v" style={{paddingRight: 25}}>
                        <span>Contact Us</span>
                        <p>Ramaiah Institute Of Technology, MSRIT Post, MSR Nagar, Bengaluru, Karnataka 560054</p>
                    </div>
                    <div className="content-v">
                        <span>Quick Links</span>
                        <ul className="footer-links">
                            <li><a href={"#"}>Home</a></li>
                            <li><a href={"#"}>Gallery</a></li>
                            <li><a href={"#"}>Events</a></li>
                            <li><a href={"#"}>Committee</a></li>
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
