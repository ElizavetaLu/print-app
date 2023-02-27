import { Link, useLocation } from "react-router-dom";
import BgCircles from "../reusable/bg-circles/BgCircles";
import { navItems } from "../../data-lists";
import "./Footer.scss";

const Footer = () => {

    const { pathname } = useLocation();
    if (pathname.startsWith('/authentication/')) return

    return (
        <div className="footer-wrapper">
            <div className="container">
                <footer className="footer">
                    <div className="left">
                        <Link to={'/Home Page'}>
                            <div className="logo-icon">
                                <img src="/images/icons/light-logo.svg" alt="" className="logo-img" />
                            </div>
                        </Link>
                        <div className="contacts">
                            <p>example@gmail.com</p>
                            <p>+38 (067) 776 898 5</p>
                        </div>
                    </div>

                    <div className="right">
                        <div className="info">
                            <ul className="nav">
                                {navItems.map(item => {
                                    const itemLowerCase = item.toLowerCase()
                                    return (
                                        <Link
                                            key={item}
                                            to={`/${itemLowerCase}`}
                                            className="text-link"
                                        >
                                            <li className="nav-item">{item}</li>
                                        </Link>
                                    )
                                })}
                            </ul>

                            <ul className="socials">
                                <li className="social">
                                    <img src="/images/socials/instagram.svg" alt="" className="social-img" />
                                </li>
                                <li className="social">
                                    <img src="/images/socials/facebook.svg" alt="" className="social-img" />
                                </li>
                            </ul>
                        </div>

                        <div className="btn-container">
                            <button className="btn">Contact Us</button>
                        </div>
                    </div>
                </footer>
            </div>
            <div className="background">
                <BgCircles />
            </div>
        </div>
    )
}

export default Footer