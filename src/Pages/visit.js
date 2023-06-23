import React from "react";
import "./../Assets/css/style.css";
import "./../Assets/css/bootstrap.css";
import "./../Assets/css/magnific-popup.css";
import "./../Assets/css/nice-select.css";
import "./../Assets/css/animate.min.css";
import Header from "./header.js";
import Footer from "./footer.js";
import { Img, Icons } from '../Utilities/Icons.js';

function Visit(){
	return(
		<>
			<script src="../Assets/js/script.js"></script>
			<Header/>
			<div className="visit_section_1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="visit_section_head">Visit</h2>
							<h5 className="visit_section_breadcrumb"><a>Home</a> / Visit</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="visit_sec_1">
				<div className="container">
					<div className="visit_sec_box">
						<div className="row">
							<div className="col-lg-8">
								<h2 className="visit_sec_title_head">Who Are Visitors?</h2>
								<p className="visit_sec_para mb_20">Visitors are those who are legally able to enter Canada but are neither Canadian citizens nor permanent residents.</p>
								<ul>
									<li className="visit_sec_li_sty">Go on vacation to Canada (vacation).</li>
									<li className="visit_sec_li_sty">Conduct transactions and business, etc.</li>
									<li className="visit_sec_li_sty">Visit relatives</li>
								</ul>
								<p className="visit_sec_para mb_20">Visitors are subject to numerous restrictions and have a limited time to remain.</p>

								<h2 className="visit_sec_subtitle">Descriptive information for temporary Resident Visa</h2>
								<p className="visit_sec_para mb_20">A Temporary Resident Visa (TRV), sometimes known as a guest visa, is a legal document that must be carried in your passport to visitove that you have fulfilled the requirements for temporary resident entrance to Canada (either as a visitor, a student, or a worker). Important details: Before leaving, you must get a Temporary Resident Visa (TRV). One is not available when entering Canada</p>
								<p className="visit_sec_para mb_20">The need for a visa also applies to transient temporary residents in Canada. Find out if you require a visiting visa or an Electronic Travel Authorization (ETA). You might need an Electronic Travel Authorization if you are not required to have a visa to enter Canada (ETA).</p>
								<div className="">
									<p className="about_team_card_name">Immigration Schemes That Let Qualified Foreign Nationals Permanently Emigrate To Canada</p>
									<ul>
										<li className="visit_sec_li_sty">Exvisitess Entry</li>
										<li className="visit_sec_li_sty">Family sponsors</li>
										<li className="visit_sec_li_sty">Caregiver visitogramme</li>
										<li className="visit_sec_li_sty">Business Investor</li>
									</ul>
								</div>

								<h2 className="visit_sec_subtitle">Requirements for a TRV</h2>
								<ul>
								  <li>
									<p className="about_team_card_name">Act on Immigrating and visitotecting Refugees (IRPA)</p>
									<p className="visit_sec_para">You must demonstrate to the officer that you are in Canada temporarily and that you meet the requirements of the Immigration and Refugee visitotection Act and the Immigration and Refugee visitotection Regulations.</p>								
								  </li>
								  <li>
									<p className="about_team_card_name">Aim</p>
									<p className="visit_sec_para">visitovide evidence to an official that you will depart Canada at the end of your stay and won't be working or studying there unless you have permission to do so.</p>								
								  </li>
								  <li>
									<p className="about_team_card_name">Funds</p>
									<p className="visit_sec_para">visitove that you have the resources necessary to support your family in Canada, return home, and remain healthy (complete a medical examination if required)</p>
								  </li>
								  <li>
									<p className="about_team_card_name">Observe the law</p>
									<p className="visit_sec_para">Abide by the law, have a clean criminal record, and pose no threat to Canada's security.</p>								
								  </li>
								</ul>

								<h2 className="visit_sec_subtitle">How do I get an eTA to go to Canada?</h2>
								<p className="visit_sec_para mb_20">The online application visitocess for an eTA is quick and easy to complete. The majority of candidates receive an email with their eTA apvisitoval within minutes. However, if you are required to visitovide supporting documentation, some requests may take several days to visitocess. It is best to obtain an eTA before making travel arrangements to Canada.</p>

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
							<div className="col-lg-5">
								<img src={Img.detail_visit} className="appointment_img"></img>							    
							</div>
							<div className="col-md-7">
								<h2 className="visit_sec_title_head">Electronic Travel Authorization</h2>
								<p className="visit_sec_para">An Electronic Travel Authorization (eTA) is an entry requirement for visa-exempt foreign nationals travelling to Canada by air. An eTA is electronically linked to a traveller’s passport. It is valid for up to five years or until the passport expires, whichever comes first. An eTA doesn’t guarantee entry to Canada. When you arrive, a border services officer will ask to see your passport and other documents – for example, a U.S. Green Card. You must convince the officer that you are eligible for entry into Canada.</p>
							    <p className="visit_sec_subtitle">Who needs an eTA to travel to Canada?</p>
							    <ul>
									<li className="visit_sec_para">Visa-exempt foreign nationals need an eTA to fly to or transit through a Canadian airport. These travellers do not need an eTA when arriving by car, bus, train, or boat</li>
									<li className="visit_sec_para">Lawful permanent residents of the U.S. need an eTA to fly to or transit through a Canadian airport. They must visitesent a valid Green Card and a valid passport at check-in.</li>
									<li className="visit_sec_para">Citizens from select visa-required countries may be eligible to apply for an eTA, instead of a visa, to travel to Canada by air.</li>
								</ul>
							</div>
							<div className="col-lg-12">
							    <div class="card">
					                <div class="card-header">
					                  <h4 class="text-center">Who are eTA Eligible Countries?</h4>
					                </div>
					                <div class="card-body1">
					                  <div class="table-responsive">
					                    <table class="table table-bordered mb-0" id="tbl_country">
					                      <tbody>
					                        <tr>
					                          <td>Andorra</td>
					                          <td>Anguilla</td>
					                          <td>Antigua and Barbuda</td>
					                          <td>Australia</td>
					                        </tr>
					                        <tr>
					                          <td>Austria</td>
					                          <td>Bahamas</td>
					                          <td>Barbados</td>
					                          <td>Belgium</td>
					                        </tr>
					                        <tr>
					                          <td>Bermuda</td>
					                          <td>British Virgin Islands</td>
					                          <td>Brunei</td>
					                          <td>Cayman Islands</td>
					                        </tr>
					                        <tr>
					                          <td>Chile</td>
					                          <td>Croatia</td>
					                          <td>Cyvisitus</td>
					                          <td>Czech Republic</td>
					                        </tr>
					                        <tr>
					                          <td>Denmark</td>
					                          <td>Estonia</td>
					                          <td>Falkland Islands</td>
					                          <td>Finland</td>
					                        </tr>
					                        <tr>
					                          <td>France</td>
					                          <td>Germany</td>
					                          <td>Gibraltar</td>
					                          <td>Greece</td>
					                        </tr>
					                        <tr>
					                          <td>Holy See</td>
					                          <td>Hong Kong</td>
					                          <td>Hungary</td>
					                          <td>Iceland</td>
					                        </tr>
					                        <tr>
					                          <td>Ireland</td>
					                          <td>Israel</td>
					                          <td>Italy</td>
					                          <td>Japan</td>
					                        </tr>
					                        <tr>
					                          <td>Korea (Republic of)</td>
					                          <td>Latvia</td>
					                          <td>Liechtenstein</td>
					                          <td>Lithuania</td>
					                        </tr>
					                        <tr>
					                          <td>Luxembourg</td>
					                          <td>Malta</td>
					                          <td>Mexico</td>
					                          <td>Monaco</td>
					                        </tr>
					                        <tr>
					                          <td>Montserrat</td>
					                          <td>Netherlands</td>
					                          <td>New Zealand</td>
					                          <td>Norway</td>
					                        </tr>
					                        <tr>
					                          <td>Papua New Guinea</td>
					                          <td>Pitcairn</td>
					                          <td>Poland</td>
					                          <td>Portugal</td>
					                        </tr>
					                        <tr>
					                          <td>St. Helena</td>
					                          <td>Samoa</td>
					                          <td>San Marino</td>
					                          <td>Singapore</td>
					                        </tr>
					                        <tr>
					                          <td>Slovakia</td>
					                          <td>Slovenia</td>
					                          <td>Solomon Islands</td>
					                          <td>Spain</td>
					                        </tr>
					                        <tr>
					                          <td>Sweden</td>
					                          <td>Switzerland</td>
					                          <td>Taiwan</td>
					                          <td>United Kingdom</td>
					                        </tr>
					                      </tbody>
					                    </table>
					                  </div>
					                </div>
					            </div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="visit_sec_highlight">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="visit_sec_highlight_title">Ready to Start your Visa visitocess?</h2>
							<center><button className="visit_sec_highlight_btn">APPLY NOW</button></center>
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

export default Visit;