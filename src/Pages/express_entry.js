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

function Express_Entry(){
	return(
		<>
			<Header/>
			<div className="pr_section_1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="pr_section_head">Express Entry</h2>
							<h5 className="pr_section_breadcrumb"><a>Home</a> / Express Entry</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="pr_sec_1">
				<div className="container">
					<div className="pr_sec_box">
						<div className="row">
							<div className="col-lg-8">
								<h2 className="express_sec_title">Immigrate through Express Entry</h2>
								<p className="express_sec_para mb_20">A process for submitting an application for skilled immigrants who desire to live permanently in Canada and contribute to its economy</p>
								<h2 className="express_sec_title">The Express Entry process is divided into four broader steps.</h2>		
								<ul className="express_ul mb_30">
									<li className="express_ul_li"><span className="express_sec_li_sty_title">Create an online Express Entry profile</span><br/><span className="express_sec_li_sty">Creating a profile enables Canadian government to access if the candidate applying is eligible or not.</span></li>
									<li className="express_ul_li"><span className="express_sec_li_sty_title">Submit it to express entry candidate pool</span><br/><span className="express_sec_li_sty">Once eligibility is proved then the profile is moved to world candidate pool.</span></li>
									<li className="express_ul_li"><span className="express_sec_li_sty_title">Receive invitation to apply (ITA) </span><br/><span className="express_sec_li_sty">Candidates who receive an invitation to apply also receives a message from CIC indicating which program they should apply under for permanent residence</span></li>
									<li className="express_ul_li"><span className="express_sec_li_sty_title">Application for Permanent Residence</span><br/><span className="express_sec_li_sty">After receiving an ITA, Applicant needs to submit an application for permanent residency, the acceptance or rejection of the application depends upon how well the candidate meets the criteria of selection.</span></li>
								</ul>
								<h2 className="express_sec_title ">Services and information</h2>
								<h3 className="express_sec_subtitle mt_20">How Express Entry works</h3>
								<p className="express_sec_para_2 mb_30">Application procedures and requirements for each program, including past employment, education, and language proficiency</p>
								<h3 className="express_sec_subtitle mt_20">Get the documents you need</h3>
								<p className="express_sec_para_2 mb_30">Results of language tests, evaluations of education, employment offers, police clearance certificates, medical tests, and evidence of finances</p>
								<h3 className="express_sec_subtitle mt_20">Submit your Express Entry profile</h3>
								<p className="express_sec_para_2 mb_30">Create your profile, be patient while waiting in the pool, and lastly get invitation to apply</p>
								<h3 className="express_sec_subtitle mt_20">Apply for permanent residence if you are invited</h3>
								<p className="express_sec_para_2 mb_30">Fill out the form, upload documents, pay fees and submit your application</p>
								<h3 className="express_sec_subtitle mt_20">If your application is approved</h3>
								<p className="express_sec_para_2 mb_30">Interviews both within and outside of Canada are taken, border crossing, and settle to Canada</p>
								<h3 className="express_sec_subtitle mt_20">How Express Entry works</h3>
								<p className="express_sec_para_2 mb_30">We manage skilled worker immigration applications using Express Entry, which is an online system. There are 3 immigration programs managed through Express Entry:</p>
								<h5 className="express_sec_smalltitle">Canadian Experience Class</h5>
								<ul className="express_ul_li mt_20">
									<li className="express_sec_smalltitle_li">For skilled workers who have <strong>Canadian work experience</strong></li>
									<li className="express_sec_smalltitle_li">Work experience must have been gained in the 3 years before you apply</li>
								</ul>
								<h5 className="express_sec_smalltitle">Federal Skilled Worker Program</h5>
								<ul className="express_ul_li mt_20">
									<li className="express_sec_smalltitle_li">For skilled workers with foreign work experience</li>
									<li className="express_sec_smalltitle_li">Must meet criteria for education and other factors</li>
								</ul>								
								<h5 className="express_sec_smalltitle">Federal Skilled Trades Program</h5>
								<ul className="express_ul_li mt_20">
									<li className="express_sec_smalltitle_li">For skilled workers who are <strong>qualified in a skilled trade</strong></li>
									<li className="express_sec_smalltitle_li">Must have a valid job offer or a certificate of qualification</li>
								</ul>
								<p className="express_sec_para_2">You can apply for the Provincial Nominee Program through Express Entry if you qualify for one of the aforementioned programs. If you are nominated, you will receive bonus points and an invitation to apply right away.</p>
								<div className="table-responsive">
								  <table className="table table-bordered mb-0" id="tbl_country">
								    <tbody>
								      <tr>
								        <th>Eligibility criteria</th>
								        <th>Canadian Experience Class</th>
								        <th>Federal Skilled Worker Program</th>
								        <th>Federal Skilled Trades Program</th>
								      </tr>
								      <tr>
								        <th>Language skills</th>
								        <td>
								          English or French skills
								          <ul className="ttm-list ttm-list-style-icon">
								            <li><i className="fa fa-arrow-circle-right ttm-textcolor-skincolor"></i><span className="ttm-list-li-content">CLB 7 if your NOC is 0 or A</span></li>
								            <li><i className="fa fa-arrow-circle-right ttm-textcolor-skincolor"></i><span className="ttm-list-li-content">CLB 5 if your NOC is B</span></li>
								          </ul>
								        </td>
								        <td>
								          English or French skills
								          <ul className="ttm-list ttm-list-style-icon">
								            <li><i className="fa fa-arrow-circle-right ttm-textcolor-skincolor"></i><span className="ttm-list-li-content">CLB 7</span></li>
								          </ul>
								        </td>
								        <td>
								          English or French skills
								          <ul className="ttm-list ttm-list-style-icon">
								            <li><i className="fa fa-arrow-circle-right ttm-textcolor-skincolor"></i><span className="ttm-list-li-content">CLB 5 for speaking and listening</span></li>
								            <li><i className="fa fa-arrow-circle-right ttm-textcolor-skincolor"></i><span className="ttm-list-li-content">CLB 4 for reading and writing</span></li>
								          </ul>
								        </td>
								      </tr>
								      <tr>
								        <th>Type/Level of work experience</th>
								        <td>
								          Canadian experience in 1 of these NOCs:
								          <ul className="ttm-list ttm-list-style-icon">
								            <li><i className="fa fa-arrow-circle-right ttm-textcolor-skincolor"></i><span className="ttm-list-li-content">0</span></li>
								            <li><i className="fa fa-arrow-circle-right ttm-textcolor-skincolor"></i><span className="ttm-list-li-content">A</span></li>
								            <li><i className="fa fa-arrow-circle-right ttm-textcolor-skincolor"></i><span className="ttm-list-li-content">B</span></li>
								          </ul>
								        </td>
								        <td>
								          Canadian or foreign experience in 1 of these NOCs:
								          <ul className="ttm-list ttm-list-style-icon">
								            <li><i className="fa fa-arrow-circle-right ttm-textcolor-skincolor"></i><span className="ttm-list-li-content">0</span></li>
								            <li><i className="fa fa-arrow-circle-right ttm-textcolor-skincolor"></i><span className="ttm-list-li-content">A</span></li>
								            <li><i className="fa fa-arrow-circle-right ttm-textcolor-skincolor"></i><span className="ttm-list-li-content">B</span></li>
								          </ul>
								        </td>
								        <td>Canadian or foreign experience in a skilled trade under key groups of NOC B</td>
								      </tr>
								      <tr>
								        <th>Amount of work experience</th>
								        <td>One year in Canada in the last 3 years (either combination of full-time or part- time work)</td>
								        <td>One year continuous within the last 10 years (combination of part- time, full-time or more than 1 job in your primary occupation)</td>
								        <td>Two years within last 5 years (either combination of full-time or part-time work)</td>
								      </tr>
								      <tr>
								        <th>Job offer</th>
								        <td>Not required</td>
								        <td>Not required<br/>But you can get selection criteria (FSW) points for having a valid job offer.</td>
								        <td>
								          Required<br/>
								          <ul className="ttm-list ttm-list-style-icon">
								            <li><i className="fa fa-arrow-circle-right ttm-textcolor-skincolor"></i><span className="ttm-list-li-content">A valid job offer of full- time employment for a total period of at least 1 year or</span></li>
								            <li><i className="fa fa-arrow-circle-right ttm-textcolor-skincolor"></i><span className="ttm-list-li-content">A certificate of qualification in that skilled trade issued by a Canadian provincial, territorial or federal authority</span></li>
								          </ul>
								        </td>
								      </tr>
								      <tr>
								        <th>Education</th>
								        <td>Not required</td>
								        <td>Secondary education required <br/> You can get more selection criteria (FSW) points for your post- secondary education.</td>
								        <td>Not required</td>
								      </tr>
								    </tbody>
								  </table>
								</div>

								<h3 className="express_sec_subtitle mt_20">Step 1: Find out if you’re eligible</h3>
								<p className="express_sec_para_2 mb_20">In any of the three programs.</p>
								<h3 className="express_sec_subtitle mt_20">Step 2: Check your score</h3>
								<p className="express_sec_para_2 mb_20">Use the CRS tool to estimate your score.</p>
								<h3 className="express_sec_subtitle mt_20">Step 3: Get your documents ready</h3>
								<p className="express_sec_para_2 mb_20">Get the documents you need</p>
								<h3 className="express_sec_subtitle mt_20">Step 4: Fill out your profile</h3>
								<p className="express_sec_para_2 mb_20">Submit your profile</p>
								<h3 className="express_sec_subtitle mt_20">Step 5: Get an invitation and apply</h3>
								<p className="express_sec_para_2 mb_20">Apply through Express Entry</p>
								<h3 className="express_sec_subtitle mt_20">Step 6: Submit your Application</h3>
								<p className="express_sec_para_2 mb_20">Submit all the required documents</p>
								<h3 className="express_sec_subtitle mt_20">Step 7: Get your decision</h3>								
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

export default Express_Entry;