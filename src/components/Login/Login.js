import axios from 'axios';
import React, { useRef } from 'react';
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';
import GoogleButton from 'react-google-button';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../Firebase.init';
import SPinner from '../Spinner/SPinner';

const Login = () => {
  const userEmail =useRef('')
  const navigate = useNavigate();
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  if (user) {
    navigate('/');
  }
  if(loading){
    <SPinner></SPinner>
  }
  const forgetPassword=async (e)=>{
const email= userEmail.current.value
if(email){
 await sendPasswordResetEmail(email)
}

  }

  const handleLogin = async (e) => {
    e.preventDefault();
 
    const email = userEmail.current.value
    const password = e.target.password.value;

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post('https://sarkerswarehouse.herokuapp.com/login', { email });
    console.log(data);
    console.log(email);
  };
  return (
    <div>
      <div className="row  container mt-5 text-center w-75 mx-auto my-3">
        <div className="col-12  d-flex align-items-center">
          <div className="w-100">
            <form
              className="w-100 h-75 fw-bold text-success"
              onSubmit={handleLogin}
            >
              <h3 className="text-dark fw-bolder fst-italic fs-1">Login</h3>
              <div className="my-3">
                <span className="text-start">Email</span>
                <input
                  required
                  type="email"
                ref={userEmail}
                  className="form-control rounded-pill border border-warning"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <span className="text-start">Password</span>
                <input
                  required
                  type="password"
                  name="password"
                  className="form-control rounded-pill border border-warning"
                  id="exampleInputPassword1"
                />
              </div>
             
              <button
                type="submit"
                className="fst-italic fs-5 fw-bolder   btn btn-outline-success w-25"
              >
                Login
              </button>
              <p className="mt-3">
                New here please
                <Link className="ms-2 text-danger" to="/signup">
                  Sign Up
                </Link>
              </p>
            </form>
            <div className='d-flex justify-content-center'>
            <button onClick={forgetPassword} className="d-block btn btn-info mb-3">Forget your password ?</button></div>
            <h4 className="text-center fst-italic fw-bolder my-3">Or</h4>
            <GoogleButton
              className="w-50 mx-auto rounded-3 bg-dark"
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

export default Login;
