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

function Work(){
	return(
		<>
			<Header/>
			<div className="pr_section_1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="pr_section_head">Work</h2>
							<h5 className="pr_section_breadcrumb"><a>Home</a> / Work</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="pr_sec_1">
				<div className="container">
					<div className="pr_sec_box">
						<div className="row">
							<div className="col-lg-8">

								<h2 className="work_sec_title_head mb_20">Eligibility Criteria To Work In Canada</h2>
								<p className="work_sec_para mb_10">Foreign nationals require a work permit to be eligible to work in Canada, with some exemptions. To apply for a work permit, candidates will require a Canadian job offer supported by a Labour Market Impact Assessment (LMIA).</p>
								<p className="work_sec_para mb_20">There are exceptions to this requirement, where candidates can apply for a work permit without an LMIA, or even a job offer. Some examples of this include, being a Recent graduate from Canadian Designated Learning Institute (DLI), or being a spouse of someone already on a work or a study permit.</p>

								<h2 className="work_sec_title mb_20">There are specific requirements you need to meet depending on where you are when you apply for your work permit. You must</h2>
								<ul className="work_ul mb_30">
									<li className="work_ul_li"><span className="work_sec_li_sty">Prove to an officer that you will leave Canada when your work permit expires</span></li>
									<li className="work_ul_li"><span className="work_sec_li_sty">Show that you have enough money to take care of yourself and your family members during your stay in Canada and to return home.</span></li>
									<li className="work_ul_li"><span className="work_sec_li_sty">Must not be criminally or medically inadmissible to Canada</span></li>
									<li className="work_ul_li"><span className="work_sec_li_sty">Not plan to work for an employer listed with the status “ineligible” on the list of employers who failed to comply with the conditions.</span></li>
									<li className="work_ul_li"><span className="work_sec_li_sty">Give the officer any other documents they ask for to prove you can enter the country</span></li>
								</ul>

								<h2 className="work_sec_title mb_20">Types of Canadian Work Permits</h2>
								<p className="work_sec_para mb_20">There are many different options for obtaining a Canadian work permit. Please refer to the following categories below to determine the work permit which best suits your qualifications</p>

								<h2 className="work_sec_title mb_10">Requiring a Labour Market Impact Assessment (LMIA)</h2>
								<ul className="mb_30">
									<li className="work_ul_li"><span className="work_sec_li_sty">Temporary Foreign Worker Program (TFWP)</span></li>
									<li className="work_ul_li"><span className="work_sec_li_sty">Facilitated LMIA (Quebec)</span></li>
									<li className="work_ul_li"><span className="work_sec_li_sty">Global Talent Stream</span></li>
								</ul>

								<h2 className="work_sec_title mb_10">LMIA-Exempt but requiring a job offer or employment contract</h2>
								<ul className="mb_30">
									<li className="work_ul_li"><span className="work_sec_li_sty">International Mobility Program (IMP)</span></li>
									<li className="work_ul_li"><span className="work_sec_li_sty">NAFTA Work Permits</span></li>
									<li className="work_ul_li"><span className="work_sec_li_sty">CETA Work Permits</span></li>
									<li className="work_ul_li"><span className="work_sec_li_sty">Intra-Company Transfers</span></li>
								</ul>

								<h2 className="work_sec_title mb_10">Open Work Permits (no job offer or LMIA required)</h2>
								<ul className="mb_30">
									<li className="work_ul_li"><span className="work_sec_li_sty">Post-Graduation Work Permits (PGWP)</span></li>
									<li className="work_ul_li"><span className="work_sec_li_sty">Spousal Sponsorship from Inside of Canada</span></li>
									<li className="work_ul_li"><span className="work_sec_li_sty">International Experience Canada (IEC) (working holiday visa)</span></li>
									<li className="work_ul_li"><span className="work_sec_li_sty">Bridging Open Work Permit (BOWP)</span></li>
									<li className="work_ul_li"><span className="work_sec_li_sty">Spouse Accompanying International Student or Worker</span></li>
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

export default Work;