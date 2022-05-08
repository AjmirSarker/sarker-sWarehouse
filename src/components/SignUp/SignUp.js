import React, { useEffect, useState } from 'react';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init.js';
import PageTitle from '../PageTitle/PageTitle.js';
import toast from 'react-hot-toast';

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
  const [showPass, setShowPass] = useState(false);

  const toggleNewPass = () => {
    setShowPass(!showPass);
  };
  const toggleConfirmPass = () => {
    setShowPass(!showPass);
  };
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const userName = e.target.username.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmpassword.value;
    console.log(name);
    console.log(email);
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      toast.success(`Signup Success`,{id:'success'})
      toast.success(`Verify email sent`,{id:'verify'})
    } else {
      alert("Password didn't match please try again");
    }
  };
  if (user) {
    navigate('/login');
  }
  return (
    <div>
       <PageTitle title="SignUp"></PageTitle>
      <div className="row container w-75 mx-auto my-3">
        <div className="col-12 col-md-8 mx-auto">
          <div className="w-100">
            <form onSubmit={handleRegister} className="text-start w-100 h-75">
              <h3 className="text-dark fw-bolder fst-italic fs-3 mx-auto tex-center">Register New User</h3>
              <div className="my-3">
                <span className="text-start">Name</span>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  aria-describedby="nameHelp"
                />
              </div>
              <div className="mb-3">
                <span className="text-start">User Name</span>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  aria-describedby="userNameHelp"
                />
              </div>
              <div className="mb-3">
                <span className="text-start">Email</span>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <span className="text-start">New Password</span>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <span className="text-start">Confirm Password</span>
                <input
                  type="password"
                  name="confirmpassword"
                  className="form-control"
                />
              </div>
              <div className='d-flex justify-content-center '><input type="submit" className="fst-italic fs-5 fw-bolder   btn btn-outline-success w-25" value="Register" /></div>
              <div className='d-flex justify-content-center '><h5 className="mt-3 ">
                Already have an account
                <Link className="ms-2 text-info fw-bolder fs-5" to="/login">
                  Login
                </Link>
              </h5></div>
            </form>
            <h4 className="text-center fst-italic fw-bolder my-3">Or</h4>
            <GoogleButton
              className="w-100 bg-dark"
              onClick={() => {
                console.log('Google button clicked');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
