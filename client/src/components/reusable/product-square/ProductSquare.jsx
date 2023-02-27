import "./ProductSquare.scss";

const ProductSquare = ({ img }) => {
    return (
        <div className="product-icon">
            <img src={`/images/clothes-icons/${img}.svg`} alt="" className="product-img" />
        </div>
    )
}

export default ProductSquare