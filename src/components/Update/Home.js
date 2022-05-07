import React from 'react';
import { Carousel } from 'react-bootstrap';
import ProductSome from '../AllProducts/ProductSome';
import One from '../bannerimage/one.jpg'
import Three from '../bannerimage/three.jpg'
import Two from '../bannerimage/two.jpg'
import useData from '../Hooks/useData';
import p1 from '../supplierimg/p1.jpg'
import p2 from '../supplierimg/p2.jpg'
import p3 from '../supplierimg/p3.jpg'
import p4 from '../supplierimg/p4.jpg'
import "./Home.css"

const Home = () => {
  const [products] =useData()
    return (
        <div>
           <Carousel  className="Home">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={One}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Wedding Event</h3>
            <p>A holy event</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={Two}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Formal Photoshoot</h3>
            <p>Formal Photoshoot for better confidence</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Three}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Seminar Event</h3>
            <p>
              Good response for seminars
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* //EXTRA */}
      <div class="section mt pb-2 "   >
<div class="container  " >
  <div class="text-center ">
    <h3 class="py-4 text-danger fw-bold">Our Supplier Team</h3>
    <p class="pb-3 fst-italic fw-bold">A successful team is one where everyone’s unique skills and strengths help <br/> the team achieve a shared goal in the most effective way.</p>
  </div>
    <div class="row my-5 g-0 ">
      <div class="col-lg-3 col-md-6 col-sm-12">
        <img class="img-fluid" src={p1} alt=""/>
         </div>
      <div class="col-lg-3 col-md-6 col-sm-12 text-center d-flex flex-column justify-content-center py-3 bg-light px-2 " >
        <h4 class="fw-bold">Selena Domes</h4>
        <h6 class="text-danger fw-bold">Event designer</h6>
        <p>Creative professionals who design event spaces with the appropriate organization.</p>
        
        
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <img class="img-fluid" src={p2}  alt=""/>
         </div>
      <div class="col-lg-3 col-md-6 col-sm-12 text-center py-3 bg-light px-2 d-flex flex-column justify-content-center " >
        <h4 class="fw-bold">Arafat Sarker</h4>
        <h6 class="text-danger fw-bold">Event Manager</h6>
        <p>Responsible for the planning, organisation and running of entire professional.</p>
      
        
      </div>
      
      <div class="col-lg-3 col-md-6 col-sm-12 text-center py-3 bg-light px-2  d-flex flex-column justify-content-center" >
        <h4 class="fw-bold">Christen Homes</h4>
        <h6 class="text-danger fw-bold">Budget Planner</h6>
        <p>Help company know exactly where our money is being spent, and how much we’ve got coming in.</p>
       
        
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <img class="img-fluid" src={p3}  alt=""/>
         </div>
     
      <div class="col-lg-3 col-md-6 col-sm-12 text-center py-3 bg-light d-flex flex-column justify-content-center" >
        <h4 class="fw-bold " >Nayeam Islam</h4>
        <h6 class="text-danger fw-bold">Event Tracker</h6>
        <p>Gives information about how's event going.When all tasks will be finished.</p>
        
        
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <img class="img-fluid" src={p4} alt=""/>
         </div>

    </div>
 

</div>
</div>
{/* Inventory */}
<div className='container  mb-5 mt-3'>
  <h2 className='fw-bolder text-center'>Items</h2>
        <div class=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {
                products.slice(0,6).map(product=><ProductSome  product={product}></ProductSome>)
            }
       
       </div>
      </div>
        </div>
    );
};

export default Home;