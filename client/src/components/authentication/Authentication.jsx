import "./Authentication.scss";

const Authentication = ({ children }) => {

    return (
        <div className="authentication">
            <div className="left">
                <div className="content">
                    <div className="logo">
                        <img src="/images/icons/light-logo.svg" alt="" className="logo-icon" />
                    </div>
                    <h3>Quality printing on t-shirts and textile products</h3>
                </div>
            </div>
            <div className="right">
                {children}
            </div>
        </div>
    )
}

export default Authentication