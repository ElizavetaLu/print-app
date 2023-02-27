import "./BgCircles.scss";

const BgCircles = ({ images }) => {

    return (
        <div className="bg-circles">
            <div className="bg-img">
                {images && <>
                    <div className="image cap">
                        <img src="/images/clothes/cap.svg" alt="" className="cap-img" />
                    </div>
                    <div className="image t-shirt">
                        <img src="/images/clothes/T-shirt.png" alt="" className="t-shirt-img" />
                    </div>
                    <div className="image bag">
                        <img src="/images/clothes/bag.svg" alt="" className="bag-img" />
                    </div>
                </>}
                <div className="circles">
                    <div className="sixs">
                        <div className="fifth">
                            <div className="fourth">
                                <div className="third">
                                    <div className="second">
                                        <div className="first"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BgCircles