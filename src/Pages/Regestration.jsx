import React from "react";
import "../Style/Login.css"
import {NavLink} from 'react-router-dom'
const Regestration = () => {


    const { useState } = React;

    const [toggle, settoggle] = useState(false);

    const [isignup, setisignup] = useState({
        upemail: "",
        uppass: "",
    });
    const [upwemail, setupwemail] = useState(false);
    const [upwpass, setupwpass] = useState(false);

    const [upeye, setupeye] = useState(true);
    const [uptype, setuptype] = useState("password");
    const [cupeye, setcupeye] = useState(false);

    const [uptick, setuptick] = useState(false);

    const [loginput, setloginput] = useState({
        logname: "",
        logphone: "",
        logmail: "",
        logpass: "",
        logconf: ""
    });

    const [lwname, setlwname] = useState(false);
    const [lwphone, setlwphone] = useState(false);
    const [lwmail, setlwmail] = useState(false);
    const [lwpass, setlwpass] = useState(false);
    const [lwconf, setlwconf] = useState(false);

    const upEvent = (up) => {
        const name = up.target.name;
        const value = up.target.value;
        setisignup((lastup) => {
            return {
                ...lastup,
                [name]: value
            }
        });
    }

    const [lpeye, setlpeye] = useState(true);
    const [inpasslog, setinpasslog] = useState("password");
    const [clpeye, setclpeye] = useState(false);

    const [lconfeye, setlconfeye] = useState(true);
    const [inconflog, setinconflog] = useState("password");
    const [confeye, setconfeye] = useState(false);

    const [remtick, setremtick] = useState(false);

    const upSubmit = (eup) => {
        eup.preventDefault();
        setupwemail(false);
        setupwpass(false);
        if (isignup.upemail == "") {
            setupwemail(true);
        }
        else if (isignup.uppass == "") {
            setupwpass(true);
        }
        else {
            alert("Signin Successfully");
        }
    }

    const SignupPage = () => {
        if (toggle) {
            settoggle(false);
        }
        else {
            settoggle(true);
        }
    }

    const SigninPage = () => {
        if (toggle) {
            settoggle(false);
        }
        else {
            settoggle(true);
        }
    }

    const UpEye = () => {
        if (uptype == "password") {
            setuptype("text");
            setupeye(false);
            setcupeye(true);
        }
        else {
            setuptype("password");
            setupeye(true);
            setcupeye(false);
        }

    }

    const Uptick = () => {
        if (uptick) {
            setuptick(false);
        }
        else {
            setuptick(true);
        }
    }

    const inEvent = (loge) => {
        const name = loge.target.name;
        const value = loge.target.value;
        setloginput((loglast) => {
            return {
                ...loglast,
                [name]: value
            }
        });
    }

    const logSubmit = (logine) => {
        logine.preventDefault();
        setlwname(false);
        setlwphone(false);
        setlwmail(false);
        setlwpass(false);
        setlwconf(false);
        if (loginput.logname == "") {
            setlwname(true);
        }
        else if (loginput.logphone == "") {
            setlwphone(true);
        }
        else if (loginput.logmail == "") {
            setlwmail(true);
        }
        else if (loginput.logpass == "") {
            setlwpass(true);
        }
        else if (loginput.logconf == "") {
            setlwconf(true);
        }
        else {
            alert("Signed up successfully");
        }
    }

    const logEye = () => {
        if (inpasslog == "password") {
            setinpasslog("text");
            setlpeye(false);
            setclpeye(true);
        }
        else {
            setinpasslog("password");
            setlpeye(true);
            setclpeye(false);
        }
    }

    const ConfEye = () => {
        if (inconflog == "password") {
            setinconflog("text");
            setlconfeye(false);
            setconfeye(true);
        }
        else {
            setinconflog("password");
            setlconfeye(true);
            setconfeye(false);
        }
    }

    const remTick = () => {
        if (remtick) {
            setremtick(false);
        }
        else {
            setremtick(true);
        }
    }

    return (
        <>
            <div className="container main_Container">
                <div className="card">
                    <div className="user">
                        <div className={`signin_form ${toggle ? "d-none" : ""}`}>
                            <div className="image">
                                <h3>Sign in</h3>
                            </div>

                            <form onSubmit={upSubmit}>

                                <div className="input_text">
                                    <input className={` ${upwemail ? "upwarn" : ""}`} type="text" placeholder="Enter Your Email" name="upemail" value={isignup.upemail} onChange={upEvent} />
                                    <span>Email</span>
                                </div>
                                <div className="input_text sipa">
                                    <input className={` ${upwpass ? "upwarn" : ""}`} type={uptype} placeholder="Enter Your Password" name="uppass" value={isignup.uppass} onChange={upEvent} />
                                    <span>Password</span>
                                    <i onClick={UpEye} className={`fa ${upeye ? "fa-eye-slash" : "fa-eye"}`}></i>
                                </div>
                                <div className="rem_for">
                                    <div className="rem">
                                        <span onClick={Uptick} className={` ${uptick ? "gruptick" : ""}`}><i className="fa fa-check"></i></span>
                                        <p>Keep me Logged in</p>
                                    </div>
                                    <span>Forgot Password?</span>
                                </div>
                                <div className="button">
                                    <button type="submit">Sign in</button>



                                    <div className="social">
                                        <span><img src="https://imgur.com/Sg4tiGj.png" /></span>
                                        <span><img src="https://imgur.com/0xwv5pD.png" /></span>
                                        <span><img src="https://imgur.com/DGBR03u.png" /></span>
                                        <span><img src="https://imgur.com/O9V5ups.png" /></span>
                                    </div>
                                    <p>Don't have an account? <NavLink id="a" onClick={SignupPage} to="#">Sign up</NavLink></p>
                                </div>

                            </form>

                        </div>

                        <div className={`signup_form ${toggle ? "" : "d-none"}`}>
                            <div className="image">
                                <h3>Sign up</h3>
                            </div>

                            <form onSubmit={logSubmit}>

                                <div className="input_text">
                                    <input className={` ${lwname ? "inwarn" : ""}`} type="text" placeholder="Enter Your Name" name="logname" value={loginput.logname} onChange={inEvent} />
                                    <span>Username</span>
                                </div>
                                <div className="input_text sipa">
                                    <input className={` ${lwphone ? "inwarn" : ""}`} type="number" placeholder="Enter Your Number" name="logphone" value={loginput.logphone} onChange={inEvent} />
                                    <span>Phone number</span>
                                </div>
                                <div className="input_text sipa">
                                    <input className={` ${lwmail ? "inwarn" : ""}`} type="text" placeholder="Enter Your Email" name="logmail" value={loginput.logmail} onChange={inEvent} />
                                    <span>Email</span>
                                </div>
                                <div className="input_text sipa">
                                    <input className={` ${lwpass ? "inwarn" : ""}`} type={inpasslog} placeholder="Enter Your Password" name="logpass" value={loginput.logpass} onChange={inEvent} />
                                    <span>Password</span>
                                    <i onClick={logEye} className={`fa ${lpeye ? "fa-eye-slash" : "fa-eye"}`}></i>
                                </div>
                                <div className="input_text sipa">
                                    <input className={` ${lwconf ? "inwarn" : ""}`} type={inconflog} placeholder="Confirm Password" name="logconf" value={loginput.logconf} onChange={inEvent} />
                                    <span>Confirm Password</span>
                                    <i onClick={ConfEye} className={`fa ${lconfeye ? "fa-eye-slash" : "fa-eye"}`}></i>
                                </div>
                                <div className="rem_for">
                                    <div className="rem">
                                        <span onClick={remTick} className={` ${remtick ? "greenish" : ""}`}><i className="fa fa-check"></i></span>
                                        <p>Remember Me</p>
                                    </div>

                                </div>
                                <div className="button_Signup">
                                    <button type="submit">Sign up</button>
                                    <div className="social">
                                        <span><img src="https://imgur.com/Sg4tiGj.png" /></span>
                                        <span><img src="https://imgur.com/0xwv5pD.png" /></span>
                                        <span><img src="https://imgur.com/DGBR03u.png" /></span>
                                        <span><img src="https://imgur.com/O9V5ups.png" /></span>
                                    </div>
                                    <p>Already have an account? <NavLink id="a" onClick={SigninPage} to="#">Sign in</NavLink></p>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Regestration;