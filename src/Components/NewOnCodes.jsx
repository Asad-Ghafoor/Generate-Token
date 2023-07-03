import React from "react";
import { NewOnCodesData } from "../Data/NewOnCodeData";
import { NavLink } from "react-router-dom";
const NewOnCodes = () => {
    const data = NewOnCodesData.map((elem, index) => {
        return (
            <div className="center my__item cloned" style={{ "width": "255px" }} key={index}>
                <div className="offer_item cardItem slide">
                    <NavLink style={{"textDecoration" : "none"}} className="flexboxboth tile"
                        to={elem.href}>
                        <div>
                            <img width="90" height="90" loading="lazy"
                                src={elem.src}
                                alt={elem.alt}
                                title={elem.title} />
                            <div className="offer_head">{elem.paragraph}</div>
                            <div className="offer_title">{elem.paragraph2} </div>
                            <div className="blink">{elem.paragraph3}</div>
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    })
    return (
        <>
            <section className="section recentOffers m1">
                <div className="container_center">
                    <h2 className="h3_title">New on Codes.pk</h2>
                    <div id="carouselHr2" className="carouselHr m1">
                        <div className="carousel-multiple-items2 offers_container my">
                            <div className="my__holder">
                                <div className="my__track"
                                    style={{ "width": "4080px", "transitionProperty": "none", " transform": "translate3d(-1020px, 0px, 0px)" }}>
                                    {data}
                                </div>
                            </div>
                            <div className="my__nav my__nav--prev control prev" role="button" disabled={true}
                                aria-label="Button Previous"></div>
                            <div className="my__nav my__nav--next control next" role="button" aria-label="Button Next">
                            </div>
                        </div>
                    </div>
                    <div className="offer_heading"><NavLink style={{"textDecoration" : "none"}} className="button sitebtn" to="https://codes.pk/coupons/new_coupons"
                        title="View All Offers">View All Offers</NavLink></div>
                </div>
            </section>
        </>
    )
}
export default NewOnCodes;