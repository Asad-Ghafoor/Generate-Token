import react from 'react'
import JoinNow from '../Components/JoinNow';
import NavigationBar from '../Components/NavigationBar';
import OfferCardSection from '../Components/OfferCardSection';
import OfferSlideCardSection from '../Components/OfferSlideCardSection';
import TopCoupenCode from '../Components/TopCopenCode';
const Home = () => {
  return (
    <>
      <div id="wrapper" className="home_page" style={{ "height": "auto !important", "minHeight": "0px !important" }}>
      <span id="page" style={{"display":"none"}}>Home</span>
      <div className="content_wrapper home_top_section">
      <div className="inner_content_home home_title">
				<h1 className="h1_title">
					Find Coupon Codes for your Favourite Stores
				</h1>
				<h2 className="sub_headtxt">
					<span className="count_update">1267</span> Free Coupon Codes &amp; Discounts added this week
				</h2>
			</div>
      </div>
      <OfferCardSection />
      <OfferSlideCardSection />
      <JoinNow />
      <TopCoupenCode />
      </div>
    </>
  )
}
export default Home;