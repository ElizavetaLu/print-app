import { useDispatch, useSelector } from "react-redux";
import { showPopup } from "../../../redux/actions/actionCreators";
import "./StatusPopup.scss";
// showPopup
const StatusPopup = () => {


    const dispatch = useDispatch();
    const { isOpen, status, message, } = useSelector(state => state.popup);
    // const { status, message } = useSelector(state => state.popup);

    return (
        <div className={`popUp ${isOpen && 'shown'}`}>
            <div className="popup-content">
                <div className="status-data">
                    <div className="icon">
                        <img src={`/images/icons/${status ? 'success' : 'fail'}.svg`} alt="" className="img" />
                    </div>
                    <p className={`status ${status || 'fail'}`}>{status ? 'Successfully' : 'Something wrong'}</p>
                </div>
                <p className="text">{message}</p>
            </div>

            <div className="close" onClick={() => dispatch(showPopup())}>
                <img src="/images/icons/close.svg" alt="" className="close-img" />
            </div>
        </div>
    )
}

export default StatusPopup