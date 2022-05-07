import React from 'react';

const ProductSome = ({product}) => {
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
        </div>
      </div>
    );
};

export default ProductSome;