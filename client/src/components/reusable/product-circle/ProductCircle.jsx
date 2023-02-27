import { useDispatch, useSelector } from "react-redux";
import { setSide, setType } from "../../../redux/actions/actionCreators";
import "./ProductCircle.scss";

const ProductCircle = ({ img }) => {

    const dispatch = useDispatch();
    const type = useSelector(state => state.order.type);

    return (
        <div className={`circle-container ${type === img ? "active" : null}`} onClick={() => {
            dispatch(setType(img))
            dispatch(setSide('front'))
            }}>
            <img src={`/images/clothes-icons/${img}.svg`} alt="" className="pr-icon" />
        </div>
    )
}

export default ProductCircle

