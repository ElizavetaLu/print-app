import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../../data-lists";
import { setColor } from "../../../../redux/actions/actionCreators";
import "./ColorBar.scss";

// const colors = ['000', '9C9A9A', '00A3AD', '78B7E0', 'fff', '38383A'];

const ColorBar = () => {

    const dispatch = useDispatch();
    const color = useSelector(state => state.order.fabricColor);

    return (
        <div className="select-color">
            <p className="text">Color</p>
            <ul className="colors-list">
                {colors.map(item => <li key={item.hex}
                    className={color === item.name ? "color-container active" : "color-container"}
                    onClick={() => dispatch(setColor(item.name))}>

                    <div className="color" style={{ backgroundColor: item.hex }}></div>
                </li>
                )}
            </ul>
        </div>
    )
}

export default ColorBar