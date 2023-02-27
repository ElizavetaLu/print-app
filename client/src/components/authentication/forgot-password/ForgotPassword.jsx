import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import { forgotPassword } from '../../../redux/actions/actionCreators';
import "./ForgotPassword.scss";

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const [inputError, setInputError] = useState('');

    const dispatch = useDispatch();

    const onNext = e => {
        e.preventDefault();

        if (!isEmail(email)) return setInputError("Email is invalid");

        dispatch(forgotPassword(email))
    }

    return (
        <>
            <div className="link"> Don’t have an account? <Link to={'/authentication/signUp'} className="auth_link">Sign Up</Link></div>
            <div className="form-container">
                <form action="" className="form" onSubmit={onNext}>
                    <h4 className="h4">Enter the email address associated with your account.</h4>

                    <label className="input-row">
                        <input type="text" name="name" className="auth-input" placeholder="E-mail" required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                    <div className="btn-container">
                        <button type="submit" className="btn">Next</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ForgotPassword