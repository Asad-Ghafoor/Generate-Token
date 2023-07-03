import React from "react";
import { PopularStoriesData } from "../Data/PopularStoriesData";
import { NavLink } from "react-router-dom";
const PopularStories = () => {
    const data = PopularStoriesData.map((elem, index) => {
        return (
            <li key={index}><NavLink style={{"textDecoration" : "none"}} to={elem.href}
                title={elem.title}>{elem.title}</NavLink></li>
        )
    })
    return (
        <>
            <section className="section popstores" >
                <div className="popularstoreshome active">
                    <div className="popularHt"><span><i className="circledownArrow"></i>Popular Stores</span></div>
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
export default PopularStories;