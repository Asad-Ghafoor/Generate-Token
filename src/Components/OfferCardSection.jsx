import React from "react";
import "../Style/Navigationbar.css";
import { OfferCardSectionData } from "../Data/OfferCardSectionData";
import { NavLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

const OfferCardSection = () => {


    const data = OfferCardSectionData.map((elem, index, key) => {
    //    const {src,alt,title}=elem;

        return (
            <div className="ad_imagebox home_sponsored" data-spons_id="277" key={index}>
                <NavLink to="#"
                    onClick="code_redirect_banner('983974', 'PEHLAORDER', this, '7', 'foodpanda-vouchers', 0 );"
                    target="_blank" data-home_spons_id="277">
                    <div className="sponsored_background_img">
                        <img width="353" height="265" className="position" loading="lazy"
                       
                            src={elem.src}
                            alt={elem.alt}
                            title={elem.title} />
                        <div className="sponsoredCont" style={{ "height": "90px" }}>
                            <div className="sponsoredContLogo">
                                <div className="storeimage">
                                    <img width="70" height="70" className="" loading="lazy"
                                   
                                        src={elem.src2}
                                        alt={elem.alt2} title={elem.title2} />
                                </div>
                            </div>
                            <div className="right_content">
                                <p className="store_name">{elem.paragraph}</p>
                                <h3>{elem.heading}</h3>
                                <p>{elem.paragraph2}</p>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>

        )
    })

    return (
        <>
            <section className="home_main_section">
                <h2 className="h3_title">Today's Top Offers</h2>
                <div className="container_center">
                    <div className="homeadsection old_look SponsoredSlides">
                        {data}
                    </div>

                </div>
            </section>
        </>
    )
}
export default OfferCardSection;