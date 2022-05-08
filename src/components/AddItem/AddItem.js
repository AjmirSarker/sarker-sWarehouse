import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useForm } from 'react-hook-form';
import auth from '../Firebase.init';
import PageTitle from '../PageTitle/PageTitle';

const AddItem = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const [Submit, setSubmit] = useState(false);

  const onSubmit = (data) => {
    setSubmit(true);

    const url = 'https://sarkerswarehouse.herokuapp.com/products';
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-50 my-5 mx-auto ">
      <PageTitle title="Add Item"></PageTitle>
      <h1>Add New Item</h1>
      <form className="d-flex flex-column " onSubmit={handleSubmit(onSubmit)}>
        <div>
          {Submit && (
            <div class="alert alert-primary" role="alert">
              Submitted Successfully
            </div>
          )}
        </div>
        <input
          className="my-2 lh-lg"
          readOnly
          value={user?.email}
          {...register('email')}
        />
        <input
          className="my-2 lh-lg"
          required
          placeholder="product name"
          {...register('name')}
        />
        <input
          className="my-2 lh-lg"
          required
          placeholder="supplier name"
          {...register('supplier')}
        />
        <input
          className="my-2 lh-lg"
          required
          placeholder="picture url"
          {...register('image')}
        />
        <textarea
          required
          rows="2"
          cols="23"
          placeholder="description"
          {...register('description')}
        />
        <input
          className="my-2 lh-lg"
          placeholder="quantity"
          required
          type="number"
          {...register('quantity')}
        />
        <input
          className="my-2 lh-lg"
          placeholder="price"
          required
          type="number"
          {...register('price')}
        />
        <div className="d-flex justify-content-center ">
          <input
            className="my-2  fst-italic fs-5 fw-bolder   btn btn-outline-success"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
