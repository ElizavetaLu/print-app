import { orders } from "../../../../data-lists";
import { Link } from "react-router-dom";
import "./Orders.scss";


const Orders = () => {
    return (
        <section className="orders">
            <h2 className="h2">Your orders</h2>
            <div className="orders-list">
                {orders.map(item => (
                    <div key={item} className="img-container">
                        <img src={`images/user-orders/${item}.jpg`} alt="" className="photo" />
                    </div>
                ))}
            </div>

            <Link to={'/My Orders'} className="see-all">
                <p>See all</p>
            </Link>

            <div className="cta-container">
                <div className="tShirt">
                    <img src="/images/clothes/T-shirt.png" alt="" className="tShirt-img" />
                </div>

                <div className="info">
                    <h2 className="h2">Design your own clothes</h2>
                    <p className="text">If it is necessary to print logos, images or inscriptions on T-shirts.</p>
                </div>

                <Link to={'/Constructor'}>
                    <div className="btn-container">
                        <button className="btn">Go to constructor</button>
                    </div>
                </Link>
            </div>

        </section>
    )
}

export default Orders