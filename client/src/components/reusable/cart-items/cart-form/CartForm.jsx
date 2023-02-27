import "./CartForm.scss";

const CartForm = ({ title, firstRow1, firstRow2, secondRow, thirdRow, cartFormData, setCartFormData }) => {
    return (
        <div className="block">
            <div className="section-title">{title}</div>

            <div className="block">
                <div className="combine-rows">
                    <label htmlFor="" className="data-row">
                        {firstRow1}
                        <input type="text" placeholder=" Last Name..." className="data-input" required
                            value={cartFormData.firstRow1}
                            onChange={e => setCartFormData({...cartFormData, firstRow1: e.target.value})}
                        />
                    </label>

                    <label htmlFor="" className="data-row">
                        {firstRow2}
                        <input type="text" placeholder="First Name..." className="data-input" required
                            value={cartFormData.firstRow2}
                            onChange={e => setCartFormData({...cartFormData, firstRow2: e.target.value})}
                        />
                    </label>
                </div>


                <label htmlFor="" className="data-row">
                    {secondRow}
                    <input type="text" placeholder="Email..." className="data-input" required
                        value={cartFormData.secondRow}
                        onChange={e => setCartFormData({...cartFormData, secondRow: e.target.value})}
                    />
                </label>

                <label htmlFor="" className="data-row">
                    {thirdRow}
                    <input type="text" placeholder="Phone Number..." className="data-input" required
                        value={cartFormData.thirdRow}
                        onChange={e => setCartFormData({...cartFormData, thirdRow: e.target.value})}
                    />
                </label>
            </div>
        </div>
    )
}

export default CartForm