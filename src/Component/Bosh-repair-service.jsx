import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import appliances from '../img/repaireServiceimg/homeappliances.jpg';
import coninfo from '../img/repaireServiceimg/contact.jpg';

function BoshRepairService () {
return(
<>

<Header/>
<div className="container inner_padding">

<h1 className="color-blue pt-2">BOSH</h1>

<h3 className="color-blue_light pb-5">Product Services - Customer Home Services</h3>

<p className="sub_content pt-1 pb-2">Washing Machine Service Center & Refrigerator, AC Air Conditioner, Dishwasher Dryer, Repair From Our Best Service Center</p>

<p className="sub_content pt-2 pb-2">If you have any BOSCH product and are looking for BOSCH Product Service Centre in your city then you have come to the right place. Customer Home Services provides you the best technician for Refrigerator, Washing Machine, Dishwasher & Dryer appliances.</p>

<p className="sub_content">We have technicians with good experience in servicing & repairing your products. Customer Home Services provides you efficient and effective services.Our Regesitered Service center provides you the best service and warranty for your products.</p>

<div className="row pt-5 mt-5 align-item-center">

    <div className="col-lg-6 col-md-6 col-sm-12">
<p className="content_head_text margin-0">BOSCH WASHING MACHINE & DRYER SERVICE</p>
<p className="content_text">Customer Home Services helps you in providing Registered Service Centre
 for your Washing Machine & Dryer.We provide best repair and service at your doorstep in your city.
  We are Warranty Service providers.</p>

<p className="content_head_text pt-4 margin-0">BOSCH FRIDGE / REFRIGERATOR SERVICE</p>
<p className="content_text">Customer Home Services helps you in providing Registered Service Center for your Refrigerator/Fridge.We 
provide best repair and service at your doorstep in your city. We are Warranty Service providers.</p>

<p className="content_head_text pt-4 margin-0">BOSCH DISHWASHER REPAIR & SERVICE</p>
<p className="content_text">Customer Home Services helps you in providing Registered Service Center for your
 Dishwasher. We provide best repair and service at your doorstep in your city.We are Warranty Service providers.</p>
   
   <p className="content_head_text pt-4 margin-0">BOSCH DRYER REPAIR & SERVICE</p>
<p className="content_text">Customer Home Services helps you in providing Registered Service Center for your Dryer. We
 provide best repair and service at your doorstep in your city.We are Warranty Service providers.</p>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-12">
<img src={appliances} alt="home" className="content_img"/>
    </div>
</div>

{/* Contact-Form Start*/}

<div className="row pt-5 mt-5">
<div className="col-lg-6 col-md-12 col-sm-12">
<h1 className="color-blue">Customer Home Service</h1>

<h5 className="">For any Kind of Appliances Repair and Service</h5>
<img src={coninfo} className="content_img3"/>

</div>

<div className="col-lg-6 col-md-12 col-sm-12">

<div className="card-body-mod">

<form>

    <input type="text" className="form-control mt-2 mb-4 add-padding" placeholder="Name"/>
    <input type="text" className="form-control mt-2 mb-4 add-padding" placeholder="Email"/>
    <input type="number" className="form-control mt-2 mb-4 add-padding" placeholder="Phone Number"/>

    <select id="service" name="service" className="form-control mt-2 mb-4 add-padding">
    <option value="">Select Your Service</option>
    <option value="REFRIGERATOR">REGRIGERATOR  REPAIR & SERVICE</option>
    <option value="AC">AC REPAIR & SERVICE</option>
    <option value="TV">TV REPAIR & SERVICE</option>
    <option value="DISHWASHER">DISHWASHER REPAIR & SERVICE</option>
    <option value="Dryer">Dryer Service & Repair</option>
    <option value="Washing">Washing Machine Service & Repair</option>
    <option value="Washing">SMART,LED,LCD,TV REPAIR & SERVICE</option>
    <option value="Washing">WATER PURIFIER REPAIR & SERVICE</option>
    <option value="Washing">MICROWAVE OVEAN REPAIR & SERVICE</option>
  </select> 

    <input type="text" className="form-control mt-2 mb-4 add-padding" placeholder="Address"/>
    <input type="number" className="form-control mt-2 mb-4 add-padding" placeholder="Pin-code"/>

    <textarea row="30" col="50" placeholder="Message" className="form-control mt-2 mb-4"></textarea>

    <div className="d-flex justify-content-center">

        <button type="submit" className="btn btn-primary width-contain">Send</button>
    </div>
</form>

</div>


</div>


</div>
{/* Contact-Form End*/}

<section className="link_section pt-5 pb-5 mt-5">


<p className="text-center color-blue text-weight-500">
Bosch washing machine service center <span className="tag-black-holder">| </span> 
Bosch Washing machine Repair <span className="tag-black-holder">| </span>
Bosch fridge service center <span className="tag-black-holder">| </span>
Bosch fridge repair <span className="tag-black-holder">| </span>
Bosch Refrigerator service center <span className="tag-black-holder">| </span><br/>
Bosch Refrigerator Repair <span className="tag-black-holder">| </span>
Bosch ac service center <span className="tag-black-holder">| </span>
Bosch ac repair <span className="tag-black-holder">| </span>
Bosch air conditioner service center <span className="tag-black-holder">| </span>
Bosch Dishwasher service center <span className="tag-black-holder">| </span>
Bosch Dryer service center <span className="tag-black-holder">| </span>
Bosch Dryer repair <span className="tag-black-holder">| </span>
Bosch microwave service center <span className="tag-black-holder">| </span>
Bosch microwave service <span className="tag-black-holder">| </span>
Bosch microwave repair <span className="tag-black-holder">| </span>
Bosch oven service center <span className="tag-black-holder">| </span><br/>
Bosch oven service <span className="tag-black-holder">| </span>
Bosch oven repair</p>
</section>

</div>

<Footer/>

</>
)
}

export default BoshRepairService;
