import { Link } from "react-router-dom";
import "./Introduction.scss";

const Introduction = () => {
    return (
        <div className="introduction">
            <h1 className="h1">Quality printing on t-shirts and textile products</h1>
            <p className="text">If it is necessary to print logos, images or inscriptions on T-shirts, then our company will translate any of your ideas or projects into a finished product.</p>
            <div className="btn-container">
                <Link to={'/Constructor'}>
                    <button className="btn">Make an order</button>
                </Link>
            </div>
        </div>
    )
}

export default Introduction