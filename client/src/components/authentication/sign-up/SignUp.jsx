import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setAuthError, signUp } from "../../../redux/actions/actionCreators";
import isEmail from 'validator/lib/isEmail';
import "./SignUp.scss";

const SignUp = () => {

    const [isShownP, setIsShownP] = useState(false)
    const [isShownPConf, setIsShownPConf] = useState(false)


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const message = useSelector(state => state.auth.errorMessage);

    const [invalidName, setInvalidName] = useState('');
    const [invalidEmail, setInvalidEmail] = useState('');
    const [pswMatch, setPswMatch] = useState('');

    const onSignUp = (e) => {
        e.preventDefault();
        if (!name.trim()) return setInvalidName("Invalid name");
        if (!isEmail(email)) return setInvalidEmail("Email is invalid");
        if (password !== confirmPassword) return setPswMatch("Passwords must match");

        dispatch(signUp({
            name,
            email,
            password
        }, () => navigate('/Home Page')));
    };

    return (
        <>
            <div className="link"> Already registered? <Link to={'/authentication/logIn'} className="auth_link">Log In</Link></div>

            <div className="form-container">
                <form action="" className="form" onSubmit={onSignUp}>
                    <h4 className="h4">Sign Up</h4>
                    <div className="mob_header">
                        <div className="logo">
                            <img src="/images/icons/dark-logo.svg" alt="" className="logo-img" />
                        </div>
                        <h3 className="h3">Welcome</h3>
                    </div>
                    <div className="google-btn">
                        <button className="btn">
                            <div className="g-icon">
                                <img src="/images/search 2.svg" alt="" className="g-img" />
                            </div>
                            <div>Sign Up with Google</div>
                        </button>
                    </div>

                    <div className="separator">
                        <div className="hr"></div>
                        <p className="or">or</p>
                        <div className="hr"></div>
                    </div>


                    <div className="inputs-list">
                        <label className="input-row">
                            <p className="title">Enter your name</p>
                            <p className="error-message">{invalidName}</p>
                            <input type="text" name="name"
                                className={`auth-input ${invalidName && 'invalid'}`}
                                placeholder="Name"
                                required
                                value={name}
                                onChange={e => {
                                    if (invalidName) setInvalidName('');
                                    setName(e.target.value)
                                }}
                            />
                        </label>

                        <label className="input-row">
                            <p className="error-message">{message}</p>
                            <p className="title">E-mail</p>
                            <p className="error-message">{invalidEmail}</p>
                            <input type="text" name="email"
                                className={`auth-input ${(invalidEmail || message === 'Email in use') && 'invalid'}`}
                                placeholder="E-mail"
                                required
                                value={email}
                                onChange={e => {
                                    if (invalidEmail) setInvalidEmail('');
                                    if (message) dispatch(setAuthError())
                                    setEmail(e.target.value);
                                }}
                            />
                        </label>


                        <p className="error-message">{pswMatch}</p>
                        <label className="input-row">
                            <p className="title">Password</p>
                            <input type={isShownP ? 'text' : 'password'} name="password"
                                className={`auth-input ${pswMatch && 'invalid'}`}
                                placeholder="Password"
                                required
                                value={password}
                                onChange={e => {
                                    if (pswMatch) setPswMatch('');
                                    setPassword(e.target.value)
                                }}
                            />
                            <div className="eye-icon" onClick={() => setIsShownP(!isShownP)}>
                                <img src="/images/icons/eye.svg" alt="" className="eye-img" />
                            </div>
                        </label>

                        <label className="input-row">
                            <p className="title">Confirm your password</p>
                            <input type={isShownPConf ? 'text' : 'password'} name="password"
                                className={`auth-input ${pswMatch && 'invalid'}`}
                                placeholder="Confirm Password"
                                required
                                value={confirmPassword}
                                onChange={e => {
                                    if (pswMatch) setPswMatch('');
                                    setConfirmPassword(e.target.value)
                                }}
                            />
                            <div className="eye-icon" onClick={() => setIsShownPConf(!isShownPConf)}>
                                <img src="/images/icons/eye.svg" alt="" className="eye-img" />
                            </div>
                        </label>


                        <label className="checkbox">
                            <input type="checkbox" className="checkbox-input" />
                            Remember me
                        </label>
                    </div>


                    <div className="auth-button">
                        <div className="btn-container">
                            <button type="submit" className="btn">Sign Up</button>
                        </div>
                        <div className="google-btn_mobile">
                            <button className="btn">
                                <div className="g-icon">
                                    <img src="/images/search 2.svg" alt="" className="g-img" />
                                </div>
                                <div>Sign Up with Google</div>
                            </button>
                        </div>
                        <div className="link_mobile"> Already registered?<Link to={'/authentication/logIn'} className="auth_link">Log In</Link></div>
                    </div>

                </form>
            </div>
            <div></div>
        </>
    )
}

export default SignUp