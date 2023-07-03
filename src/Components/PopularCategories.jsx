import React from "react";
import { NavLink } from "react-router-dom";
import { PopularCategoriesData } from "../Data/PopularCategoriesData";
const PopularCategories = () => {
    const data = PopularCategoriesData.map((elem, index) =>
    {
        return(
           
            <li key={index}><NavLink  style={{"textDecoration" : "none"}} to={elem.href} title={elem.title}>{elem.paragraph}</NavLink></li>
        )
    })
    return (
        <>
            <section className="section popcategories">
                <div className="popularstoreshome active">
                    <div className="popularHt"><span><i className="circledownArrow"></i>Popular Categories</span></div>
                    <div className="inner_content_home showpopularstores wrapper">
                        <div className="hght_algnd_box">
                           <ul>
                           {data}
                           </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PopularCategories;