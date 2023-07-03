import React from "react";
import BigSaving from "./BigSaving";
import FreshDeals from "./FreshDeals";
import HolliDaysSeason from "./HollidaysSeason";
import Shopping from "./Shopping";
import UseCodes from "./UseCodes";
import Usepromo from "./Usepromo";
import Promotion from "./Promotion";

const BlogPost = () => {
    return (
        <>
            <div className="inner_content_homeBot container_center above">

                <article className="accordian_txt_block">

                    <ul>
                        <li>
                            <div className="toggleanybox">
                                <div className="drop_head active" data-toggleany="abouttxt_block1" id="">
                                    <span className="accordian_num">1</span> What is a promo code? <i
                                        className="fa fa-angle-down"></i>
                                </div>
                                <div className="drop_main_box active" data-opentoggleany="abouttxt_block1">
                                    <p><span data-contrast="auto"><img
                                        style={{"display": "block"," marginLeft":" auto", "marginRight": "auto"}}
                                        title="Codes.pk promo code.jpg"
                                        src="https://res.cloudinary.com/csnetworkco/image/upload/v1635754709/csnimages/tmp/phpmKIGvA.jpg"
                                        alt="Codes.pk promo code" width="357" height="241"
                                        loading="lazy"/>Promo
                                        codes are a great way to save money when shopping online. Here, are some
                                        of
                                        the most common reasons why you might want to use a promo code when
                                        shopping:&nbsp;</span><span data-ccp-props="{">&nbsp;</span></p>
                                    <ul>
                                        <li data-leveltext="" data-font="Symbol" data-listid="2"
                                            data-aria-posinset="1" data-aria-level="1"><span
                                                data-contrast="auto">You can find items at a lower
                                                price</span><span data-ccp-props="{">&nbsp;</span></li>
                                        <li data-leveltext="" data-font="Symbol" data-listid="2"
                                            data-aria-posinset="2" data-aria-level="1"><span
                                                data-contrast="auto">You can get free
                                                shipping&nbsp;</span><span data-ccp-props="{">&nbsp;</span></li>
                                        <li data-leveltext="" data-font="Symbol" data-listid="2"
                                            data-aria-posinset="3" data-aria-level="1"><span
                                                data-contrast="auto">&nbsp;You can find an item in
                                                a color or size that is sold out&nbsp;</span><span
                                                    data-ccp-props="{">&nbsp;</span></li>
                                        <li data-leveltext="" data-font="Symbol" data-listid="2"
                                            data-aria-posinset="4" data-aria-level="1"><span
                                                data-contrast="auto">You can avoid paying taxes
                                                and fees on international orders&nbsp;</span><span
                                                    data-ccp-props="{">&nbsp;</span></li>
                                    </ul>
                                    <p><span data-contrast="auto">There are many benefits to using promo codes from
                                        the
                                        convenience of using your phone to redeeming one from your desktop, not
                                        to
                                        mention they're easy to remember. Get started with these handy
                                        tips!</span><span data-ccp-props="{">&nbsp;</span></p>
                                </div>
                            </div>
                        </li>
                       <Usepromo />
                       <UseCodes />
                        <HolliDaysSeason />
                       <Promotion />
                       <BigSaving />
                      <Shopping />
                       <FreshDeals />
                    </ul>
                </article>
            </div>
        </>
    )
}
export default BlogPost;