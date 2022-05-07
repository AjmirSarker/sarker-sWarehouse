import React from 'react';
import useData from '../Hooks/useData';
import ProductTable from './ProductTable';


const AllProducts = () => {
    const [products] = useData()
   
    return (
        <table class="table table-borderless table-info container border mt-5 shadow border-warning">
        <thead className='table-dark'>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Supplier</th>
            <th scope="col">Quantity</th>
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
    );
};

export default AllProducts;