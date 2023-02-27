import ProductSquare from "../../../reusable/product-square/ProductSquare";
import { products } from "../../../../data-lists";
import "./OurProducts.scss";

const OurProducts = () => {
    return (
        <section className="products">
            <h2 className="h2">Our products</h2>
            <div className="products-list">
                {products.map(item => <ProductSquare key={item} img={item} />)}
            </div>
        </section>
    )
}

export default OurProducts