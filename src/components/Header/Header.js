import React from 'react';

import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='sticky-sm-top bg-light'>
            <div className='Brand'>
                <h2 className='text-center fw-bolder'>Sarker's Warehouse</h2>
            </div>
        <div  className=' Header rounded-3 fw-bold fs-5 d-flex justify-content-between  w-100  px-5 py-2 '>
           <CustomLink  to="/" >Home</CustomLink>
           <CustomLink to="/inventory" >Inventory</CustomLink>
           <CustomLink  to="/allProducts" >AllProducts</CustomLink >
           <CustomLink  to="/blogs" >Blogs</CustomLink>
           <CustomLink to="/login" >Log In</CustomLink>
        </div>
        </div>
    );
};

export default Header;