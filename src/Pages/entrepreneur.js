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

function Entrepreneur(){
	return(
		<>
			<Header/>
			<div className="pr_section_1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="pr_section_head">Entrepreneur</h2>
							<h5 className="pr_section_breadcrumb"><a>Home</a> / Entrepreneur</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="pr_sec_1">
				<div className="container">
					<div className="pr_sec_box">
						<div className="row">
							<div className="col-lg-8">

								<h2 className="entrepreneur_sec_title mb_20">Entrepreneurs/Self-Employed Candidates Seeking To Operate A Business</h2>
								<p className="entrepreneur_sec_para mb_15">Entrepreneurs who are the only or majority owner of a seasonal Canadian firm or in situations where the owner of the Canadian business wants to retain a principal home outside of Canada may be eligible for an entrepreneurs/self-employed work permit.</p>
								<p className="entrepreneur_sec_para mb_15">In such cases the work permit could be exempt from the need for the Canadian government's labour market test, known as an "LMIA" or Labour Market Impact Assessment.</p>
								<p className="entrepreneur_sec_para mb_30">Immigration, Refugees and Citizenship Canada (IRCC) is reluctant to issue temporary work permits to business owners who plan to manage a permanent, year-round business in Canada on an indefinite basisPotential candidates may want to restructure their company in Canada in order to qualify for a different kind of work permit, or they may want to apply for permanent residence status through one of Canada's business immigration programs.</p>
								
								<h2 className="entrepreneur_sec_title mb_20">Owner Operator Work Permit</h2>
								<p className="entrepreneur_sec_para mb_15">With a variety of federal and provincial immigration schemes for qualified workers, Canada has a strong and effective immigration system. And it's a Foreign Entrepreneur Owner-Operator Work Permit. However, there aren't many federal initiatives available to international investors and entrepreneurs looking to launch a new company or purchase an existing one in Canada.</p>
								<p className="entrepreneur_sec_para mb_15">The government program for immigrants who are self-employed is a specialized one that caters primarily to athletics and cultural entertainers. It is a requirement of the Federal Start-up Visa program that the entrepreneur cooperate and engage with specified organizations.</p>

								<h2 className="entrepreneur_sec_title mb_20">About The Owner-Operator Work Permit</h2>
								<p className="entrepreneur_sec_para mb_15">The government program for immigrants who are self-employed is a specialized one that caters primarily to athletics and cultural entertainers. It is a requirement of the Federal Start-up Visa program that the entrepreneur cooperate and engage with specified organizations.</p>

								<ul className="mb_30">
									<li className="entrepreneur_ul_li"><span className="entrepreneur_sec_li_sty">Buy an existing Canadian business or setup up a new business in Canada</span></li>
									<li className="entrepreneur_ul_li"><span className="entrepreneur_sec_li_sty">Create a job position for yourself as an employee of the business and apply for the Owner-Operator work permit</span></li>
									<li className="entrepreneur_ul_li"><span className="entrepreneur_sec_li_sty">Get a work permit and start working for your own business as its employee</span></li>
									<li className="entrepreneur_ul_li"><span className="entrepreneur_sec_li_sty">Apply through Express Entry and become a permanent resident of Canada</span></li>
								</ul>

								<h2 className="entrepreneur_sec_title mb_20">Qualifying As An Owner-Operator</h2>
								<p className="entrepreneur_sec_para mb_20">Some foreigners who are interested in investing in a business in Canada are not eligible to become owner-operators. You must meet crucial conditions relating to business control and benefit to Canada through job creation or skill transfer in order to qualify as an owner/operator.</p>
							
								<h2 className="entrepreneur_sec_title mb_20">Business Control</h2>
								<p className="entrepreneur_sec_para mb_15">You must own a majority share of the company you want to run as an owner-operator. If the firm is a partnership or company, this means that you must either be the single owner or hold the majority of the equity.</p>
								<p className="entrepreneur_sec_para mb_20">Whether you have the ability to be fired from your position inside the company is the simplest sign of business control. This will clearly not be achievable if you run the company.</p>
								
								<h2 className="entrepreneur_sec_title mb_20">Benefit To Canada—Job Creation Or Skill Transfer</h2>
								<p className="entrepreneur_sec_para mb_20">You are not automatically considered an owner-operator if you just purchase a business and hire yourself as an employee. Whether your presence in Canada and involvement in the firm will result in the transfer of skills or knowledge to Canadians or the creation or retention of jobs for Canadians is a crucial factor.</p>
								
								<h2 className="entrepreneur_sec_title mb_20">Active Participation In Management Of The Business</h2>
								<p className="entrepreneur_sec_para mb_15">The owner-operator work permit differs from a passive investment immigration program because the applicant must actively participate in the management of the business.</p>
								<p className="entrepreneur_sec_para mb_15">You must have a strong business experience and have a good track record of creating and sustaining successful businesses. You must create a detailed business plan for the business and must play a key role in executing it in Canada.</p>
								<p className="entrepreneur_sec_para mb_20">Authorities will also review your company plan to determine its feasibility, confirm your business acumen, and determine the level of control you have over the enterprise to determine if you meet the criteria for actively operating the enterprise.</p>


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

export default Entrepreneur;