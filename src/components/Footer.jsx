import logo_sfondo from '../assets/img/dc-logo-bg.png';
import facebook from '../assets/img/footer-facebook.png';
import twitter from '../assets/img/footer-twitter.png';
import youtube from '../assets/img/footer-youtube.png';
import pinterest from '../assets/img/footer-pinterest.png';
import periscope from '../assets/img/footer-periscope.png';

function Footer() {
    return (
        <footer>
            <section className="footer-top">
                <div className="container d-flex justify-content-between align-items-start position-relative">
                    <div className="d-flex mt-5">
                        <div className="me-5">
                            <h4>DC COMICS</h4>
                            <ul>
                                <li>Characters</li>
                                <li>Comics</li>
                                <li>Movies</li>
                                <li>TV</li>
                                <li>Games</li>
                                <li>Videos</li>
                                <li>News</li>
                            </ul>

                            <h4>SHOP</h4>
                            <ul>
                                <li>Shop DC</li>
                                <li>Shop DC Collectibles</li>
                            </ul>
                        </div>

                        <div className="me-5">
                            <h4>DC</h4>
                            <ul>
                                <li>Terms Of Use</li>
                                <li>Privacy Policy (New)</li>
                                <li>Ad Choices</li>
                                <li>Advertising</li>
                                <li>Jobs</li>
                                <li>Subscriptions</li>
                                <li>Talent Workshops</li>
                                <li>CPSC Certificates</li>
                                <li>Ratings</li>
                                <li>Shop Help</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                        <div>
                            <h4>SITES</h4>
                            <ul>
                                <li>DC</li>
                                <li>MAD Magazine</li>
                                <li>DC Kids</li>
                                <li>DC Universe</li>
                                <li>DC Power Visa</li>
                            </ul>
                        </div>
                    </div>
                    <div className="logo-bg">
                        <img src={logo_sfondo} alt="DC logo background" />
                    </div>
                </div>
            </section>
            <section className="footer-bottom">
                <div className="container d-flex justify-content-between align-items-center">
                    <button className="sign-up-btn">
                        SIGN-UP NOW!
                    </button>
                    <div className="social d-flex align-items-center gap-3">
                        <span className="text-primary fw-bold">FOLLOW US</span>
                        <img src={facebook} alt="Facebook" />
                        <img src={twitter} alt="Twitter" />
                        <img src={youtube} alt="YouTube" />
                        <img src={pinterest} alt="Pinterest" />
                        <img src={periscope} alt="Periscope" />
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer

