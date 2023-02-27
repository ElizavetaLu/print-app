import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPaymentType, setDeliveryType } from "../../../../redux/actions/actionCreators";
import "./CartDropdown.scss";


const CartDropdown = ({ title, items }) => {

    const dispatch = useDispatch()
    const { paymentType, delivery } = useSelector(state => state.checkOutData);

    const type = title === 'Payment' ? paymentType : delivery;
    const action = title === 'Payment' ? setPaymentType : setDeliveryType;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="cart-dropdown">
            <div className="selection-row" onClick={() => setIsOpen(!isOpen)}>
                <div className="typle-title">{title}: <span className="selected">{type}</span></div>
                <div className="vector-icon">
                    <img src="/images/icons/Vector 6.svg" alt="" className="vector" />
                </div>
            </div>
            {isOpen && <ul className="dropdown">
                {items.map(item => {
                    return <li
                        key={item.name}
                        className="item"
                        onClick={() => {
                            dispatch(action(item.name));
                            setIsOpen(!isOpen)
                        }}>
                            <div className="icon">
                                <img src={`/images/icons/${item.icon}`} alt="" />
                            </div>
                            <div className="name">{item.name}</div>
                        
                    </li>
                })}
            </ul>}
        </div>
    )
}

export default CartDropdown