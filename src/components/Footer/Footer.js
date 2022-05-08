import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center'>
            <h1>$arker Warehouse</h1>
            <p>Copyright © {year} sarkerwarehouse</p>
            <p>All rights reserved</p>
           
        </footer>
    );
};

export default Footer;