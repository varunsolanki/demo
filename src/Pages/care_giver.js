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

function Care_Giver(){
	return(
		<>
			<Header/>
			<div className="pr_section_1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="pr_section_head">Care Giver</h2>
							<h5 className="pr_section_breadcrumb"><a>Home</a> / Care Giver</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="pr_sec_1">
				<div className="container">
					<div className="pr_sec_box">
						<div className="row">
							<div className="col-lg-8">
								<p className="care_sec_para mb_20"><strong>Home Child Care Provider Pilot and Home Support Worker Pilot</strong></p>
								<p className="care_sec_para mb_20">Both the Home Child Care Provider Pilot and the Home Support Worker Pilot will issue work permits if you are a caregiver with a job offer in Canada if you satisfy the requirements listed below:</p>

								<ul className="care_ul mb_30">
									<li className="care_ul_li"><span className="care_sec_li_sty">Language tests result showing a Canadian Language Benchmark (CLB) of 5</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">One year of foreign equivalent post-secondary or Canadian education; and</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Admissible to Canada.</span></li>
								</ul>
								<p className="care_sec_para mb_20">For each program, a maximum of 2,750 primary candidates (out of 5500 annually) will be accepted.</p>

								<h2 className="care_sec_subtitle mb_20">The pilots also provide:</h2>
								<ul className="care_ul mb_20">
									<li className="care_ul_li"><span className="care_sec_li_sty">Work permits that are occupation-specific for Caregivers Program allow them to change jobs quickly if necessary.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Spouses/common-law partners with open work permits and dependent children with study permits allow the caregiver’s family to accompany them to Canada.</span></li>
								</ul>
								<p className="care_sec_para_2 mb_30">Employers who hire a caregiver from outside the country would no longer be obliged to do a Labour Market Impact Assessment (LMIA), as was the case previously.</p>
								<p className="care_sec_para_2 mb_30"><strong>How Can one apply through Home Child Care Provider or Home Support Worker Pilots?</strong><br/> Application categories can be divided into the following subcategories:</p>
								
								<p className="care_sec_para_2 mb_15"><strong>Applicants that lack work experience</strong></p>

								<ul className="care_ul mb_40">
									<li className="care_ul_li"><span className="care_sec_li_sty">Depending on which occupation you plan to work in, you can apply to either the Home Child Care Provider Pilot or the Home Support Worker Pilot.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">You secure a valid job offer.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">With your permanent residence application, you submit a work permit application.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">You get a work permit to work in Canada temporarily if you meet the requirement.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">You can work as a caregiver for any employer given that the work permit you get is an occupation-restricted open work permit.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">To qualify for permanent residence, you get at least 24 months of work</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Once you have enough work experience, send the proof.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">The final decision on your application will be made by Immigration, Refugee, Canadian Citizenship (IRCC) for your permanent residence.</span></li>
								</ul>

								<p className="care_sec_para_2 mb_15"><strong>Candidates with up to 24 months of professional experience</strong></p>
								<ul className="care_ul mb_40">
									<li className="care_ul_li"><span className="care_sec_li_sty">Depending on which occupation you plan to work in you can apply to either the Home Child Care Provider Pilot or the Home Support Worker Pilot.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">A valid job offer is secured.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">With your permanent residence application, you submit a work permit application.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">You get a work permit to work in Canada temporarily if you meet the requirements.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">You can work as a caregiver for any employer if the work permit you get is an occupation- restricted open work permit.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">To qualify for permanent residence, you need at least 24 months of work experience.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Once you have enough work experience, you need to send proof.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Your application for permanent residence will get a final decision.</span></li>
								</ul>
								<p className="care_sec_para_2 mb_10"><strong>Applicants have 24 or more months of qualifying work experience</strong></p>
								<p className="care_sec_para_2 mb_40">If you already have 24 months of acceptable work experience, you and your family members are qualified to apply for permanent residence through the Home Child Care Provider Pilot or the Home Support Worker Pilot. When you apply, you'll need to provide proof that you've had sufficient relevant job experience.</p>
								
								<p className="care_sec_para_2 mb_10"><strong>Job Duties of a Home child care provider</strong></p>
								<p className="care_sec_para_2 mb_20">Supervise and take care of children at their homes.</p>

								<ul className="care_ul mb_15">
									<li className="care_ul_li"><span className="care_sec_li_sty">Cook meals for children.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Take care of infants by feeding, changing diapers, bathing, and dressing them.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Watch children at home.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Take them to school (If required).</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Keep records of the children’s activities.</span></li>
								</ul>
								<p className="care_sec_para_2 mb_15">If you are a home child care provider, you can also be called as:</p>
								<ul className="care_ul mb_30">
									<li className="care_ul_li"><span className="care_sec_li_sty">A babysitter</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">A nanny</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">A child-care provider in a private home</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">A parent’s helper</span></li>
								</ul>

								<p className="care_sec_para_2 mb_10"><strong>Job Duties of a Home support worker</strong></p>
								<ul className="care_ul mb_15">
									<li className="care_ul_li"><span className="care_sec_li_sty">Provide care/companionship for individuals during recovery and medical treatment.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Help them to bathe, get dress and watch them (if required).</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Cook meals and special diets.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Follow medical routines under the direction of the household or doctor.</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Housekeepers may include doing the laundry, washing dishes, making beds and taking care of children if required.</span></li>
								</ul>
								<p className="care_sec_para_2 mb_15">These professionals may meet the following requirements:</p>
								<ul className="care_ul mb_30">
									<li className="care_ul_li"><span className="care_sec_li_sty">Family caregivers</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Home support worker</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Attendant for people with disabilities</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Live-in caregiver for seniors</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Housekeeper</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Personal aide as a home support</span></li>
								</ul>

								<p className="care_sec_para_2 mb_10"><strong>How to Hire a Home Child Care Provider or Home Support Worker</strong></p>
								<p className="care_sec_para_2 mb_20">Here are the steps to hire a caregiver.</p>
								<ul className="care_ul mb_30">
									<li className="care_ul_li"><span className="care_sec_li_sty">Find a caregiver</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Check your selected caregiver’s eligibility</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Give them a valid job offer</span></li>
									<li className="care_ul_li"><span className="care_sec_li_sty">Have the employee file for a work permit and submit a PR application</span></li>
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

export default Care_Giver;