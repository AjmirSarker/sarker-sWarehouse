import React from 'react';
import Product from '../AllProducts/Product';
import useData from '../Hooks/useData';
const Inventory = () => {
    const [products] =useData()
    return (
        <div className='container  mb-5 mt-3'>
        <div class=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {
                products.map(product=><Product product={product}></Product>)
            }
       
       </div>
      </div>
    );
};

export default Inventory;