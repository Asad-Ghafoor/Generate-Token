import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Suscribe = () =>
{
    const {input , setimput} =useState();
    const HandleChange =(event) =>{
        console.log(event.target.value);
    }
    
 const Submit =  (event) => {
    alert('A name was submitted: ');
    event.preventDefault();
  }
    return(
        <>
<div className="footer1">
                    <div className="container_center content">

                        <div className="subscribe subscribe-box">
                            <h4 className="title1">Never miss another deal.</h4>
                            <h5 className="title2" id="FooterContent">Subscribe to the Best of Codes.pk delivered straight
                                to
                                your inbox.</h5>
                            <form method="post" id="subscribeform" name="subscribeform" onSubmit={Submit}>
                                <div style={{"display":"flex"}} className="email_add flex_div flexboxboth">
                                    <input type="email" title="Please enter emailid with @" className="textBox"
                                        name="subemail" id="subemail" placeholder="Your Email Address ..." value=""
                                        aria-label="subscriber" onChange={HandleChange}/>
                                    <input type="submit" name="Submit" value="Subscribe" className="bluebutton"/>
                                </div>
                                <div className="error" id="error_subemail"></div>
                                <div className="success" id="suc_subemail"></div>
                                <div style={{"display":"none"}} className="centerinner afterlogin">
                                    <button className="bluebutton" id="footer_subscribe" data-email="">Subscribe</button>
                                </div>
                            </form>
                            <NavLink style={{"textDecoration" : "none"}} to="https://codes.pk/privacypolicy">Privacy Policy</NavLink>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Suscribe;