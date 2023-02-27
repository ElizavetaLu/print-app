import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../../reusable/cart-items/cart-item/CartItem";
import BgCircles from "../../reusable/bg-circles/BgCircles";
import "./MyOrders.scss";

const MyOrders = () => {

    const allOrders = useSelector(state => state.allOrders);

    return (
        <div className="my-orders">
            <div className="background">
                <BgCircles />
            </div>

            <h3 className="h3">Your orders</h3>

            <div className="orders-list">
                {allOrders?.length === 0 && <p>You didn't create any order yet. Go to <Link to={'/Constructor'} className='navigale-link'>constructor</Link> to create new one.</p>}
                {allOrders?.map((item, i) => {
                    return (
                        <div key={i} className="order-image">
                            <img src={item.finalDesign} alt="" className="order-img"/>
                            <div className="show-info">
                                <p className="show-text">Order info:</p>
                                <ul className="order-info">
                                    <li className="item">Color: {item.fabricColor}</li>
                                    <li className="item">Quantity: {item.qty}</li>
                                    <li className="item">Poduct type: {item.type}</li>
                                    <li className="item">Size: {item.size}</li>
                                    <li className="item">Print side: {item.side}</li>
                                    <li className="item">Price: {item.qty * 200} UAH</li>
                                </ul>
                            </div>
                        </ div  >
                    )
                })}
                {/* {allOrders?.map((item, i) => <CartItem key={i} {...item} index={i} />)} */}
            </div>
        </div>
    )
}

export default MyOrders