import React from 'react';
import { Link } from 'react-router-dom';

import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <nav class="navbar sticky-sm-top navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto fs-3">
              <li class="nav-item">
              <CustomLink className="nav-link active"  to="/" >Home</CustomLink>
              </li>
              <li class="nav-item">
              <CustomLink className="nav-link " to="/inventory" >Inventory</CustomLink>
              </li>
              <li class="nav-item">
              <CustomLink className="nav-link "  to="/allProducts" >AllProducts</CustomLink >
              </li>
              <li class="nav-item">
              <CustomLink className="nav-link "  to="/blogs" >Blogs</CustomLink>
              </li>
              <li class="nav-item">
              <CustomLink className="nav-link " to="/login" >Log In</CustomLink>

              </li>
              <li class="nav-item">
              <CustomLink className="nav-link " to="/additem" >Add Item</CustomLink>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;
