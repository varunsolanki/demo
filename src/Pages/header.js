import React from "react";
import "./../Assets/css/style.css";
import "./../Assets/css/bootstrap.css";
import "./../Assets/css/magnific-popup.css";
import "./../Assets/css/nice-select.css";
import "./../Assets/css/animate.min.css";
import "./../Assets/css/responsive.css";
import {Logo} from '../Utilities/Icons.js';
import {Link} from 'react-router-dom';

function Header(){
	return(
		<>
		<header id="header">
		  <div className="container container_padding">
		    <div className="row header-top align-items-center">		     
		      <div className="col-lg-2 menu-top-middle justify-content-left d-flex">
		        <Link to="/">
		        <img className="img-fluid" src={Logo.logo} alt=""></img>
		        </Link>
		      </div>
		      <div className="col-lg-7 col-sm-7">
		        <nav id="nav-menu-container">
			        <ul className="nav-menu">
			          <li className="menu-active"><a>Home</a></li>
			          <li><a>Temporary Resident Visa</a></li>
			          <li><a>Permanent Resident Visa</a></li>
			          <li><a>Business Immigration</a></li>
			          <li><a>About Us</a></li>
			          <li className="menu-has-children">
			            <a>Blog</a>
			            <ul>
			              <li><a>Blog Home</a></li>
			              <li><a>Blog Single</a></li>
			            </ul>
			          </li>
			        </ul>
			      </nav>
		      </div>		      
		      <div className="col-lg-2 col-sm-2 menu-top-right">
		      <button className="free_ass_btn">Free Assessments</button>
		      </div>
		    </div>
		  </div>
		</header>
		</>
	);
}

export default Header;