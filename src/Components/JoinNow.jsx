import React from "react";
import {NavLink} from 'react-router-dom';
import '../Style/Navigationbar.css'
const JoinNow = () => {
    return (
        <>

            <section className="home_sections " id="home_joinnow">
                <div className="container_center">
                    <div className="signup_home flexCenter">
                        <div className="signup_left">
                            <span className="fa fa-heart"></span>
                            <h3>Join Now</h3>
                            <span>Be the first to get the best coupons &amp; deals FREE straight to your inbox.</span>
                        </div>
                        <div className="signup_right">
                            <NavLink className="signup bluebutton" href="https://codes.pk/community/signup">Join For FREE</NavLink><br />
                                Already a member? <NavLink className="login" to="https://codes.pk/community/login">Log In</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default JoinNow;