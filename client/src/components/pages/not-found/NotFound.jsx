import { Link } from "react-router-dom";
import BgCircles from "../../reusable/bg-circles/BgCircles";
import "./NotFound.scss";

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="background">
                <BgCircles />
            </div>

            <div className="content">
                <div className="err-code">404</div>
                <h2 className="err-text">Page Not Found</h2>
                <div className="text">We're sorry, the page you requested could not be found</div>
                <div className="btn-container">
                    <Link to={'/Home Page'}><button className="btn">Go Home</button></Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
