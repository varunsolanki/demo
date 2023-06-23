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

function Atlantic_Immigration_Program(){
	return(
		<>
			<Header/>
			<div className="pr_section_1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="pr_section_head">Atlantic Immigration Program</h2>
							<h5 className="pr_section_breadcrumb"><a>Home</a> / Atlantic Immigration Program</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="pr_sec_1">
				<div className="container">
					<div className="pr_sec_box">
						<div className="row">
							<div className="col-lg-8">
								<p className="atlantic_sec_para mb_20">In order to work and live in one of Canada's four Atlantic provinces—New Brunswick, Nova Scotia, Prince Edward Island, or Newfoundland and Labrador—skilled foreign workers and international graduates from Canadian institutions may apply for permanent residence through the Atlantic Immigration Program.</p>

								<h2 className="atlantic_sec_subtitle mb_10">Employer gets designated</h2>
								<p className="atlantic_sec_para_2 mb_30">To make a job offer to hire a candidate, employer must first become designated by the provincial government of the Atlantic province where the candidate will be working.</p>
								
								<h2 className="atlantic_sec_subtitle mb_10">Find a candidate</h2>
								<p className="atlantic_sec_para_2 mb_30">TInterview qualified candidate you can hire</p>
								
								<h2 className="atlantic_sec_subtitle mb_10">Meet the requirements</h2>
								<p className="atlantic_sec_para_2 mb_30">Make sure job offer and candidate meet the program requirements</p>
								
								<h2 className="atlantic_sec_subtitle mb_10">Make a job offer</h2>
								<p className="atlantic_sec_para_2 mb_30">To hire a skilled foreign worker or international graduate</p>
								
								<h2 className="atlantic_sec_subtitle mb_10">Submit an endorsement</h2>
								<p className="atlantic_sec_para_2 mb_30">Obtain the province's approval of the employment offer made to your candidate.</p>
								
								<h2 className="atlantic_sec_subtitle mb_10">Endorsement Letter and Temporary work permit</h2>
								<p className="atlantic_sec_para_2 mb_30">Request a referral letter for your candidate’s work permit with the endorsement letter</p>
								
								<h2 className="atlantic_sec_subtitle mb_10">Apply for temporary work permit and permanent residence</h2>
								<p className="atlantic_sec_para_2 mb_40">Collect the documents required to submit applications for a permanent residency and a temporary work permit.</p>
								

								<h2 className="atlantic_sec_subtitle">Job offer requirements</h2>
								<p className="atlantic_sec_para_2 mb_20 mt_20">As an employer, you must ensure that the job you’re offering is</p>

								<ul className="atlantic_ul mb_30">
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">Full time</span></li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">Non-seasonal</span></li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">At least 1 year in duration (1 year from the time the candidate becomes a permanent resident) if you’re offering a NOC 0, A, or B level job</span></li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">A permanent position if you’re offering a NOC C level job</span></li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">Unless they are an international student who has graduated from an accredited post-secondary school in Atlantic Canada, they must possess skills that are at least comparable as the job experience that qualifies them for the position (see the table below).
</span></li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">You are also not required to have a job offer that is at the same skill level as or higher than the required work experience for several careers in the health care industry.
</span></li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">Work experience in NOC 3233 (practical nurses) and NOC 3012 (registered nurses) can be used as qualifying work experience if you have a job offer in NOC 3413 (nurse aides, orderlies and patient service associates) or NOC 4412 (home health care workers).
</span></li>
								</ul>


								<h2 className="atlantic_sec_subtitle">NOC level job offer and qualifying work experience requirement
</h2>
								<div className="table-responsive">
									  <table className="table table-bordered mb-0" id="tbl_country">
									    <tbody>
									      <tr>
									        <th>NOC level job offer</th>
									        <th>Work experience requirement</th>
									      </tr>
									<tr>
									        <td>NOC 0</td>
									        <td>NOC 0, A, B, C</td>
									      </tr>
									<tr>
									        <td>NOC A</td>
									        <td>NOC A, B, C</td>
									      </tr>
									<tr>
									        <td>NOC B</td>
									        <td>NOC B, C</td>
									      </tr>
									<tr>
									        <td>NOC C</td>
									        <td>NOC C</td>
									      </tr>
									    </tbody> 
									</table>	
								</div>

								<h2 className="atlantic_sec_title mb_25">Candidate Requirements</h2>
								<h2 className="atlantic_sec_subtitle">Work experience</h2>

								<p className="atlantic_sec_para_2 mb_10">You must have worked a minimum of 1,560 hours during the previous five years. If you worked 30 hours each week for a year, you would have put in this amount of time.</p>
								<p className="atlantic_sec_para_2 mb_10">The National Occupational Classification (NOC) skill level for this activity should be one of these.</p>
								<ul className="atlantic_ul mb_10">
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">NOC Skill Type 0 (management jobs such as restaurant managers, line managers)</span></li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">NOC Skill Level A (professional jobs that usually need a degree from a university, such as doctors, dentists, architects)</span></li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">NOC Skill Level B (technical jobs and skilled trades such as chefs, electricians, plumbers)</span></li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">NOC Skill Level C (intermediate jobs that usually call for high school and/or job-specific training, such as industrial butchers, long-haul truck drivers, food and beverage servers)</span></li>
								</ul>
								<p className="atlantic_sec_para_2 mb_10">Your work experience must include</p>

								<ul className="atlantic_ul mb_30">
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">The actions in the description of your NOC</span></li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">Most of the main duties of your NOC</span></li>
								</ul>


								<h2 className="atlantic_sec_subtitle">International graduates</h2>
								<p className="atlantic_sec_para_2  mt_15 mb_15">You do not need to meet the work experience requirements if you’re an international graduate who</p>

								<ul className="atlantic_ul mb_30">
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">Has a degree, diploma, certificate, or trade or apprenticeship certification that</span>
										<ul className="atlantic_ul mt_10">
											<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">Took at least 2 years of studies</span></li>
											<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">Is from a recognized post-secondary institution in 1 of the 4 Atlantic provinces (New Brunswick, Nova Scotia, Prince Edward Island, or Newfoundland and Labrador)</span></li>
										</ul>
									</li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">Was a full-time student for the entire time you were studying</span></li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">Lived in one of the following provinces for at least 16 months during the last 2 years before you graduated</span>
										<ul className="atlantic_ul mt_10">
											<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">New Brunswick</span></li>
											<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">Nova Scotia</span></li>
											<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">Newfoundland and Labrador or</span></li>
											<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">Prince Edward Island</span></li>
										</ul>
									</li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">Had the visa or permit you needed to work, study or get training while you were in Canada</span></li>
								</ul>


								<h2 className="atlantic_sec_subtitle">Educational requirements</h2>
								<p className="atlantic_sec_para_2  mt_15 mb_15">You must have one of these:</p>

								<ul className="atlantic_ul mb_30">
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">If you have a job offer at the NOC 0 or A skill type or level, you must have a Canadian one-year post-secondary educational credential or higher, or the equivalent outside Canada.</span></li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">You need to hold a Canadian high school diploma, or its equivalent outside of Canada, if you have a job offer at the NOC B or C skill level.</span></li>
								</ul>


								<h2 className="atlantic_sec_subtitle">Language requirements</h2>
								<p className="atlantic_sec_para_2 mt_15 mb_15">You must meet the minimum language requirements based on the NOC category that applies to your job offer. This can either be the</p>
								<p className="atlantic_sec_para_2 mb_15">The minimum language requirements for each NOC category are</p>

								<ul className="atlantic_ul mb_30">
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">CLB/NCLC 5 for NOC 0, A and B</span></li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">CLB/NCLC 4 for NOC C</span></li>
								</ul>

								<h2 className="atlantic_sec_subtitle">Settlement funds</h2>
								<p className="atlantic_sec_para_2 mb_10">When you reach Canada, you must have enough finances to sustain both you and your family.</p>


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

export default Atlantic_Immigration_Program;