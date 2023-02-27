import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../../../redux/actions/actionCreators";
import CountAmount from "./count-amount/CountAmount";
import "./CartItem.scss";

const CartItem = ({ side, fabricColor, finalDesign, index, qty, type, size }) => {

    const dispatch = useDispatch();

    return (
        <div className="cart-item">
            <div className="left">
                <div className="order-icon">
                    <img src={finalDesign} alt="" className="order-img" />
                </div>
                <div className="order-data">
                    <p className="price">{200 * qty} UAH</p>
                    <p className="text">{type} with print</p>
                    <ul className="params">
                        <li className="item">{fabricColor}</li>
                        <li className="item">Size {size}</li>
                        <li className="item">{side} logo</li>
                    </ul>
                    <div className="mobile-amount">
                        <CountAmount qty={qty} index={index} />
                    </div>
                </div>
            </div>
            <div className="right">
                <CountAmount qty={qty} index={index} />

                <div className="remove" onClick={() => dispatch(deleteCartItem(index))}>
                    <img src="/images/icons/trash.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default CartItem