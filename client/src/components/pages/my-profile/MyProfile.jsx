import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { avatars, profileNavItems } from "../../../data-lists";
import { logOut } from "../../../redux/actions/actionCreators";
import BgCircles from "../../reusable/bg-circles/BgCircles";
import "./MyProfile.scss";

const MyProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isEdit, setIsEdit] = useState(false);

    const [currentAva, setCurrentAva] = useState('cat.png');

    const { authenticated, userName } = useSelector(state => state.auth);

    const onSelect = img => {
        setCurrentAva(img)
        setIsEdit(!isEdit)
    };

    if (!authenticated) {
        return (
            <div className="unauthorized-info">
                <div className="background">
                    <BgCircles />
                </div>

                <p className="unauthorized"><Link to={'/authentication/logIn'} className="link">Log In</Link> if you already have an account <Link className="link" to={'/authentication/signUp'}>Sign Up</Link> to create one.</p>
            </div>
        )
    }

    return (
        <div className="profile">
            <div className="background">
                <BgCircles />
            </div>
            <div className="profile-content">
                <div className="profile-header">
                    <div className="avatar-icon">
                        <img src={`/images/avatars/${currentAva}`} alt="" className="avatar-img" />
                        <div className="edit" onClick={() => setIsEdit(!isEdit)}>
                            <img src="/images/icons/edit.png" alt="" className="edit-img" />
                        </div>
                    </div>
                    {isEdit && <div className="change-avatar">
                        <p className="title">Select new avatar</p>
                        <ul className="avatars-list">
                            {avatars.map(item => <li key={item} className="select-avatar" onClick={() => onSelect(item)}>
                                <img src={`/images/avatars/${item}`} alt="" />
                            </li>)}
                        </ul>
                    </div>}
                    <h4 className="h4">{userName}</h4>
                </div>

                <ul className="profile-nav">
                    {profileNavItems.map(item => (
                        <Link to={item.title === 'My Orders' ? '/My Orders' : null} key={item.title} className='item-wrap_link'>
                            <li className="nav-item" >
                                <div className="left">
                                    <div className="icon">
                                        <img src={`/images/icons/${item.icon}`} alt="" />
                                    </div>
                                    <div className="title">{item.title}</div>
                                </div>
                                <div className="vector">
                                    <img src="/images/icons/VectorRight.svg" alt="" />
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="btn-container">
                <button className="btn" onClick={() => dispatch(logOut(() => navigate('/authentication/logIn')))}
                >Log Out</button>
            </div>
        </div>
    )
}

export default MyProfile