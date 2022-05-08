import React from 'react';
import { Link } from 'react-router-dom';
import './EidOffer.css';

const EidOffer = () => {
  return (
    <section className="eidOffer mt-5 p-5" id="about-us">
      <div className="container">
        <div className="mb-5 text-center designed ">
          <h2 className="">Eid Special 40% OFF</h2>
        </div>
        <div className="row mt-2 align-items-center g-5">
          <div className="col-lg-6 col-md-12 mb-lg-0">
            <div>
            <div class="card shadow bg-secondary bg-gradient border-0 w-75">
  <div class="card-body " >
    <h2 class="card-title fs-1 text-info fw-bold text-capitalize">Tang</h2>
    <div className='text-light'>
    <h4> Enjoy its yummy taste with the benefits of Vitamin A, B , C and Iron. Rejuvenate your day by drinking a glass full of fresh and energetic drink- which gives you 60% of your Vitamin C requirement of the day.</h4>
    </div>
    
    
  </div>
</div>
            
            
            </div>
          </div>
          <div className="col-lg-6 col-md-12 text-sec">
            <img
              src="https://i.ibb.co/PtHcqN5/item-2.png"
              className="img-fluid eidOffer-image"
              alt=""
            />
          
          </div>
          <div className="col-lg-6 col-md-12 order-1 order-md-1">
          <img
                src="https://i.ibb.co/qJDXtVP/food-oil.png"
                className="img-fluid eidOffer-image"
                alt=""
              />
            
          </div>
          <div className="col-lg-6 col-md-12 order-0 order-lg-2">
            <div>
            <div class="card shadow bg-secondary bg-gradient border-0 w-75">
  <div class="card-body " >
    <h2 class="card-title fs-1 text-info fw-bold text-capitalize">Food Oil</h2>
    <div className='text-light'>
    <h4 >When you think of vegetable oil, you may picture the jugs of oil commonly found at grocery stores used for deep frying foods. Vegetable oil actually encompasses a much more extensive range of oils. </h4>
    </div>
    
    
  </div>
</div>
           
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EidOffer;
