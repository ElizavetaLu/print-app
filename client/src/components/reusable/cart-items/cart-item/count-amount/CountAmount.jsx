import { useDispatch } from "react-redux";
import { increaseItemAmount, decreaseItemAmount, setItemAmount } from "../../../../../redux/actions/actionCreators";
import "./CountAmount.scss";

const CountAmount = ({ index, qty }) => {

    const dispatch = useDispatch();

    return (
        <div className="amount">
            <div className="scale" onClick={() => dispatch(decreaseItemAmount(index))}>
                <img src="/images/icons/minus.svg" alt="" className="scale-img" />
            </div>

            <input type="number" className="amount-input"
                value={qty}
                onChange={e => dispatch(setItemAmount({ index, qty: e.target.value }))}
            />

            <div className="scale" onClick={() => dispatch(increaseItemAmount(index))}>
                <img src="/images/icons/plus.svg" alt="" className="scale-img" />
            </div>
        </div>
    )
}

export default CountAmount