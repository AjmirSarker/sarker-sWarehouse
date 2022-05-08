import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductSome = ({product}) => {
  const navigate = useNavigate()
  const goUpdatePage =()=>{
    navigate(`/inventory/${product._id}`)
  }
    return (
        <div class="col">
        <div class="card h-100 border border-0 shadow ">
          <img src={product.image} class="card-img-top rounded-circle" alt="..."/>
          <div class="card-body">
            <h5 class="card-title"> Product Name : {product.name}</h5>
            <p class="card-text"> Supplier Name : {product.supplier}</p>
            <p className='card-text'>Quantity : {product.quantity}</p>
            <p className='card-text'>Per Price : {product.price}</p>
          </div>
          <div onClick={goUpdatePage}  className="card-footer border border-primary bg-success">
        <button className="btn fw-bold fs-5 btn-outline-info">Update</button>
      </div>
        </div>
      </div>
    );
};

export default ProductSome;