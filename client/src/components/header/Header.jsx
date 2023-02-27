import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logOut, showMiniCart } from "../../redux/actions/actionCreators";
import { menuNav, sideMenuNav } from "../../data-lists/index";
import HoverCart from "./hover-cart/HoverCart";
import "./Header.scss";


const Header = () => {

    const { pathname } = useLocation();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { authenticated } = useSelector(state => state.auth);
    const cart = useSelector(state => state.cart);


    const [isOpen, setIsOpen] = useState(false);
    const miniCart = useSelector(state => state.miniCart.isShown)

    if (pathname.startsWith('/authentication/')) return

    return (
        <div className="header-wrapper">
            <div className="belt">
                <div className="box-icon">
                    <img src="/images/icons/package-box.svg" alt="" className="box-img" />
                </div>
                <div className="text">Free delivery by courier for orders over 600 UAH.</div>
            </div>

            <div className="container">
                <header className="header">
                    <div className="left">
                        <Link to={'/Home Page'}>
                            <div className="logo-icon">
                                <img src="/images/icons/dark-logo.svg" alt="" className="logo-img" />
                            </div>
                        </Link>
                        <ul className="nav">
                            {menuNav.map(item => {
                                return (
                                    <Link
                                        key={item}
                                        to={item === 'Constructor' ? '/Constructor' : null}
                                        className={`text-link ${pathname === '/' + item && 'active'}`}
                                    >
                                        <li className="nav-item">{item}</li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="right">
                        {authenticated
                            ? < div className="cart-icon" >

                                {cart?.length > 0 && <div className="circle-amount">{cart.length}</div>}

                                <Link to={'/Cart'} onMouseEnter={() => dispatch(showMiniCart())} onClick={() => dispatch(showMiniCart())}>
                                    <img src="/images/icons/shopping-cart.svg" alt="" className="cart-img" />
                                </Link>

                            </div>

                            : <div className="btn-container">
                                <Link to={'/authentication/logIn'}>
                                    <button className="btn">Log In</button>
                                </Link>
                            </div>
                        }
                        {miniCart && <HoverCart />}
                        {/* {miniCart && <HoverCart />} */}
                        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                            <img src="/images/icons/burger.svg" alt="" className="menu-img" />
                        </div>


                        <nav className={`nav-menu ${isOpen && 'active'}`}>
                            <div className="close" onClick={() => setIsOpen(!isOpen)}>
                                <img src="/images/icons/close.svg" alt="" className="close-img" />
                            </div>
                            <ul className="nav">

                                {sideMenuNav.map(item => {
                                    return (
                                        <li className="nav-item" key={item} onClick={() => setIsOpen(!isOpen)}>
                                            <Link to={`${item}`}>{item}</Link>
                                        </li>)
                                })}

                            </ul>

                            <div className="btn-container">
                                {authenticated
                                    ? <button className="btn" onClick={() => dispatch(logOut(() => navigate('/authentication/logIn')))}>Log Out</button>
                                    : <Link to={'/authentication/logIn'}>
                                        <button className="btn">Log In</button>
                                    </Link>
                                }
                            </div>

                        </nav>

                        <div className={`mask-content ${isOpen && 'active'}`} onClick={() => setIsOpen(!isOpen)}></div>
                    </div>
                </header>
            </div >
        </div >
    )
}

export default Header