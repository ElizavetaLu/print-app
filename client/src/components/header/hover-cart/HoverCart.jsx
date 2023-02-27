import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showMiniCart } from "../../../redux/actions/actionCreators";
import CartItem from "../../reusable/cart-items/cart-item/CartItem";
import "./HoverCart.scss";


const HoverCart = () => {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    let total = 0;
    for (let i = 0; i < cart?.length; i++) {
        const itemQty = cart[i].qty;
        total += itemQty * 200;
    }

    return (
        <div className="cart-hover" onMouseLeave={() => dispatch(showMiniCart())}>
            <div className="items-list">
                {cart?.length === 0 && 'Your bag is empty...'}
                {cart?.map((item, i) => <CartItem key={i} {...item} index={i} />)}
            </div>

            <div className="sub-total">
                <p className="text">Sub-total</p>
                <p className="total">{total} UAH</p>
            </div>
            <div className="btn-container">
                <Link to={'/Cart'}>
                    <button className="btn" onClick={() => dispatch(showMiniCart())}>View Bag</button>
                </Link>
            </div>
        </div>
    )
}

export default HoverCart