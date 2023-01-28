import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import PageTitle from '../../PageTitle/PageTitle';
import MyItem from '../myItem/MyItem';

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {
    const myItemsHandle = async () => {
      const email = user?.email;
      const url = `https://sarkerwarehouse.onrender.com/AddItem?email=${email}`;
      const { data } = await axios.get(url);
      setMyItems(data);
    };
    myItemsHandle();
  }, [user?.email, myItems]);
  return (
    <div>
      <PageTitle title="User Item"></PageTitle>
      <div className="my-5 text-center">
        <h6 className="">{user?.email}</h6>
        <h1 className="">ADDED ITEMS</h1>
      </div>
      <table class="table table-borderless table-info container border mt-5 shadow border-warning">
        <thead className="table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Supplier</th>

            <th scope="col">Price</th>
            <th scope="col">Change</th>
          </tr>
        </thead>
        <tbody>
          {myItems.map((sendMyItem) => (
            <MyItem key={MyItem._id} sendMyItem={sendMyItem}></MyItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyItems;
