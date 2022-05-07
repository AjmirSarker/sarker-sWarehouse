import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const [product, setProducts] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleDeliver = () => {
    let deliver = 1;
    let quantityNumber = parseInt(product.quantity);
    let quantity = quantityNumber - deliver;

    let newQuantity = {
      _id: product._id,
      name: product.name,
      quantity: quantity,
      supplier: product.supplier,
      image: product.image,
      description: product.description,
      price:product.price
    }    
      const url = `http://localhost:5000/products/${id}`
    fetch(url, {
        method: 'PUT',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(newQuantity)
    }).then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                setProducts(newQuantity)
                console.log('data success', data);
              
            }
        })
    }
    const newStock = e => {
        e.preventDefault();
        let quantityPrevious =product.quantity;
        let quantityPreviousNum = parseInt(quantityPrevious);
        let taken = parseInt(e.target.number.value);
        let quantity = quantityPreviousNum + taken;

        let newQuantity = {
            _id: product._id,
            name: product.name,
            quantity: quantity,
            supplier: product.supplier,
            image: product.image,
            description: product.description,
            price:product.price
          }  
        const url = `http://localhost:5000/products/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(newQuantity)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setProducts(newQuantity)
                    console.log('data success', data);
                    e.target.reset();
                }
            })
    }

    return (
      <div className="container mt-5">
        <div className="row g-4">
          <div className="col-sm-12 col-md-6">
            <div class="card h-100 border border-0 shadow ">
              <img src={product.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h3 class="card-title"> Product Name : {product.name}</h3>
                <h3 class="card-text"> Supplier Name : {product.supplier}</h3>
                <h5 className="card-text">Quantity : {product.quantity}</h5>
                <h5 className="card-text">Per Price : {product.price}</h5>
                <h5 class="card-text">Description : {product.description}</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <button
              onClick={()=>{ handleDeliver()}}
              className="deliver-btn me-1"
            >
              Deliver
            </button>
            <form onSubmit={newStock}>
              <span className="d-flex">
                <input type="number" name="number" required /> <br />
                <input className="btn ms-1" type="submit" value="Restock" />
              </span>
            </form>
          </div>
        </div>
      </div>
    );
  };


export default Update;
