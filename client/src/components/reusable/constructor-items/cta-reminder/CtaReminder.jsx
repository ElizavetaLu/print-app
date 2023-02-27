import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cleanUpOrderData, setPopupData, setOrderIndex, showPopup } from "../../../../redux/actions/actionCreators";
import StatusPopup from "../../status-popup/StatusPopup";
import "./CtaReminder.scss";


const CtaReminder = () => {

    const dispatch = useDispatch();
    const order = useSelector(state => state.order);

    const cart = useSelector(state => state.cart);
    const popup = useSelector(state => state.popup.isOpen);

    const onAddToCart = () => {
        if (!order.originalImg) {
            dispatch(setPopupData({ status: false, message: 'Add an image and click "Save" to save changes before adding to cart' }));

            return dispatch(showPopup());
        }
        dispatch(setPopupData({ status: true, message: 'Product was added to cart' }));

        dispatch(setOrderIndex(cart?.length + 1));
        dispatch(addToCart(order));

        dispatch(showPopup());

        dispatch(cleanUpOrderData());
    }

    useEffect(() => {
        let id;
        if (popup) id = setTimeout(() => { dispatch(showPopup()) }, 5000);

        return () => clearTimeout(id);
    }, [popup])

    return (
        <>
            <StatusPopup />

            <div className="cta">
                <div className="total">
                    <p className="text">Total amount</p>
                    <h4 className="h4">200 UAH</h4>
                </div>
                <div className="btn-container">
                    <button className="btn" onClick={onAddToCart}>Add to cart</button>
                </div>
            </div>

            <p className="reminder">*Your order will be made and transferred to the delivery service after clarifying the details of the order with the manager.</p>
        </>
    )
}

export default CtaReminder