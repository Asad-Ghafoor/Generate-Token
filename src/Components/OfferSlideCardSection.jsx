import React from "react";
import {NavLink} from 'react-router-dom'
import { OfferSlideCardSectionData } from "../Data/OfferSlideCardSectionData";
const OfferSlideCardSection = () => {
    const data = OfferSlideCardSectionData.map((elem, index) => {
        return (
            <div className="ad_imagebox slide"  key={index} >
                <NavLink to={elem.href}>
                    <div className="sponsored_background_img">
                        <img width="353" height="265" className="position" loading="lazy" 
                           
                            src={elem.src}
                            alt={elem.alt}
                            title={elem.title} />
                        <div className="sponsoredCont" style={{ "height": "105px" }}>
                            <div className="sponsoredContLogo">
                                <div className="storeimage">
                                    <img width="70" height="70" className="" loading="lazy"
                                        
                                        src={elem.src2}
                                        alt={elem.alt2}
                                        title={elem.title2} />
                                </div>
                            </div>
                            <p className="store_name">{elem.paragraph}</p>
                            <h3>{elem.heading}
                            </h3>
                            <p>{elem.paragraph2}</p>
                        </div>
                    </div>
                </NavLink>  
            </div>
        )
    })
    return (
        <>
            <section className="home_sections fav_section">
                <div className="container_center">
                    <h2 className="h3_title">Today's Top Offers</h2>
                    <div className="homeadsection favorite_boxes slide_effect_mobile">
                        <div id="carouselHr1" className="carouselHr">
                            <div className="carousel-multiple-items1 my">
                                <div className="my__holder">
                                {data}

                                    <div className="my__track"
                                        style={{ "width": "3294px", "transitionProperty": "none", "transform": "translate3d(-1098px, 0px, 0px)" }}>
                                        <div className="my__item cloned" style={{ "width": "366px" }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="my__nav my__nav--prev control prev" role="button" disabled={true}
                                    aria-label="Button Previous"></div>
                                <div className="my__nav my__nav--next control next" role="button" aria-label="Button Next">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OfferSlideCardSection;