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

function ICT(){
	return(
		<>
			<Header/>
			<div className="pr_section_1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="pr_section_head">ICT</h2>
							<h5 className="pr_section_breadcrumb"><a>Home</a> / ICT</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="pr_sec_1">
				<div className="container">
					<div className="pr_sec_box">
						<div className="row">
							<div className="col-lg-8">

								<h2 className="ict_sec_title_head mb_30">Intra Company Transfer (ICT)</h2>
								<p className="ict_sec_para mb_30">High-skilled foreign employees can temporarily work in Canada via a scheme known as the International Mobility Program, or ICT Canada, which permits them to be Intra-Company Transferees. If a foreign corporation has a location in Canada, it may request the transfer of any of its workers to the Canadian office. Since this is a work permit that is exempt from the LMIA, both the employer and the employee can avoid applying for one by requesting an intra-company transfer visa. Work permits are necessary for qualified intra-company transfers, however they are excluded from the LMIA (LMIA). By imparting their knowledge to Canadian companies, they provide substantial economic advantages for Canada.</p>

								<h2 className="ict_sec_title mb_20">Requirements for International Mobility Program: Intra Company Transfer (ICT)</h2>
								<p className="ict_sec_para mt_15 mb_15">To qualify for a work permit, the overseas business and employee must fulfill a number of standards.</p>
								<h2 className="ict_sec_title mb_20">General Requirements</h2>
								<p className="ict_sec_para mt_15 mb_15">The following are the General Requirements to qualify for an Intra Company Transfer:</p>
								<ul className="ict_ul mb_30">
									<li className="ict_ul_li"><span className="ict_sec_li_sty">You are currently employed by an international company and seeking entry to Canada in a parent, subsidiary, branch, or an affiliate of that company.</span></li>
									<li className="ict_ul_li"><span className="ict_sec_li_sty">You are transferring to a company that has a qualifying relationship (see below) and will be undertaking employment at a legitimate and continuing establishment of that company.</span></li>
									<li className="ict_ul_li"><span className="ict_sec_li_sty">You are being transferred to a position in an executive, senior managerial, or specialized knowledge capacity.</span></li>
									<li className="ict_ul_li"><span className="ict_sec_li_sty">You have been employed by the organization that intends to transfer them outside of Canada consistently (proven by payroll or another form) in a comparable full-time capacity for at least one year in the three years immediately before the date of first application.</span></li>
									<li className="ict_ul_li"><span className="ict_sec_li_sty">You are coming to Canada for a temporary period only.</span></li>
									<li className="ict_ul_li"><span className="ict_sec_li_sty">You comply with all the immigration requirements for temporary entry</span></li>
								</ul>


								<h2 className="ict_sec_title mb_20">Requirements for International Mobility Program: Intra Company Transfer (ICT)</h2>
								<ul className="ict_ul mb_30">
									<li className="ict_ul_li"><span className="ict_sec_li_sty">Generally, the company must secure physical premises to house the Canadian operation, particularly in the case of specialized knowledge. However, in specific cases involving senior managers or executives, it would be acceptable that the address of the new start-up not yet be secured; for example, the company may use its counsel’s address until the executive can purchase or lease a premise.</span></li>
									<li className="ict_ul_li"><span className="ict_sec_li_sty">The company must furnish realistic plans to staff the new operation.</span></li>
									<li className="ict_ul_li"><span className="ict_sec_li_sty">The company must have the financial ability to commence business in Canada and compensate employees.</span></li>
									<li className="ict_ul_li"><span className="ict_sec_li_sty">When transferring executives or managers, the company must</span></li>
									<li className="ict_ul_li"><span className="ict_sec_li_sty">Demonstrate that it will be large enough to support executive or management functions.</span></li>
									<li className="ict_ul_li"><span className="ict_sec_li_sty">When transferring a specialized knowledge worker, the company must</span></li>
									<li className="ict_ul_li"><span className="ict_sec_li_sty">Demonstrate that it is expected to be doing business.</span></li>
									<li className="ict_ul_li"><span className="ict_sec_li_sty">Ensure that work is guided and directed by management at the Canadian operation.</span></li>
								</ul>


								<h2 className="ict_sec_title mb_20">Required Documents for ICT Canada</h2>
								<p className="ict_sec_para mt_15 mb_15">The following documentation is required:</p>
								<ul className="ict_ul mb_30">
									<li className="ict_ul_li"><span className="ict_sec_li_sty">Confirmation that the foreign national is currently employed by a multinational enterprise outside Canada, and seeking entry to work in a parent, subsidiary, branch, or affiliate of that enterprise in Canada.</span></li>
									<li className="ict_ul_li"><span className="ict_sec_li_sty">Confirmation that the foreign national has been employed (via payroll or by contract) continuously (full-time, not accumulated part-time) by the enterprise outside Canada, in a similar full-time position, for at least one year within the three-year period immediately preceding the date of initial application.</span></li>
									<li className="ict_ul_li"><span className="ict_sec_li_sty">Outline of the applicant’s position in an executive or managerial capacity or one involving specialized knowledge (i.e., position, title, place in the organization, job description).</span></li>
									<li className="ict_ul_li"><span className="ict_sec_li_sty">In the case of “specialized knowledge”, evidence that the person has such knowledge and that the position in Canada requires such knowledge.</span></li>
									<li className="ict_ul_li"><span className="ict_sec_li_sty">Outline of the position in Canada (namely, position, title, place in the organization, job description) and indication of intended duration of stay; description of the relationship between the enterprise in Canada and the enterprise in the foreign country.</span></li>
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

export default ICT;