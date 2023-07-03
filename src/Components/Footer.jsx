import React from "react"
import { NavLink } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <div className="footer_wrapper">
                <div className="footerlinks">
                    <div className="footer_logo codespk ">
                        <NavLink style={{"textDecoration" : "none"}} className="codespk" to="/" aria-label="footer logo">
                            <img width="220" height="50" loading="lazy"
                                src="https://media-services.dcm-inc.com/couponsites/static/resources/image/codespk/logo-bottom.svg"
                                alt="Codes.pk" title="Codes.pk" />
                         </NavLink>
                    </div>
                    <div className="footerwrap">
                        <div className="column col3">
                            <div className="linksheading">CONNECT</div>
                            <div className="linkFooter">
                                <NavLink style={{"textDecoration" : "none"}} target="_blank" rel="noopener nofollow"
                                    to="https://www.facebook.com/Codes.com.pk/" aria-label="facebook">Facebook </NavLink>
                                <NavLink style={{"textDecoration" : "none"}} target="_blank" rel="noopener nofollow" to="https://twitter.com/codespk"
                                    aria-label="twitter">Twitter </NavLink>
                                <NavLink style={{"textDecoration" : "none"}} to="https://www.instagram.com/codes.pk/" rel="noopener nofollow"
                                    target="_blank" aria-label="instagram">Instagram </NavLink>
                                <NavLink style={{"textDecoration" : "none"}} to="https://codes.pk/contact" aria-label="contact">Contact Us </NavLink>
                            </div>
                        </div>
                        <div className="column col4">
                            <div className="linksheading">GET INVOLVED</div>
                            <div className="linkFooter">
                                <NavLink style={{"textDecoration" : "none"}} to="https://codes.pk/share-a-coupon">Submit a coupon </NavLink>
                            </div>
                        </div>
                        <div className="column col5">
                            <div className="linksheading">GENERAL</div>
                            <div className="linkFooter">
                                <NavLink style={{"textDecoration" : "none"}} to="https://codes.pk/community/edit">My Account </NavLink>
                                <NavLink style={{"textDecoration" : "none"}} to="https://codes.pk/about" aria-label="about">About Us </NavLink>
                                <NavLink style={{"textDecoration" : "none"}} to="https://codes.pk/sitemap">Site Map </NavLink>
                                <NavLink style={{"textDecoration" : "none"}} to="https://codes.pk/sitemap/all" aria-label="All Brands">All Brands </NavLink>
                                <NavLink style={{"textDecoration" : "none"}} to="https://codes.pk/faq" aria-label="FAQ">FAQ </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="terms thickborder siteColor codespk">
                    <div className="site_links">
                        <div className="copyrighttxt">©2014 - 2023 Digital Conversions Media DMCC. All Rights Reserved
                            <p>Third-party trademarks are the property of their respective third-party owners.
                                Presence
                                of a third-party trademark does not mean that CodesPK has any relationship with that
                                third-party or that the third-party endorses CodesPK or its services.
                            </p>
                        </div>
                        <span className="contactinfo">Company Information</span>
                        <div className="showcontactinfo">
                            <NavLink style={{"textDecoration" : "none"}} to="https://codes.pk/terms">Terms of Use </NavLink><span className="sep">|</span><NavLink
                                to="https://codes.pk/privacypolicy">Privacy Policy </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;