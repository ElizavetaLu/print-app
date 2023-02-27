import "./Offer.scss";

const Offer = () => {
    return (
        <div className="offer">
            <div className="tShirt">
                <img src="/images/Group 410.png" alt="" className="tShirt-img" />
            </div>

            <div className="info">
                <h2 className="h3">Special Offer</h2>
                <p className="text">Free shipping on bulk orders over 10 T-shirts</p>
                <p className="code">*Enter the code <span>FREEDELIVERY</span> at checkout</p>
            </div>
        </div>
    )
}

export default Offer