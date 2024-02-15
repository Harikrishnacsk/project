import React from "react";

const GiftCardAndCoupon = () =>{
    return (
        <div className="myaccount-right" id="GCcontainer">
        <div className="gctextheader">
        <h6>Gift Coupons & Cards</h6>
        </div>
        <div className="GCbtns">
            <button>Gift Coupons</button>
            <button>Gift Cards</button>
        </div>
        <div className="GCoupon-box">
            <div class="box-text">No Available Gift Coupons</div>         
        </div>
        <div className="GCard-box">
            <div class="box-text">No Available Gift Cards</div>         
        </div>
        
        </div>
    )
}

export default GiftCardAndCoupon;