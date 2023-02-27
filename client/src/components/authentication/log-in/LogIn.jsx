import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn, setAuthError } from "../../../redux/actions/actionCreators";
import isEmail from 'validator/lib/isEmail';
import "./LogIn.scss"

const LogIn = () => {

    const [isShown, setIsShown] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const message = useSelector(state => state.auth.errorMessage);

    const onLogIn = (e) => {
        e.preventDefault();

        if (!isEmail(email)) return dispatch(setAuthError('Email is invalid'))

        dispatch(logIn({ email, password }, () => navigate('/Home Page')));
    };

    return (
        <>
            <div className="link"> Don’t have an account?
                <Link to={'/authentication/signUp'} className="auth_link">Sign Up</Link>
            </div>

            <div className="form-container">
                <form action="" className="form" onSubmit={onLogIn}>
                    <h4 className="h4">Log in</h4>

                    <div className="mob_header">
                        <div className="logo">
                            <img src="/images/icons/dark-logo.svg" alt="" className="logo-img" />
                        </div>
                        <h3 className="h3">Welcome Back</h3>
                    </div>

                    <div className="google-btn">
                        <button className="btn">
                            <div className="g-icon">
                                <img src="/images/search 2.svg" alt="" className="g-img" />
                            </div>
                            <div>Log In with Google</div>
                        </button>
                    </div>

                    <div className="separator">
                        <div className="hr"></div>
                        <p className="or">or</p>
                        <div className="hr"></div>
                    </div>

                    <div className="inputs-list">
                        <p className="error-message">{message}</p>
                        <label className="input-row">
                            <p className="title">E-mail</p>
                            <input type="text" name="email"
                                className={`auth-input ${(message === 'Email is invalid' || message === 'Invalid login credentials') && 'invalid'}`}
                                placeholder="E-mail"
                                required
                                value={email}
                                onChange={e => {
                                    if (message) dispatch(setAuthError(''));
                                    setEmail(e.target.value);
                                }}
                            />
                        </label>
                        <label className="input-row">
                            <p className="title">Password</p>
                            <input type={isShown ? 'text' : 'password'} name="password"
                                className={`auth-input ${message === 'Invalid login credentials' && 'invalid'}`}
                                placeholder="Password"
                                required
                                value={password}
                                onChange={e => {
                                    setPassword(e.target.value);
                                    if (message) dispatch(setAuthError(''));
                                }}
                            />
                            <div className="eye-icon" onClick={() => setIsShown(!isShown)}>
                                <img src="/images/icons/eye.svg" alt="" className="eye-img" />
                            </div>
                            <Link to={`/authentication/forgotPassword`} className="forgot-password">
                                <p>Forgot password?</p>
                            </Link>
                        </label>
                    </div>

                    <div className="auth-button">
                        <div className="btn-container">
                            <button type="submit" className="btn">Log In</button>
                        </div>
                        <div className="google-btn_mobile">
                            <button className="btn">
                                <div className="g-icon">
                                    <img src="/images/search 2.svg" alt="" className="g-img" />
                                </div>
                                <div>Sign Up with Google</div>
                            </button>
                        </div>
                        <div className="link_mobile"> Don’t have an account? <Link to={'/authentication/signUp'} className="auth_link">Sign Up</Link></div>
                    </div>

                </form>
            </div>
            <div></div>
        </>
    )
}

export default LogIn