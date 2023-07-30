import React from "react";
import nav_img from './../img/header.jpg';
import { FaBeer } from 'react-icons/fa';



function Header () {
return(
<>
<header className="bg-banner_1">
<div className="container pad-l-f">
<div className="d-flex justify-content-between align-items-center">
<p>APPLIANCES REPAIR AND SERVICES AT YOUR DOORSTEP</p>
<div className="col2">
<p className="remove_margin">TOLL FREE : 1800 102 5463</p>
<p className="remove_margin">EMAIL US : info@customerhomesupport.in</p>
<p className="remove_margin">LOCATION : 54, 9th Cross, Arekempanahalli, Bengaluru, Bengaluru Urban,</p>
</div>

</div>


</div>

</header>

<div className="mobile-header d-flex justify-content-start">
<img src={nav_img} className="nav_img" alt="navbar_image"/>
<h1 className="color-blue text-dis-dek"><span className="color-blue_light">Coustomer Home</span> Support</h1>
</div>

<div className="contact_stk">
<p className="con_box"><FaBeer/>Toll Free : 1800 102 5463</p>
</div>

</>

)

}

export default Header;
