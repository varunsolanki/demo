import React from "react";
import "./../Assets/css/style.css";
import "./../Assets/css/bootstrap.css";
import "./../Assets/css/magnific-popup.css";
import "./../Assets/css/nice-select.css";
import "./../Assets/css/animate.min.css";
import Header from "./header.js";
import Footer from "./footer.js";
import { Img, Icons } from '../Utilities/Icons.js';

function Study_permit_overview(){
	return(
		<>
			<script src="../Assets/js/script.js"></script>
			<Header/>
			<div className="spo_section_1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="spo_section_head">Study Permit Overview</h2>
							<h5 className="spo_section_breadcrumb"><a>Home</a> / Study Permit Overview</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="spo_sec_1">
				<div className="container">
					<div className="spo_sec_box">
						<div className="row">
							<div className="col-lg-8">
								<h2 className="spo_sec_title_head">Study In Canada As An International Student</h2>
								<p className="spo_sec_para mb_20">Apply to study in Canada as an international student, renew your study visa, and learn about employment opportunities during or after your studies.</p>
								<h2 className="spo_sec_subtitle">Preparing to Apply</h2>
								<p className="spo_sec_para mb_20">Applying to schools in Canada as an international student The different kinds of schools, when to apply and other requirements</p>
								<h2 className="spo_sec_subtitle">Applying for a Study Permit</h2>
								
								<ul>
								  <li>
									<p className="about_team_card_name">Get A Study Permit</p>
									<p className="v_sec_para">Who can apply, how to submit your application, spoocessing times and what to expect when you get to Canada.</p>								
								  </li>
								  <li>
									<p className="about_team_card_name">Get A Study Permit Faster</p>
									<p className="v_sec_para">You can be qualified to receive your study permit more quickly if you are a legal resident of one or more countries.</p>								
								  </li>
								  <li>
									<p className="about_team_card_name">Study In Canada As A Minor Child</p>
									<p className="v_sec_para">What minor children need to go to school in Canada.</p>
								  </li>
								</ul>
								<h2 className="spo_sec_subtitle">Preparing to Study in Canada</h2>
								<p className="spo_sec_para mb_20">Where and what to study, how to apply for schools, and a list of Canadian-accepting institutions are all spoovided.</p>
								<h2 className="spo_sec_subtitle">Choosing a Program and School</h2>
								<p className="spo_sec_para mb_20">Each spoovince and territory in Canada is responsible for running its own educational system.</p>
								<h2 className="spo_sec_subtitle">Primary  and Secondary Schools</h2>
							    <p className="spo_sec_para mb_20">Primary and secondary schools are institutions that spoovide instruction to pupils up to the 12th grade level. In general, the terms "Primary" and "secondary" refer to classes 1 through 12.</p>
								<p className="spo_sec_para mb_20">International students are welcome to enroll in any Canadian elementary or secondary school. For minor children studying in Canada, there are particular regulations.</p>							    
								<h2 className="spo_sec_subtitle">Post-Secondary Schools</h2>
							    <p className="spo_sec_para mb_20">Post-secondary schools are:</p>
							    <ul>
									<li className="spo_sec_li_sty">Colleges</li>
									<li className="spo_sec_li_sty">Universities</li>
									<li className="spo_sec_li_sty">spoivate career colleges and</li>
									<li className="spo_sec_li_sty">Vocational and technical schools.</li>
								</ul>
								<p className="spo_sec_para mb_20">Each post-secondary school has its own set of rules on how to apply, including the level of English or French you need to be accepted.</p>
							    <p className="spo_sec_subtitle mb_20">Language Schools</p>
								<p className="spo_sec_para mb_20">Many schools in Canada teach English or French as a second language. There are many ways to study in French across Canada.</p>
							    <p className="spo_sec_subtitle mb_20">Designated Learning Institutions</p>
							    <p className="spo_sec_para mb_20">International student enrollment in schools is apspooved (or "designated" by spoovinces and territories). These establishments are referred to as designated learning institutes (DLI). If you need a study permit, your acceptance letter must be from a DLI. If it isn’t, we will refuse your application. All spoimary and secondary schools in Canada are DLIs.</p>
							    <p className="spo_sec_subtitle mb_20">How to Apply to a School, College or University</p>
							    <p className="spo_sec_para mb_20">Once you choose a school, college or university, you must apply to go there. Every school has different rules on how to apply.</p>
							    <p className="spo_sec_para mb_20">Make sure you apply at least:</p>
							    <ul>
									<li className="spo_sec_li_sty">Six months in advance if you want to study at a spoimary or secondary school.</li>
									<li className="spo_sec_li_sty">A year in advance for a post-secondary spoogram at a university, college, etc.</li>
								</ul>
							    <p className="spo_sec_para mb_20">Contact the school where you want to study to learn how to apply. They will give you the list of all the documents you need to send them. Your school will be able to tell you about:</p>
								<ul>
									<li className="spo_sec_li_sty">Tuition fees</li>
									<li className="spo_sec_li_sty">Health insurance</li>
									<li className="spo_sec_li_sty">Rent and how much it costs to live in Canada</li>
									<li className="spo_sec_li_sty">Language tests</li>								
								</ul>
								<p className="spo_sec_para mb_20">Apply online or by mail to the school or schools of your choosing. To submit them, adhere to their guidelines. You will receive an acceptance letter from the school if they decide to accept you as a student. This letter is required in order to apply for a study permit.</p>
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
			<div className="spo_sec_highlight">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="spo_sec_highlight_title">Ready to Start your Visa spoocess?</h2>
							<center><button className="spo_sec_highlight_btn">APPLY NOW</button></center>
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

export default Study_permit_overview;