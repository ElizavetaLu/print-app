import { useDispatch, useSelector } from "react-redux";
import { setSide } from "../../../../redux/actions/actionCreators";
import "./SelectSide.scss";

const SelectSide = () => {
    const { type, side } = useSelector(state => state.order);

    const currentSide = side === 'front' ? 'front' : 'back';
    const dispatch = useDispatch();

    return (
        <div className="select-side">
            <div className={`side ${currentSide === 'front' && 'active'}`} onClick={() => {
                dispatch(setSide('front'))
            }}>
                <p className="title">{type} front</p>
                <div className="product-photo">
                    <img src={`/images/products/${type + '_front'}.png`} alt="" className="photo-img" />
                </div>
            </div>

            <div className={`side ${currentSide === 'back' && 'active'}`} onClick={() => {
                dispatch(setSide('back'))
            }}>
                <p className="title">Back of {type}</p>
                <div className="product-photo">
                    <img src={`/images/products/${type + '_back'}.png`} alt="" className="photo-img" />
                </div>
            </div>
        </div>
    )
}

export default SelectSide