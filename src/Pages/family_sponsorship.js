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

function Family_Sponsorship(){
	return(
		<>
			<Header/>
			<div className="pr_section_1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="pr_section_head">Family Sponsorship</h2>
							<h5 className="pr_section_breadcrumb"><a>Home</a> / Family Sponsorship</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="pr_sec_1">
				<div className="container">
					<div className="pr_sec_box">
						<div className="row">
							<div className="col-lg-8">
								<p className="family_sec_para mb_20">If your relatives become citizens of Canada, they are eligible to live, study, and work there. If you are at least 18 years old and a Canadian citizen, you may sponsor certain relatives to immigrate to Canada:</p>
								<ul className="family_ul mb_30">
									<li className="family_ul_li"><span className="family_sec_li_sty">Canadian citizen or</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">Person registered in Canada as an Indian under the Canadian Indian Act or</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">Permanent resident of Canada</span></li>
								</ul>

								<h2 className="family_sec_subtitle mb_20">Services and information</h2>

								<p className="family_sec_para_2 mb_10">Sponsor your spouse, partner or dependent children</p>
								<p className="family_sec_para_2 mb_10">Sponsor your parents and grandparents</p>
								<p className="family_sec_para_2 mb_10">Sponsor your relatives</p>
								<p className="family_sec_para_2 mb_30">Visit your children or grandchildren</p>
								
								<h2 className="family_sec_subtitle">Sponsor their spouse, partner or child</h2>
								<p className="family_sec_para_2 mb_20 mt_20">You can sponsor your spouse, partner or dependent child if:</p>
								<ul className="family_ul mb_10">
									<li className="family_ul_li"><span className="family_sec_li_sty">You’re at least 18 years old</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">You hold one of the following: Canadian citizenship, permanent residence, or Indian registration under the Canadian Indian Act.</span>
										<ul className="family_ul mt_10">
											<li className="family_ul_li"><span className="family_sec_li_sty">If you’re a Canadian citizen living outside Canada, you must show that you plan to live in Canada when the persons you want to sponsor become permanent residents.</span></li>
											<li className="family_ul_li"><span className="family_sec_li_sty">You can’t sponsor someone if you’re a permanent resident living outside Canada.</span></li>
										</ul>
									</li>
									<li className="family_ul_li"><span className="family_sec_li_sty">You’re able to prove that you’re not receiving social assistance for reasons other than a disability</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">You can provide for the basic needs of any persons you want to sponsor</span></li>
								</ul>
								<p className="family_sec_para_2 mb_10"><strong>If you live in Quebec</strong></p>
								<p className="family_sec_para_2 mb_10">After we approve you as a sponsor, you must satisfy Quebec's standards for immigration sponsorship. You are required to execute an agreement with the Quebec’s government.</p>
								<p className="family_sec_para_2 mb_40">Your income will be evaluated by the Quebec government in charge of immigration.</p>

								<h2 className="family_sec_subtitle">Sponsor a parent or grandparent</h2>
								<p className="family_sec_para_2 mb_20">You can sponsor your own parents and grandparents if</p>
								<ul className="family_ul mb_40">
									<li className="family_ul_li"><span className="family_sec_li_sty">You’re invited to apply</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">You’re at least 18 years old</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">You live in Canada</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">You’re a Canadian citizen, a permanent resident of Canada, or a person registered in Canada as an Indian under the Canadian Indian Act</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">You have enough money to support the people you want to sponsor</span>
										<ul className="family_ul mt_10">
											<li className="family_ul_li"><span className="family_sec_li_sty">To show that you have enough, you’ll have to provide your proof of income</span></li>
											<li className="family_ul_li"><span className="family_sec_li_sty">You may have a spouse or common-law partner co-sign to combine your incomes</span></li>
										</ul>
									</li>
									<li className="family_ul_li"><span className="family_sec_li_sty">You meet all other requirements under the Immigration and Refugee Protection Act and the Immigration and Refugee Protection Regulations</span></li>
								</ul>


								<h2 className="family_sec_subtitle">Income Requirements</h2>
								<p className="family_sec_para_2 mb_10"><strong>Income required for the 3 tax years right before the day you apply</strong></p>

								<table className="table table-bordered mb-0" id="tbl_country">
                      <tbody>
                        <tr>
                          <th>Total number of people you’ll be responsible for</th>
                          <th>2020</th>
                          <th>2019</th>
                          <th>2018</th>
                        </tr>
						<tr>
                          <th>2 people</th>
                          <td>$32,270</td>
                          <td>$41,007</td>
                          <td>$40,379</td>
                        </tr>
						<tr>
                          <th>3 people</th>
                          <td>$39,672</td>
                          <td>$50,414</td>
                          <td>$49,641</td>
                        </tr>
						<tr>
                          <th>4 people</th>
                          <td>$48,167</td>
                          <td>$61,209</td>
                          <td>$60,271</td>
                        </tr>
						<tr>
                          <th>5 people</th>
                          <td>$54,630</td>
                          <td>$69,423</td>
                          <td>$68,358</td>
                        </tr>
						<tr>
                          <th>6 people</th>
                          <td>$61,613</td>
                          <td>$78,296</td>
                          <td>$77,095</td>
                        </tr>
						<tr>
                          <th>7 people</th>
                          <td>$68,598</td>
                          <td>$87,172</td>
                          <td>$85,835</td>
                        </tr>
						<tr>
                          <th>If more than 7 people, for each additional person, add:</th>
                          <td>$6,985</td>
                          <td>$8,876</td>
                          <td>$8,740</td>
                        </tr>
                      </tbody> 
					</table>

								<h2 className="family_sec_subtitle">Sponsor your relatives:</h2>
								<p className="family_sec_para_2 mb_10">Only under extremely narrow circumstances may you sponsor a sibling, aunt, uncle, or other family member. You can use our Come to Canada tool to find out which programs your family member could be qualified for even if they don't match the requirements listed here.</p>
								<p className="family_sec_para_2 mb_10">There are two people you can choose to sponsor, depending on your circumstances.</p>
								<p className="family_sec_para_2 mb_10"><strong>Orphaned brother, sister, nephew, niece or grandchild</strong></p>
								<p className="family_sec_para_2 mb_10">Only if they satisfy all of these requirements may you support an orphaned sibling, sister, nephew, niece, or grandchild</p>
								<ul className="family_ul mb_30">
									<li className="family_ul_li"><span className="family_sec_li_sty">They’re related to you by blood or adoption</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">Both their mother and father passed away</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">They’re under 18 years of age</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">They’re single (not married or in a common-law or conjugal relationship)
You can’t sponsor your brother, sister, nephew, niece or grandchild if:</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">One of their parents is still alive</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">No one knows where their parents are</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">Their parents abandoned them</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">Someone else other than their parents is taking care of them while one or both their parents are alive</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">Their parent is in jail or otherwise detained</span></li>
								</ul>


								<h2 className="family_sec_subtitle">Other relative</h2>
								<p className="family_sec_para_2 mb_10">If you meet all of these requirements, you may sponsor one relative, whether by blood or adoption, regardless of age.</p>

								<ul className="family_ul mb_30">
									<li className="family_ul_li"><span className="family_sec_li_sty">You (the person who wants to sponsor your relative) don't have a living relative you could sponsor instead, such as a:</span>
										<ul className="family_ul mt_10">
											<li className="family_ul_li"><span className="family_sec_li_sty">Spouse</span></li>
											<li className="family_ul_li"><span className="family_sec_li_sty">Common-law partner</span></li>
											<li className="family_ul_li"><span className="family_sec_li_sty">Conjugal partner</span></li>
											<li className="family_ul_li"><span className="family_sec_li_sty">Son or daughter</span></li>
											<li className="family_ul_li"><span className="family_sec_li_sty">Parent</span></li>
											<li className="family_ul_li"><span className="family_sec_li_sty">Grandparent</span></li>
											<li className="family_ul_li"><span className="family_sec_li_sty">Orphaned brother or sister</span></li>
											<li className="family_ul_li"><span className="family_sec_li_sty">Orphaned nephew or niece</span></li>
											<li className="family_ul_li"><span className="family_sec_li_sty">Orphaned grandchild</span></li>
										</ul>
									</li>
									<li className="family_ul_li"><span className="family_sec_li_sty">You (the potential sponsor) don’t have any relatives (aunt or uncle or any of the relatives listed above), who is a:</span>
										<ul className="family_ul mt_10">
											<li className="family_ul_li"><span className="family_sec_li_sty">Canadian citizen</span></li>
											<li className="family_ul_li"><span className="family_sec_li_sty">Permanent resident</span></li>
											<li className="family_ul_li"><span className="family_sec_li_sty">Registered Indian under the Indian Act</span></li>
										</ul>
									</li>
								</ul>
								<p className="family_sec_para_2 mb_10">You must include any dependant children or spouses who will be traveling to Canada with the relative you want to sponsor on the same sponsorship application.</p>

								<h2 className="family_sec_subtitle">Super visa</h2>
								<p className="family_sec_para_2 mb_10">With a supervisa, you can spend up to five years at a period visiting your kids or grandkids. Multiple admissions are permitted for up to ten years with this visa. A border services agent will verify your stay limit when you enter Canada.</p>
								<p className="family_sec_para_2 mb_10">The necessity for medical insurance is one of the particular prerequisites for a super visa.</p>
								<p className="family_sec_para_2 mb_10"><strong>Eligibility</strong></p>
								<p className="family_sec_para_2 mb_10">To be eligible for a super visa, you must:</p>

								<ul className="family_ul mb_30">
									<li className="family_ul_li"><span className="family_sec_li_sty">Be the parent or grandparent of a Canadian citizen or a permanent resident of Canada</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">Have a signed letter from your child or grandchild who invites you to Canada that includes:</span>
										<ul className="family_ul mt_10">
											<li className="family_ul_li"><span className="family_sec_li_sty">A promise of financial support for the length of your visit</span></li>
											<li className="family_ul_li"><span className="family_sec_li_sty">The list and number of people in the household of this person</span></li>
											<li className="family_ul_li"><span className="family_sec_li_sty">A copy of this person’s Canadian citizenship or permanent resident document</span></li>
										</ul>
									</li>
									<li className="family_ul_li"><span className="family_sec_li_sty">Have medical insurance from a Canadian insurance company that is:</span>
										<ul className="family_ul mt_10">
											<li className="family_ul_li"><span className="family_sec_li_sty">Valid for at least 1 year from the date of entry</span></li>
											<li className="family_ul_li"><span className="family_sec_li_sty">At least $100,000 emergency coverage</span></li>
											<li className="family_ul_li"><span className="family_sec_li_sty">Have proof that the medical insurance has been paid in full(quotes aren’t accepted)</span></li>
										</ul>
									</li>
								</ul>

								<p className="family_sec_para_2 mb_10">You must also:</p>
								<ul className="family_ul mb_10">
									<li className="family_ul_li"><span className="family_sec_li_sty">Apply for a super visa from outside Canada</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">Have your visa printed outside Canada (wait for visa office instructions)</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">Be allowed to enter Canada</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">Take an immigration medical exam</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">Meet certain other conditions</span></li>
								</ul>
								<p className="family_sec_para_2 mb_30">You <strong>can’t include dependents</strong> in this application.</p>



								<h2 className="family_sec_title mb_50">Financial support (proof of funds)</h2>
								<center><h2 className="family_sec_subtitle mb_20">Low Income Cut-Off (LICO)</h2></center>
								<table className="table table-bordered mb-0" id="tbl_country">
								  <tbody>
									<tr>
									   <th>Size of Family Unit</th>
									   <th>Minimum necessary gross Size of Family Unit income</th>
									</tr>
									<tr>
									   <td>1 person (your child or grandchild)</td>
									   <td>$26,620</td>
									</tr>
									<tr>
									   <td>2 persons</td>
									   <td>$33,140</td>
									</tr>
									<tr>
									   <td>3 persons</td>
									   <td>$40,742</td>
									</tr>
									<tr>
									   <td>4 persons</td>
									   <td>$49,466</td>
									</tr>
									<tr>
									   <td>5 persons</td>
									   <td>$56,104</td>
									</tr>
									<tr>
									   <td>6 persons</td>
									   <td>$63,276</td>
									</tr>
									<tr>
									   <td>7 persons</td>
									   <td>$70,448</td>
									</tr>
									<tr>
									   <td>More than 7 persons, for each additional person, add</td>
									   <td>$7,172</td>
									</tr>
								  </tbody> 
								</table>

								<h2 className="family_sec_subtitle mb_20">Other conditions we consider</h2>
								<p className="family_sec_para_2 mb_20">Before deciding whether you can travel to Canada, we take a number of factors into account. You must be an actual foreign visitor to Canada who will voluntarily depart at the conclusion of your stay.</p>
								<p className="family_sec_para_2 mb_20">When you apply, we'll consider the following:</p>
								<ul className="family_ul mb_30">
									<li className="family_ul_li"><span className="family_sec_li_sty">Your ties to your home country</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">The purpose of your visit</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">Your family and finances</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">The overall economic and political stability of your home country</span></li>
									<li className="family_ul_li"><span className="family_sec_li_sty">Meet certain other conditions</span></li>
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

export default Family_Sponsorship;