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

function Provincial_Nominee_Program(){
	return(
		<>
			<Header/>
			<div className="pr_section_1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="pr_section_head">Provincial Nominee Program</h2>
							<h5 className="pr_section_breadcrumb"><a>Home</a> / Provincial Nominee Program</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="pr_sec_1">
				<div className="container">
					<div className="pr_sec_box">
						<div className="row">
							<div className="col-lg-8">
								<h2 className="provincial_sec_title_head">How The Provincial Nominee Program (PNP) Works</h2>
								<p className="provincial_sec_para mb_20">This program is for workers who</p>
								<ul className="provincial_ul mb_20">
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">Have the skills, education, and work experience to contribute to the economy of a specific province or territory</span></li>
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">Hant to live in that province and</span></li>
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">Want to become <Link to="https://www.canada.ca/en/services/immigration-citizenship/helpcentre/glossary.html#permanent_resident" className="red">Permanent Residents</Link> of Canada</span></li>
								</ul>
								<p className="provincial_sec_para_2 mb_20">There are several "streams" (immigration programs that target particular demographics) and requirements in each province and territory. As an illustration, provinces and territories may focus on</p>
								<ul className="provincial_ul mb_30">
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">Students</span></li>
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">Business People</span></li>
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">Skilled Workers</span></li>
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">Semi-skilled Workers</span></li>
								</ul>
								<h2 className="provincial_sec_title">Understand the application options</h2>
								<p className="provincial_sec_para_2 mb_10">The Provincial Nominee Program stream you are applying to will determine how you submit your application. You may need to submit your application through Express Entry or a non-Express Entry process.</p>
								<p className="provincial_sec_para_2 mb_30">You will be required to acquire a police check and pass a medical examination as part of the procedure (certificate). No matter where they intend to live in Canada, everyone is required to get these checks.</p>
								
								<h2 className="provincial_sec_title">Non-Express Entry process</h2>
								<p className="provincial_sec_para_2 mb_10">In the <strong>non-Express Entry process:</strong></p>
								<ul className="provincial_ul mb_30">
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">You apply to the province or territory for nomination under a non-Express Entry stream.</span></li>
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">You need to meet the eligibility requirements of the province that nominates you.</span></li>
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">If you’re nominated, you apply for permanent residence online</span></li>
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">You have to get a</span>
										<ul className="provincial_ul mt_10">
											<li className="provincial_ul_li"><span className="provincial_sec_li_sty"><Link to="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams.html" className="red">Medical exam</Link> and</span></li>
											<li className="provincial_ul_li"><span className="provincial_sec_li_sty"><Link to="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates.html" className="red">Police check</Link> (certificate)</span></li>
										</ul>
									</li>
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">Application processing times are longer than through Express Entry.</span></li>
								</ul>

								<h2 className="provincial_sec_title">National Occupational Classification 2021</h2>
								<p className="provincial_sec_para_2 mb_10">The National Occupational Classification's 2021 edition will be used by IRCC starting on November 16, 2022. (NOC).</p>
								<p className="provincial_sec_para_2 mb_10">You must utilize the 2021 version of NOC if the province or territory receives your application on or after November 16, 2022.</p>
								<p className="provincial_sec_para_2 mb_30">How to apply using a non-Express Entry method</p>
								
								<h2 className="provincial_sec_title">Express Entry process</h2>
								<p className="provincial_sec_para_2 mb_10">There are two ways to apply for Express Entry online:</p>
								<ul className="provincial_ul mb_20">
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">You contact the province or territory and apply for a nomination under an Express Entry stream.</span></li>
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">If the province or territory agrees to nominate you, you create an Express Entry profile (or update your profile if you already have one) and show you have been nominated.</span></li>
								</ul>
								<p className="provincial_sec_para_2 mb_30">OR</p>
								<ul className="provincial_ul mb_30">
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">You create an Express Entry profile and show the provinces and territories you’re interested in.</span></li>
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">If a province or territory sends a “notification of interest” to your account, you contact them directly.</span></li>
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">You apply to their Express Entry stream.</span></li>
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">If you’re nominated, the province or territory will send a nomination certificate to your account, and you accept it electronically.</span></li>
								</ul>

								<h2 className="provincial_sec_title">National Occupational Classification 2021</h2>
								<p className="provincial_sec_para_2 mb_10">On November 16, 2022, we’re switching to the 2021 version of the National Occupational Classification (NOC)</p>
								<p className="provincial_sec_para_2 mb_10">You must use NOC 2016 to submit your Express Entry application for permanent residence if you obtain an invitation to apply (ITA) before November 16, 2022.</p>
								<p className="provincial_sec_para_2 mb_20">In September, information will be made available regarding what to do if you acquire an ITA through the Express Entry procedure on or after November 16, 2022.</p>
								<p className="provincial_sec_para_2 mb_20">In both cases, you must</p>
								<ul className="provincial_ul mb_30">
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">Meet the eligibility requirements of the province or territory and</span></li>
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">If a province or territory sends a “notification of interest” to your account, you contact them directly.</span></li>
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">Submit an Express Entry profile and show that you meet the minimum criteria for Express Entry, including being eligible for one of the immigration programs it covers.</span></li>
									<li className="provincial_ul_li"><span className="provincial_sec_li_sty">If you are invited to apply, you submit an electronic application to IRCC.</span></li>
								</ul>
								<p className="provincial_sec_para_2 mb_50">How to apply through Express Entry</p>	


								<h2 className="provincial_sec_title">Choose a province or territory</h2>
								<p className="provincial_sec_para_2 mb_10">You must adhere to their website's requirements and get in touch with them directly if you want to be nominated by a province or territory</p>
									<div className="row">
										<div className="col-lg-6">
											<ul className="provincial_ul  mt_20 mb_30">
												<li className="provincial_ul_li"><span className="provincial_sec_li_sty"><Link to="https://www.alberta.ca/ainp.aspx" className="red">Alberta</Link></span></li>
												<li className="provincial_ul_li"><span className="provincial_sec_li_sty"><Link to="https://www.welcomebc.ca/Immigrate-to-B-C/B-C-Provincial-Nominee-Program" className="red">British Columbia</Link></span></li>
												<li className="provincial_ul_li"><span className="provincial_sec_li_sty"><Link to="http://www.immigratemanitoba.com/immigrate-to-manitoba/general-mpnp-policies/" className="red">Manitoba</Link></span></li>
												<li className="provincial_ul_li"><span className="provincial_sec_li_sty"><Link to="http://www.welcomenb.ca/content/wel-bien/en/immigrating/content/HowToImmigrate/NBProvincialNomineeProgram.html" className="red">New Brunswick</Link></span></li>
												<li className="provincial_ul_li"><span className="provincial_sec_li_sty"><Link to="https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/provincial-nominee-program/overview/" className="red">Newfoundland and Labrador</Link></span></li>
												<li className="provincial_ul_li"><span className="provincial_sec_li_sty"><Link to="http://www.immigratenwt.ca/" className="red">Northwest Territories</Link></span></li>
											</ul>
										</div>
										<div className="col-lg-6">
											<ul className="provincial_ul  mt_20 mb_30">
												<li className="provincial_ul_li"><span className="provincial_sec_li_sty"><Link to="https://novascotiaimmigration.com/move-here/" className="red">Nova Scotia</Link></span></li>
												<li className="provincial_ul_li"><span className="provincial_sec_li_sty"><Link to="http://www.ontario.ca/oinp" className="red">Ontario</Link></span></li>
												<li className="provincial_ul_li"><span className="provincial_sec_li_sty"><Link to="https://www.princeedwardisland.ca/en/topic/office-immigration" className="red">Prince Edward Island</Link></span></li>
												<li className="provincial_ul_li"><span className="provincial_sec_li_sty"><Link to="https://www.saskatchewan.ca/SINP" className="red">Saskatchewan</Link></span></li>
												<li className="provincial_ul_li"><span className="provincial_sec_li_sty"><Link to="https://yukon.ca/fr/doing-business/yukon-nominee-program" className="red">Yukon</Link></span></li>
											</ul>
										</div>
									</div>
								<p className="provincial_sec_para_2 mb_10">The standards differ by province and territory and are subject to sudden change.</p>
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

export default Provincial_Nominee_Program;