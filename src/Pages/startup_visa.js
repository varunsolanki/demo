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

function Startup_Visa(){
	return(
		<>
			<Header/>
			<div className="pr_section_1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="pr_section_head">Startup Visa</h2>
							<h5 className="pr_section_breadcrumb"><a>Home</a> / Startup Visa</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="pr_sec_1">
				<div className="container">
					<div className="pr_sec_box">
						<div className="row">
							<div className="col-lg-8">

								<h2 className="entrepreneur_sec_title_head mb_30">Start Up Visa</h2>
								<h2 className="entrepreneur_sec_title mb_20">Eligibility</h2>
								<p className="entrepreneur_sec_para mb_15">To be eligible for the Start-up Visa Program, you must:</p>
								<ul className="mb_30">
									<li className="entrepreneur_ul_li"><span className="entrepreneur_sec_li_sty">Have a qualifying business</span></li>
									<li className="entrepreneur_ul_li"><span className="entrepreneur_sec_li_sty">Get a letter of support from a designated organization</span></li>
									<li className="entrepreneur_ul_li"><span className="entrepreneur_sec_li_sty">Meet the language requirements</span></li>
									<li className="entrepreneur_ul_li"><span className="entrepreneur_sec_li_sty">Bring enough money to settle</span></li>
								</ul>

								<h2 className="entrepreneur_sec_title mb_20">Have a Qualifying Business</h2>
								<p className="entrepreneur_sec_para mb_15">You have an compotent business if it satisfies the criteria listed below:</p>
								
								<ul className="atlantic_ul mb_30">
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">At the time you get a commitment from a designated organization:</span>
										<ul className="atlantic_ul mt_10">
											<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">Each applicant holds 10% or more of the voting rights attached to all shares of the corporation outstanding at that time (up to 5 people can apply as owners)
											<br/>AND<br/>- At that time, applicants and the designated organization collectively held more than 50% of the total voting rights connected to all outstanding shares of the corporation.<br/>- At the time you receive your permanent residence.
											</span></li>
										</ul>
									</li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">You provide active and ongoing management of this business from within Canada</span></li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">An essential part of the operations of the business happens in Canada</span></li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">This business is incorporated in Canada</span></li>
								</ul>

								<h2 className="entrepreneur_sec_title mb_20">Get a Letter of Support from a Designated Organization</h2>
								<p className="entrepreneur_sec_para mb_15">You must get a letter of support from a designated organization (a business group that has been approved to invest in or support possible start-ups).</p>
								<p className="entrepreneur_sec_para mt_15 mb_15">You’ll need to:</p>						
								<ul className="atlantic_ul mb_30">
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">Contact the designated organization to find out how to get its support</span></li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">Convince the organization that you have a business idea that is worth supporting</span></li>
									<li className="atlantic_ul_li"><span className="atlantic_sec_li_sty">Get a letter of support from the designated organization</span></li>
								</ul>

								<h2 className="entrepreneur_sec_title mb_20">List of Designated Organizations – Start Up Visa</h2>
								<p className="entrepreneur_sec_para mb_20">Your company's venture must get support from one or more of the professional institutions mentioned below in order to be eligible for the Start-up Visa Program</p>
								<ul className="express_ul mb_30">
									<li className="express_ul_li"><span className="express_sec_li_sty_title">VENTURE CAPITAL FUNDS</span><br/><span className="express_sec_li_sty">You must get at least one of these groups to agree to invest a minimum of $200,000</span></li>
									<li className="express_ul_li"><span className="express_sec_li_sty_title">ANGEL INVESTOR GROUPS</span><br/><span className="express_sec_li_sty">You must persuade one or more investors who are associated with these organisations to put down a minimum investment of $75,000</span></li>
									<li className="express_ul_li"><span className="express_sec_li_sty_title">BUSINESS INCUBATORS</span><br/><span className="express_sec_li_sty">You must be accepted into one of their programs</span></li>
									<li className="express_ul_li"><span className="express_sec_li_sty_title">MEET THE LANGUAGE REQUIREMENTS</span><br/><span className="express_sec_li_sty">You must meet the minimum level of the Canadian Language Benchmark (CLB) 5 in either English or French in all of these four areas</span></li>
								</ul>

								<h2 className="entrepreneur_sec_title mb_20">Bring Enough Money to Settle</h2>
								<table class="table table-bordered text-center mt-10">
                    <thead>
                      <tr>
                        <th>Number of family members</th>
                        <th>Funds required (in Canadian dollars)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>$13,310</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>$16,570</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>$20,371</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>$24,733</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>$28,052</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>$31,638</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>$35,224</td>
                      </tr>
                      <tr>
                        <td>For each additional family member</td>
                        <td>$3,586</td>
                      </tr>
                    </tbody>
                  </table>
								

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

export default Startup_Visa;