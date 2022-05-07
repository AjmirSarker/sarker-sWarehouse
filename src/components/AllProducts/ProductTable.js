import React from 'react';
import useData from '../Hooks/useData';

const ProductTable = ({product}) => {
    const [products,setProducts] =useData()
    const productDelete=id=>{
        const procceed = window.confirm('Are you sure to delete this item???')
        if(procceed){
          
            const url =`http://localhost:5000/products/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount >0){
                    console.log('deleted');
                    const remaining = products.filter(item => item._id !== id)
                    setProducts(remaining)
                }
            })
        }
        else{
            console.log("ok");
        }
    }
    return (  <tr >
            <th scope="row">{product._id}</th>
        <td>{product.name}</td>
        <td>{product.supplier}</td>
        <td>{product.quantity}</td>
        <td>{product.price}</td>
        <td><button onClick={()=>productDelete(product._id)}  type="button" class="btn btn-danger">Remove</button></td>
        </tr>
    );
};

export default ProductTable;