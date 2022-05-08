import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ProductSome from '../AllProducts/ProductSome';
import One from '../bannerimage/one.jpg';
import Three from '../bannerimage/three.jpg';
import Two from '../bannerimage/two.jpg';
import EidOffer from '../ExtraTwo/EidOffer';
import useData from '../Hooks/useData';
import PageTitle from '../PageTitle/PageTitle';
import SPinner from '../Spinner/SPinner';
import p1 from '../supplierimg/p1.jpg';
import p2 from '../supplierimg/p2.jpg';
import p3 from '../supplierimg/p3.jpg';
import p4 from '../supplierimg/p4.jpg';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const goUpdatePage = () => {
    navigate(`/allproducts`);
  };
  const [products] = useData();
  return (
    <div>
      <PageTitle title="Home"></PageTitle>
      <Carousel className="Home">
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={One} alt="First slide" />
          <Carousel.Caption>
            <h3>Training Staff</h3>
            <p className="fw-bolder">
              Not only does having a properly trained team increase safety in a
              potentially hazardous work atmosphere, but it improves efficiency
              and makes your job as management much easier.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={Two} alt="Second slide" />
          <Carousel.Caption>
            <h3>Safety</h3>
            <p className="fw-bolder">
              Warehouses are often used to store a lot of expensive products and
              thus are a popular target for thieves.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Three} alt="Third slide" />
          <Carousel.Caption>
            <h3>Mechanical Appliances</h3>
            <p>
              In order to have a smoothly running warehouse, the right machinery
              is required.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* //EXTRA */}
      <div class="section mt pb-2 ">
        <div class="container  ">
          <div class="text-center ">
            <h3 class="py-4 text-danger fst-italic fs-2 fw-bolder">
              Our Executive Team
            </h3>
            <p class="pb-3 fst-italic fw-bold fs-5">
              A successful team is one where everyone’s unique skills and
              strengths help <br /> the team achieve a shared goal in the most
              effective way.
            </p>
          </div>
          <div class="row my-5 g-0 ">
            <div class="col-lg-3 col-md-6 col-sm-12">
              <img class="img-fluid" src={p1} alt="" />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 text-center d-flex flex-column justify-content-center py-3 bg-light px-2 ">
              <h4 class="fw-bold">Selena Domes</h4>
              <h6 class="text-danger fw-bold">Chief Product Officer</h6>
              <p>
                In her role she will be responsible for sourcing and building
                the best assortment of products for customers.
              </p>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <img class="img-fluid" src={p2} alt="" />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 text-center py-3 bg-light px-2 d-flex flex-column justify-content-center ">
              <h4 class="fw-bold">Arafat Sarker</h4>
              <h6 class="text-danger fw-bold">Chief Executive Officer</h6>
              <p>
                He had held leadership roles with Sears Holdings, including
                President of footwear, home, fine jewellery and apparel.
              </p>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12 text-center py-3 bg-light px-2  d-flex flex-column justify-content-center">
              <h4 class="fw-bold">Christen Homes</h4>
              <h6 class="text-danger fw-bold">
                Chief Customer and Sales Officer
              </h6>
              <p>
                Christenspent time in global marketing, brand strategy and
                business development roles at Zynga and The Walt Disney Company.
              </p>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <img class="img-fluid" src={p3} alt="" />
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12 text-center py-3 bg-light d-flex flex-column justify-content-center">
              <h4 class="fw-bold ">Edwin Gear</h4>
              <h6 class="text-danger fw-bold">Chief Information Officer</h6>
              <p>
                He has extensive operational and broader business experience and
                has a strong track record of delivering change and building and
                leading teams.
              </p>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <img class="img-fluid" src={p4} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* //two */}
      <div>
        <EidOffer></EidOffer>
      </div>
      {/* Inventory */}
      <div className="container  mb-5 mt-3">
        {products.length === 0 ? <SPinner></SPinner> : ''}
        <h2 className="fw-bolder text-center fst-italic fs-1 my-5">
          Inventory Items
        </h2>
        <div class=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {products.slice(0, 6).map((product) => (
            <ProductSome product={product}></ProductSome>
          ))}
        </div>
      </div>
      <div className="d-flex my-2 container justify-content-end">
        <button
          onClick={goUpdatePage}
          className="btn fw-bold fs-5 btn-outline-success ms-auto "
        >
          Manage Inventory
        </button>
      </div>
    </div>
  );
};

export default Home;
