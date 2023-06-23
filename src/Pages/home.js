import React from "react";
import "./../Assets/css/style.css";
import "./../Assets/css/bootstrap.css";
import "./../Assets/css/magnific-popup.css";
import "./../Assets/css/nice-select.css";
import "./../Assets/css/font-awesome.css";
import "./../Assets/css/animate.min.css";
import Header from "./header.js";
import Footer from "./footer.js";
import { Img, Icons } from '../Utilities/Icons.js';
import {Link} from 'react-router-dom';

function Home(){
	return(
		<>
		<Header/>
			<div className="section_1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
								<h2 className="section_1_title">Your Dream Our <span className="section_1_subtitle">Responsibility</span></h2>
								<p className="section_1_para">Relocating to Canada has never been more convenient! With a track record of more than 500 successful <br/	>cases, we are confident in providing you with a hassle-free immigration process.</p>
						</div>
						<div className="col-lg-12">
							<img alt="" src={Img.home_banner_img} className="section_1_home_banner"></img>
						</div>
					</div>
				</div>
			</div>
			<div className="section_2">
				<div className="container">
					<div className="col-lg-12">
						<div className="section_2_box">
							<div className="row">
								<div className="col-md-9">
									<h2 className="section_2_title">Our most recent approval data</h2>
									<p className="section_2_para">The presented data offers valuable insights into the visa approval process of a particular immigration firm. It may include details on the types of visas processed, success rates, average processing times, and any relevant trends or patterns observed over a given period.</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-8">
								</div>
								<div className="col-md-4">
									<div className="mt_25">
										<h5 className="data_update_title">Data updates ever one hour <img alt="" src={Icons.dataupdate} className="data_update_icon"></img></h5>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<hr className="hr_sty"/>
								</div>
							</div>
							<div className="counter_box">
									<div className="">
										<h3 className="counter_box_title">100</h3>
										<p className="counter_box_subtitle">PR Permanent <br/>Residence </p>
									</div>
									<div className="">
										<h3 className="counter_box_title">89</h3>
										<p className="counter_box_subtitle">LMIA Work <br/>Permit</p>
									</div>
									<div className="">
										<h3 className="counter_box_title">91</h3>
										<p className="counter_box_subtitle">Open Work <br/>Permit</p>
									</div>
									<div className="">
										<h3 className="counter_box_title">41</h3>
										<p className="counter_box_subtitle">Spousal <br/>Sponsorship</p>
									</div>
									<div className="">
										<h3 className="counter_box_title">51</h3>
										<p className="counter_box_subtitle">Student <br/>Visa</p>
									</div>
									<div className="">
										<h3 className="counter_box_title">21</h3>
										<p className="counter_box_subtitle">Super <br/>Visa</p>
									</div>
									<div className="">
										<h3 className="counter_box_title">221</h3>
										<p className="counter_box_subtitle">Live in <br/>Caregiver</p>
									</div>
									<div className="">
										<h3 className="counter_box_title">42</h3>
										<p className="counter_box_subtitle">Selfed <br/>Employed</p>
									</div>
									<div className="">
										<h3 className="counter_box_title">84</h3>
										<p className="counter_box_subtitle">Business <br/>Immigration</p>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section_3"></div>
			<div className="section_4">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="our_services_title">Our Services</h2>
							<p className="our_services_subtitle">Relocating to Canada has never been more convenient! With a track record of more than <br/> 500 successful cases, we are confident.</p>
						</div>
					</div>
					<div className="our_service_list">
						<div className="row">
							<div className="col-lg-3">
								<center>
									<img alt="" src={Img.our_services_1} className="our_service_img"></img>
								</center>
							</div>
							<div className="col-lg-3">
								<center>
									<img alt="" src={Img.our_services_2} className="our_service_img"></img>
								</center>
							</div>
							<div className="col-lg-3">
								<center>
									<img alt="" src={Img.our_services_3} className="our_service_img"></img>
								</center>
							</div>
							<div className="col-lg-3">
								<center>
									<img alt="" src={Img.our_services_4} className="our_service_img"></img>
								</center>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section_5">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h5 className="our_success_subtitle">CUSTOMER SUCCESS STORIES</h5>
							<h2 className="our_success_title">Customer success is our<br/> success</h2>
						</div>
					</div>
					<div className="our_success_list">
						<div className="row">
							<div className="col-lg-8">
								<div className="single-top-course">
							    <div className="thumbs relative">
							      <div className="overlay overlay-bg"></div>
							      <img className="img-fluid" src={Img.c_success_1} alt=""></img>
							    </div>
							    <div className="our_success_detailsv main_success_box" >
							      <p className="main_success_box_text">
							        We really want to appreciate the Growing Globe team for giving a positive response on my file because I was having a Refusal before I came to them.
							      </p>
							      <h5 className="main_success_read_more">Read Story <img src={Icons.readmorewhite} className="read_more_arrow"></img></h5>
							    </div>
							  </div>
							</div>
							<div className="col-lg-4">
							  <div className="single-top-course">
							    <div className="thumbs relative">
							      <div className="overlay overlay-bg"></div>
							      <img className="img-fluid" src={Img.c_success_2} alt=""></img>
							    </div>
							    <div className="our_success_details">
							      <p className="our_success_para">
							        I applied through this immigration consultant for my wife’s spousal visa in January and before 6 months of completion got the passport request.
							      </p>
							      <h5 className="our_success_read_more">Read Story <img src={Icons.readmore} className="read_more_arrow"></img></h5>
							    </div>
							  </div>
							</div>
						</div>
						<div className="row other_success_box">
							<div className="col-lg-4">
							  <div className="single-top-course">
							    <div className="thumbs relative">
							      <div className="overlay overlay-bg"></div>
							      <img className="img-fluid" src={Img.c_success_3} alt=""></img>
							    </div>
							    <div className="our_success_details">
							      <p className="our_success_para">
							        I was a former student in Canada 🇨🇦 and my work permit was about to expire. I am really grateful to Mr. Sargun as he helped me in renewing my work permit which ...
							      </p>
							      <h5 className="our_success_read_more">Read Story <img src={Icons.readmore} className="read_more_arrow"></img></h5>
							    </div>
							  </div>
							</div>
							<div className="col-lg-4">
							  <div className="single-top-course">
							    <div className="thumbs relative">
							      <div className="overlay overlay-bg"></div>
							      <img className="img-fluid" src={Img.c_success_4} alt=""></img>
							    </div>
							    <div className="our_success_details">
							      <p className="our_success_para">
							        Growing Globe immigration is best in their field. I meet with Mr. Sargun Singh and handover my case for Canada Work Permit.
							      </p>
							      <h5 className="our_success_read_more">Read Story <img src={Icons.readmore} className="read_more_arrow"></img></h5>
							    </div>
							  </div>
							</div>
							<div className="col-lg-4">
							  <div className="single-top-course">
							    <div className="thumbs relative">
							      <div className="overlay overlay-bg"></div>
							      <img className="img-fluid" src={Img.c_success_5} alt=""></img>
							    </div>
							    <div className="our_success_details">
							      <p className="our_success_para">
							        I had my outland sponsorship with some other lawyer! But he stopped picking up my call and attending to my concerns and inquiries then I came to know about ...
							      </p>
							      <h5 className="our_success_read_more">Read Story <img src={Icons.readmore} className="read_more_arrow"></img></h5>
							    </div>
							  </div>
							</div>
						</div>
					</div>
					<center>
						<button className="all_review">View All Reviews</button>
					</center>
				</div>
			</div>
			<div className="section_6">
				<div className="container">
					<div className="our_blog_list">
						<div className="row">
							<div className="col-lg-6">
								<h5 className="our_blogs_subtitle">Blogs</h5>
								<h2 className="our_blogs_title">Our guides, and<br/> videos have helped<br/> thousands.</h2>
								<p className="our_blog_para">Our books, guides, and videos have helped thousands of your peers get better at their jobs. No fluff or sales pitches. Just quality information and insights.</p>
								<button className="all_blogs">Read All Blogs</button>
							</div>
							<div className="col-lg-6">
								<div className="card">
								  <img className="card-img-top" src={Img.ourguides}></img>
								  <div className="card-body">
								    <h5 className="card_subtitle">Visa</h5>
								    <h2 className="card_title">How to apply for canada visa?</h2>
								    <p className="card_para">Our books, guides, and videos have helped thousands of your peers get better at their jobs. No fluff or sales pitches. </p>
								  </div>
								</div>
								<div className="card">
								  <img className="card-img-top" src={Img.ourguides}></img>
								  <div className="card-body">
								    <h5 className="card_subtitle">Visa</h5>
								    <h2 className="card_title">How to apply for canada visa?</h2>
								    <p className="card_para">Our books, guides, and videos have helped thousands of your peers get better at their jobs. No fluff or sales pitches. </p>
								  </div>
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

export default Home;