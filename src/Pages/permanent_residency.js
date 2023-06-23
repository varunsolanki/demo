import React from "react";
import "./../Assets/css/style.css";
import "./../Assets/css/bootstrap.css";
import "./../Assets/css/magnific-popup.css";
import "./../Assets/css/nice-select.css";
import "./../Assets/css/animate.min.css";
import {Link} from 'react-router-dom';
import Header from "./header.js";
import Footer from "./footer.js";
import { Img, Icons } from '../Utilities/Icons.js';

function Permanent_Residency(){
	return(
		<>
			<script src="../Assets/js/script.js"></script>
			<Header/>
			<div className="pr_section_1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="pr_section_head">Permanent Residency</h2>
							<h5 className="pr_section_breadcrumb"><a>Home</a> / Permanent Residency</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="pr_sec_1">
				<div className="container">
					<div className="pr_sec_box">
						<div className="row">
							<div className="col-lg-8">
								<h2 className="pr_sec_title_head">Permanent Residency</h2>
								<p className="pr_sec_para mb_20">Canada has a pragmatic approach towards the immigration policies they frame, and the nation is exceptionally welcoming towards new immigrants and encourage people from around the globe to be the residents of Canada. Over the period of last few years, Canada has welcomed more 300K permanent residents every year. Considering the social and economic development of a person Canada has come up as one of most desired places to live, according to a recent survey 53 percent of adults in world’s leading nations expressed their desire to immigrate to Canada.</p>
								<h2 className="pr_sec_subtitle">Who is a permanent resident?</h2>
								<p className="pr_sec_para mb_20">Permanent Residents are individuals who legally immigrate to Canada and are currently entitled to a permanent resident status in Canada, and are not yet Canadian Citizens. In order to support the permanent residency every immigrant is suggested to live in Canada for 2 years out of first five years or they might be on a risk of losing their status as a permanent resident in Canada. Maintaining Canadian permanent residence in good holding can be the gateway to next step that is the Canadian citizenship.</p>
								<p className="pr_sec_para mb_20">There are several immigration programs that allow eligible Foreign Nationals to immigrate to Canada permanently. Some are Federal and others are Provincial and they are as follow.</p>
								<ul>
									<li className="pr_sec_li_sty"><Link to="/express_entry" className="red">Express Entry</Link></li>
									<li className="pr_sec_li_sty"><Link to="/provincial_nominee_program" className="red">Provincial Nominee Program</Link></li>
									<li className="pr_sec_li_sty"><Link to="/family_sponsorship" className="red">Family Sponsorship</Link></li>
									<li className="pr_sec_li_sty"><Link to="/atlantic_immigration_program" className="red">Atlantic Immigration Program</Link></li>
									<li className="pr_sec_li_sty"><Link to="/care_giver" className="red">Caregiver Programme</Link></li>
								</ul>
							</div>
							<div className="col-lg-4">
								<div className="side_box">
									<div className="appointment_box">
										<img src={Img.are_you_ready} className="appointment_img"></img>
										<h3 className="appointment_title">Ready for the Appointment?</h3>
										<p className="appointment_para">Find out what it takes to be eligible for Canadian immigration and begin your clear path to Canada.</p>
										<button className="appointment_btn">Book Now</button>
									</div>
									<div className="download_box">
										<h3 className="download_title">Download Guide</h3>
										<button className="download_btn">Canada Guide</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="pr_sec_highlight">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="pr_sec_highlight_title">Ready to Start your Visa Process?</h2>
							<center><button className="pr_sec_highlight_btn">APPLY NOW</button></center>
						</div>
					</div>
				</div>
			</div>
			<div className="get_in_touch_sec">
				<div className="container">
					<div className="get_in_touch_sec_inner">
						<div className="row">
							<div className="col-lg-12">
								<h2 className="get_in_touch_sec_title">Get in touch</h2>
							</div>
						</div>
						<div className="get_in_touch_box">
							<div className="row">
								<div className="col-lg-6">									
									<div className="row">
										<div className="col-lg-12">
											<div className="get_in_touch_box_display">
												<div>
													<img src={Icons.canada}></img>
												</div>
												<div>
													<h5 className="get_in_touch_call_title">Canada</h5>
													<p className="get_in_touch_call_text">+16477055403</p>
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="get_in_touch_box_display">
												<div>
													<img src={Icons.uae}></img>
												</div>
												<div>
													<h5 className="get_in_touch_call_title">UAE</h5>
													<p className="get_in_touch_call_text">+971501328189</p>
												</div>
											</div>
										</div>
										<div className="col-lg-12">	
											<div className="get_in_touch_box_display">
												<div>
													<img src={Icons.india}></img>
												</div>
												<div>											
													<h5 className="get_in_touch_call_title">India</h5>
													<p className="get_in_touch_call_text">18008890542</p>
												</div>
											</div>
										</div>
									</div>									
								</div>
								<div className="col-lg-6">
									<center>
										<img src={Icons.mail} className="get_in_touch_img"></img>
										<h3 className="get_in_touch_call_head">
											Mail Us
										</h3>
										<a href="mailto:info@growingglobeimmigration.com" className="black"><h5 className="get_in_touch_mail_title">info@growingglobeimmigration.com</h5></a>
									</center>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</>
	);
}

export default Permanent_Residency;