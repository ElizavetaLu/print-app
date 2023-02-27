import ImageEditor from "../../reusable/constructor-items/image-editor/ImageEditor";
import CtaReminder from "../../reusable/constructor-items/cta-reminder/CtaReminder";
import SelectSide from "../../reusable/constructor-items/select-side/SelectSide";
import ColorBar from "../../reusable/constructor-items/colors-bar/ColorBar";
import SizeBar from "../../reusable/constructor-items/size-bar/SizeBar";
import ProductCircle from "../../reusable/product-circle/ProductCircle";
import BgCircles from "../../reusable/bg-circles/BgCircles";
import { products } from "../../../data-lists/index";
import "./Constructor.scss";


const Constructor = () => {

    return (
        <div className="constructor">
            <div className="background right-top">
                <BgCircles />
            </div>
            <div className="background left-bot">
                <BgCircles />
            </div>
            
            <div className="products-list">
                {products.map(item => <ProductCircle key={item} img={item} />)}
            </div>

            <div className="tool-items_replace">
                <ColorBar />

                <div className="line"></div>

                <SizeBar />
            </div>


            <div className="tools">
                <div className="selected-product">
                    <ImageEditor /> 
                </div>

                <div className="content">
                    <div className="tool-items">
                        <SizeBar />
                        <ColorBar />
                    </div>

                    <SelectSide />
                    <CtaReminder />
                </div>
            </div>

            <div className="content-replace">
                <SelectSide />
                <CtaReminder />
            </div>
        </div>
    )
}

export default Constructor