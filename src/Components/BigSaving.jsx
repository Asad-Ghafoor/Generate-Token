import React from "react";
import { NavLink } from "react-router-dom";
const BigSaving = () => {
    return (
        <>
            <li>
                <div className="toggleanybox">
                    <div className="drop_head active" data-toggleany="abouttxt_block6" id="">
                        <span className="accordian_num">6</span> Say Hello to Big Savings: <i
                            className="fa fa-angle-down"></i>
                    </div>
                    <div className="drop_main_box active" data-opentoggleany="abouttxt_block6">
                        <p><img style={{ "display": "block", "marginLeft": "auto", "marginRight": "auto" }}
                            title="codes.pk promo code.jpg"
                            src="https://res.cloudinary.com/csnetworkco/image/upload/v1635757313/csnimages/tmp/phppB92PE.jpg"
                            alt="codes.pk promo code" width="350" height="233" loading="lazy" />Isn’t
                            online shopping just amazing? Everything from soap to a 55” TV is available
                            at
                            the touch of a button. And on Codes.pk, you get it all at a HUGE discount.
                            Want
                            to save money on your favorite brands? Done. Be it <NavLink  style={{"textDecoration" : "none"}}
                                to="https://codes.pk/daraz-coupons" target="_blank"
                                rel="noopener noreferrer">Daraz</NavLink>, <NavLink  style={{"textDecoration" : "none"}}
                                    to="https://codes.pk/etihad-coupons" target="_blank"
                                    rel="noopener noreferrer">Etihad</NavLink>, <NavLink  style={{"textDecoration" : "none"}}
                                        to="https://codes.pk/emirates-coupons" target="_blank"
                                        rel="noopener noreferrer">Emirates</NavLink>, etc. you can save money here.
                        </p>
                        <p>From&nbsp;Pakistani brands to top international brands, all your online
                            shopping
                            needs end with us. So, say goodbye to spending and say hello to savings!</p>
                    </div>
                </div>
            </li>
        </>
    )
}
export default BigSaving;