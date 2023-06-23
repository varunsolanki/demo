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

function Invest(){
	return(
		<>
			<Header/>
			<div className="pr_section_1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="pr_section_head">Invest</h2>
							<h5 className="pr_section_breadcrumb"><a>Home</a> / Invest</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="pr_sec_1">
				<div className="container">
					<div className="pr_sec_box">
						<div className="row">
							<div className="col-lg-8">

								<h2 className="invest_sec_title_head mb_30">What Is A Business Visa?</h2>
								<p className="invest_sec_para mb_30">A business visa is a travel document that allows one to travel to a foreign nation with the purpose of conducting business. During this travel, they may engage in business activities that do not constitute work or employment.</p>

								<h2 className="invest_sec_title mb_20">Are you a Business Visitor?</h2>
								<p className="invest_sec_para mt_15 mb_15">You’re a business visitor if you:</p>
								<ul className="invest_ul mb_30">
									<li className="invest_ul_li"><span className="invest_sec_li_sty">Come to take part in international business activities without being part of the Canadian labour market</span></li>
									<li className="invest_ul_li"><span className="invest_sec_li_sty">are visiting Canada temporarily to look for ways to grow your business invest and advance your business relationships Business visitors usually stay in Canada for a few days or a few weeks but can stay for up to 6 months.</span></li>
								</ul>

								<h2 className="invest_sec_title mb_20">Pre-Requisites for a business visitor.</h2>
								<ul className="invest_ul mb_30">
									<li className="invest_ul_li"><span className="invest_sec_li_sty_title">Aim</span><br/><span className="invest_sec_li_sty">You must show that, you plan to stay for less than 6 months, you don’t plan to enter the Canadian labour market and your main place of business and source of income and profits is outside Canada.</span></li>
									<li className="invest_ul_li"><span className="invest_sec_li_sty_title">Important Documents</span><br/><span className="invest_sec_li_sty">You have documents that support your application. You meet Canada’s basic entry requirements, because you have a valid travel document, such as a passport etc.</span></li>
									<li className="invest_ul_li"><span className="invest_sec_li_sty_title">Funds</span><br/><span className="invest_sec_li_sty">You must show that you have enough money for your stay and to return home. You plan to leave Canada at the end of your visit and you are not a criminal, security or health risk to Canadians.</span></li>
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

export default Invest;