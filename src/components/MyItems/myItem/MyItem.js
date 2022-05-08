import React from 'react';
import useData from '../../Hooks/useData';

const MyItem = ({ sendMyItem }) => {
  const [products, setProducts] = useData();
  const sendMyItemDelete = (id) => {
    const procceed = window.confirm('Are you sure to delete this item???');
    if (procceed) {
      const url = `https://sarkerswarehouse.herokuapp.com/products/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log('deleted');
            const remaining = products.filter((item) => item._id !== id);
            setProducts(remaining);
          }
        });
    } else {
      console.log('ok');
    }
  };

  return (
    <tr>
      <td>{sendMyItem.name}</td>
      <td>{sendMyItem.supplier}</td>
      
      <td>{sendMyItem.price}</td>
      <td>
        <button
          onClick={() => sendMyItemDelete(sendMyItem._id)}
          type="button"
          class="btn btn-danger"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default MyItem;
// ৳
