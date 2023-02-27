import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartDropdown from "../../reusable/cart-items/cart-dropdown/CartDropdown";
import CartForm from "../../reusable/cart-items/cart-form/CartForm";
import CartItem from "../../reusable/cart-items/cart-item/CartItem";
import BgCircles from "../../reusable/bg-circles/BgCircles";
import { addNewOrderToList, checkOut, cleanUpCart, showPopup } from "../../../redux/actions/actionCreators";
import { payment, deliveryTypes } from "../../../data-lists/index";
import StatusPopup from "../../reusable/status-popup/StatusPopup";
import "./Cart.scss";


const Cart = () => {

    const dispatch = useDispatch();

    const { delivery, checkoutResult } = useSelector(state => state.checkOutData);
    const popup = useSelector(state => state.popup.isOpen);
    const cart = useSelector(state => state.cart);
    // console.log(cart)

    const check = delivery && (delivery !== 'Pick Up') ? true : false;

    let total = 0;
    for (let i = 0; i < cart?.length; i++) {
        const itemQty = cart[i].qty;
        total += itemQty * 200;
    }

    const deliveryPrice = delivery === 'Pick Up'
        ? 0 : delivery === 'Standart' && total > 600
            ? 0 : delivery === ''
                ? 0 : delivery === 'Express'
                    ? 140 : 70;

    const [cartFormAddress, setCartFormAddress] = useState({
        firstRow1: '',
        firstRow2: '',
        secondRow: '',
        thirdRow: '',
    })
    const [cartFormContacts, setCartFormContacts] = useState({
        firstRow1: '',
        firstRow2: '',
        secondRow: '',
        thirdRow: '',
    })

    const [promocode, setPromocode] = useState('')

    const onCheckout = () => {

        const formData = new FormData();

        const data = cart?.map(item => {

            formData.append("files", item.finalDesignFile);
            formData.append("files", item.originalImgFile);

            return {
                qty: item.qty,
                promocode: item.promocode,
                size: item.size,
                side: item.side,
                type: item.type,
                fabricColor: item.fabricColor,
                originalImgLocation: item.originalImgLocation
            }
        });

        formData.append('data', JSON.stringify(data));

        dispatch(checkOut(formData, cart));

        if (!checkoutResult.status) return dispatch(showPopup());

        dispatch(showPopup());
        dispatch(addNewOrderToList(cart));
        dispatch(cleanUpCart());
    }

    useEffect(() => {
        let id;
        if (popup) id = setTimeout(() => { dispatch(showPopup()) }, 5000);

        return () => clearTimeout(id);
    }, [popup])


    return (
        <div className="cart">

            <div className="background">
                <BgCircles />
            </div>
            <div className="background bot">
                <BgCircles />
            </div>

            <StatusPopup />


            <div className="bag">
                <p className="title">My Bag</p>

                <div className="orders-list">
                    {cart?.length === 0 && 'Your bag is empty...'}
                    {cart?.map((item, i) => <CartItem key={i} {...item} index={i} />)}
                </div>

                <div className="sub-total">
                    <p className="text">Sub-total</p>
                    <p className="price">{total} UAH</p>
                </div>

                <div className="delivery">
                    <div className="delivery-icon">
                        <img src="/images/icons/delivery.svg" alt="" className="delivery-img" />
                    </div>
                    <div className="delivery-data">
                        <p className="text">Free standart delivery</p>
                        <p className="descr">Faster delivery options available to most countries.</p>
                        <p className="more-info">More info</p>
                    </div>
                </div>
            </div>
            <div className="total">
                <p className="title">Total</p>

                <div className="promocode">

                    <div className="ticket-icon">
                        <img src="/images/icons/ticket-discount.svg" alt="" className="ticket-img" />
                    </div>

                    <input type="text" placeholder="Add Promocode" className="promocode-input"
                        value={promocode}
                        onChange={e => setPromocode(e.target.value)}
                    />

                    <div className="check-icon">
                        <img src="/images/icons/Group 415.svg" alt="" className="ckeck-img" />
                    </div>

                </div>

                <div className="sub-total">
                    <p className="text">Sub-total</p>
                    <p className="price">{total} UAH</p>
                </div>

                <CartDropdown title='Payment' items={payment} />
                <CartDropdown title='Delivery' items={deliveryTypes} />

                {check && <div className="delivery-details">

                    <CartForm
                        title='Delivery Address'
                        firstRow1='Country'
                        firstRow2='State / Province'
                        secondRow='City / District'
                        thirdRow='Address line'
                        cartFormData={cartFormAddress}
                        setCartFormData={setCartFormAddress}
                    />

                    <CartForm
                        title='Contact details'
                        firstRow1='Last Name'
                        firstRow2='First Name'
                        secondRow='Email'
                        thirdRow='Phone Number'
                        cartFormData={cartFormContacts}
                        setCartFormData={setCartFormContacts}
                    />

                </div>}


                <div className="row line">
                    <div className="left">
                        <div className="icon">
                            <img src="/images/icons/delivery.svg" alt="" className="delivery-img" />
                        </div>
                        <p className="text">Delivery</p>
                    </div>
                    <div className="cost">{deliveryPrice} UAH</div>
                </div>
                <div className="row">
                    <div className="left">
                        <div className="icon">
                            <img src="/images/icons/receipt-text.svg" alt="" className="total-img" />
                        </div>
                        <p className="text">Total Amount</p>
                    </div>
                    <div className="cost">{total + deliveryPrice} UAH</div>
                </div>

                <div className="btn-container">
                    <button className="btn" onClick={onCheckout} disabled={!cart.length && true}>Checkout</button>
                </div>
            </div>

        </div>
    )
}

export default Cart