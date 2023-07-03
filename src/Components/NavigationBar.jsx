import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { NavLink } from "react-router-dom";
import "../Style/Navigationbar.css"
const NavigationBar = () => {
    const encodeInput = (form) => {
        // Encode the value of the query
        form.elements['searchKey'].value = encodeURIComponent(form.elements.value)
    }
    return (
        <>
            <div className="navbar-fixed-top" id="codespk">
                <div className="container">
                    <button className="mobilebuttons openMenu" aria-label="menu"><span className="bar"></span><span className="bar"></span><span className="bar"></span></button>
                    <button className="mobilebuttons showsearch openSearch" aria-label="search"><span className="icon_search"></span></button>
                    <div className="header_main">
                        <div className="topLeftHeader">
                            <div className="main_logo codespk">
                                <NavLink to="/" aria-label="logo">
                                    <img width="220" height="50" loading="lazy" src="https://media-services.dcm-inc.com/couponsites/static/resources/image/codespk/logo.svg?v=1" alt="Codes.pk" title="Codes.pk" />
                                </NavLink>
                            </div>
                            <div className="searchfor">
                                <span className="closeSearch">✕</span>
                                <div className="container">
                                    <form method="get" name="searchform" id="searchform" action="s" onSubmit={encodeInput}>
                                        <div className="searchBox">
                                            <div className="search-pad field field-input">
                                                <input name="searchKey" type="text" className="searchinput required text dt_search_box" id="required" placeholder="Search.." aria-label="search" />
                                            </div>
                                            <div className="search_button">
                                                <input type="button" value="Search" id="submit2" className="srchbtns" name="submit2" />
                                                <span className="icon_search"></span>
                                            </div>
                                            <div className="home_results" id="searchResults" style={{ "display": "none" }}></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="topRightHeader">
                            <nav className="mobile_left_slide">
                                <div className="menuoverlay"></div>
                                <div className="mobilemenuinner">
                                    <ul className="site-nav">
                                        <li className="ml-login" id="user_login_status_mobile">
                                            <NavLink className="click" id="home_login_mob" to="/regestration">
                                                <i className="fa fa-user-o iconUser"></i><span>
                                                    Log In / Sign Up
                                                </span></NavLink>
                                        </li>
                                    </ul>
                                    <div className="main_navigation ">
                                        <ul>
                                            <li className="navmain">
                                                <div className="headlable" data-hoverdrop="stores_nav">
                                                    Stores <i className="fa fa-angle-down"></i></div>
                                                <div className="header_dropnav storesnav" data-openhoverdrop="stores_nav">
                                                    <div className="content">
                                                        <div className="flexboxboth">
                                                            <div className="column">
                                                                <p>Popular Stores</p>
                                                                <div className="inline_list">
                                                                    <NavLink to="https://codes.pk/foodpanda-vouchers" className=" navlink"
                                                                        data-link_id="152" title="foodpanda">foodpanda</NavLink>
                                                                    <NavLink to="https://codes.pk/daraz-vouchers" className=" navlink"
                                                                        data-link_id="153" title="Daraz">Daraz</NavLink>
                                                                    <NavLink to="https://codes.pk/etihad-coupons" className=" navlink"
                                                                        data-link_id="122" title="Etihad Airways">Etihad Airways</NavLink>
                                                                    <NavLink to="https://codes.pk/flydubai-coupons" className=" navlink"
                                                                        data-link_id="160" title="flydubai">flydubai</NavLink>
                                                                    <NavLink to="https://codes.pk/emirates-coupons" className=" navlink"
                                                                        data-link_id="123" title="Emirates Airline">Emirates
                                                                        Airline</NavLink>
                                                                    <NavLink to="https://codes.pk/qatar-airways-coupons"
                                                                        className=" navlink" data-link_id="124"
                                                                        title="Qatar Airways">Qatar Airways</NavLink>
                                                                    <NavLink to="https://codes.pk/aliexpress-coupons" className=" navlink"
                                                                        data-link_id="151" title="AliExpress">AliExpress</NavLink>
                                                                    <NavLink to="https://codes.pk/namshi-coupons" className=" navlink"
                                                                        data-link_id="161" title="Namshi">Namshi</NavLink>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <NavLink className="viewall bluebutton" to="https://codes.pk/sitemap"
                                                            title="View All Stores">
                                                            View All Stores </NavLink>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="navmain">
                                                <div className="headlable" data-hoverdrop="categories_nav">Categories <i
                                                    className="fa fa-angle-down"></i></div>
                                                <div className="header_dropnav categoriesnav" data-openhoverdrop="categories_nav">
                                                    <div className="content">
                                                        <div className="flexboxboth">
                                                            <div className="column">
                                                                <p>Browse Categories</p>
                                                                <div className="inline_list">
                                                                    <NavLink to="https://codes.pk/coupons/flight" className=" navlink"
                                                                        data-link_id="104" title="Flight Coupons">Flight Coupons</NavLink>
                                                                    <NavLink to="https://codes.pk/coupons/fashion" className=" navlink"
                                                                        data-link_id="105" title="Fashion Coupons">Fashion
                                                                        Coupons</NavLink>
                                                                    <NavLink to="https://codes.pk/coupons/food-delivery"
                                                                        className=" navlink" data-link_id="106"
                                                                        title="Food Coupons">Food Coupons</NavLink>
                                                                    <NavLink to="https://codes.pk/coupons/electronics" className=" navlink"
                                                                        data-link_id="107" title="Electronics Coupons">Electronics
                                                                        Coupons</NavLink>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <NavLink className="viewall bluebutton" to="https://codes.pk/categories"
                                                            title="View All Categories">View All Categories</NavLink>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="navmain"><NavLink className="navA navlink" data-link_id="107"
                                                to="https://codes.pk/daraz-vouchers" title="Daraz Mega Deals">Daraz Mega
                                                Deals</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <div className="user_bar" id="user_login_status">
                                <NavLink className="nav_login siteColor codespk" to="/regestration"
                                    title="Log In or Sign Up"><i className="fa fa-user-o"></i><span className="logintxt">Log In / SignUp</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavigationBar;