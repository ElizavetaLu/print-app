import BgCircles from "../../reusable/bg-circles/BgCircles";
import Introduction from "./intriduction/Introduction";
import OurProducts from "./our-products/OurProducts";
import Orders from "./orders/Orders";
import Offer from "./offer/Offer";
import "./Main.scss";


const Main = () => {
    return (
        <main className="main">
            <div className="background">
                <BgCircles images={true} />
            </div>

            <div className="background">
                <BgCircles />
            </div>

            <Introduction />
            <OurProducts />
            <Offer />
            <Orders />

            <div className="background">
                <BgCircles />
            </div>
        </main>
    )
}

export default Main