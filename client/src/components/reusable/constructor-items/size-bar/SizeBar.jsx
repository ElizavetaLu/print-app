import { useSelector, useDispatch } from "react-redux";
import { openSizeDropdown, setSize } from "../../../../redux/actions/actionCreators";
import { sizes } from "../../../../data-lists";
import "./SizeBar.scss";

const SizeBar = () => {

    const dispatch = useDispatch();
    const { isSizeOpen, size, type } = useSelector(state => state.order);

    return (
        <div className="select-size">
            <p className="text">{type} size</p>
            <div className="size-dropdown-container">
                <div className="size-dropdown" onClick={() => dispatch(openSizeDropdown())}>
                    <p className="size">Size <span className="selected-size">{size}</span></p>
                    <div className="vector-icon">
                        <img src="/images/icons/Vector 6.svg" alt="" className="vector" />
                    </div>
                </div>
                    {isSizeOpen &&
                        <ul className="dropdown">
                            {sizes.map(item => <li key={item} className="dropdown-item"
                                onClick={() => {
                                    dispatch(setSize(item));
                                    dispatch(openSizeDropdown());
                                }}
                            >{item}</li>)}
                        </ul>
                    }
            </div>
        </div>
    )
}

export default SizeBar