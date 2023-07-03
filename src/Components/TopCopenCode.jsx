import React from "react";
import '../Style/Navigationbar.css'
import { NavLink } from "react-router-dom";
import { TopCoupenCodeData } from "../Data/TopCoupenCodeData";
import PopularCategories from "./PopularCategories";
import PopularStories from "./PopularStories";
import NewOnCodes from "./NewOnCodes";
import BlogPost from "./BlogPost";
import Suscribe from "./Suscribe";
import Footer from "./Footer";
const TopCoupenCode = () => {
    const data = TopCoupenCodeData.map((elem, index) => {
        return (
            <NavLink className="mediabox" to={elem.href} key={index} style={{ textDecoration: 'none' }}>
                <img width="150" height="150" loading="lazy"
                    src={elem.src}
                    alt={elem.alt}
                    title={elem.title} />
                <span className="ttl" style={{"textDecoration" : "none"}}>{elem.ttl}</span>
            </NavLink>
        )
    })
    return (
        <>
            <div className="content_wrapper home_middle_section" style={{ "height": "auto !important" }}>
                <div className="inner_content_homeBot container_center nobgpd">
                    <h2 className="h3_title">Top 10 Coupon Codes</h2>
                    <div className="horizontal_media">
                        {data}
                    </div>
                </div>
                <PopularCategories />
                <PopularStories />
                <NewOnCodes />
                <BlogPost />
                <Suscribe />
                <Footer />
            </div>
        </>
    )
}
export default TopCoupenCode;