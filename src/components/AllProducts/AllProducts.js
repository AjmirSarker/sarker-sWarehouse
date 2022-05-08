import React from 'react';
import useData from '../Hooks/useData';
import ProductTable from './ProductTable';
import { useNavigate } from 'react-router-dom';
import SPinner from '../Spinner/SPinner';
import PageTitle from '../PageTitle/PageTitle';


const AllProducts = () => {
  const navigate = useNavigate()
  const goUpdatePage =()=>{
    navigate(`/additem`)
  }
    const [products] = useData()
   
    return (
      
      <div className=' container'>
        <PageTitle title="Manage Inventory"></PageTitle>
        {
          products.length===0?(<SPinner></SPinner>):""
        }
        <table class="table table-borderless table-info border mt-5 shadow border-warning">
        <thead className='table-dark'>
          <tr>
            
            <th scope="col">Name</th>
            <th scope="col">Supplier</th>
            
            <th scope="col">Price</th>
            <th scope="col">Change</th>
          </tr>
        </thead>
        <tbody>
        
           {
               products?.map(product=><ProductTable product={product}></ProductTable>)
           }
          
          
        </tbody>
      </table>
      <div className='d-flex justify-content-end'>
        <button  onClick={goUpdatePage}  className="btn my-5 fw-bold fs-5 btn-outline-success ms-auto ">Add Item page</button></div>
    
      </div>
    );
};

export default AllProducts;