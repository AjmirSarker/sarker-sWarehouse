import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import auth from '../Firebase.init';


import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <>
      <Navbar className="navbar" collapseOnSelect expand="lg" sticky="top">
        <Container>
          <Navbar.Brand className='designed' as={Link} to="/">
            <h3>Sarker's Warehouse</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navbar-link">
              {/* <Nav.Link href="home">Home</Nav.Link> */}
              <CustomLink className="nav-link fs-6 active"  to="/" >Home</CustomLink>
              <CustomLink className="nav-link fs-6 " to="/inventory" >Inventory</CustomLink>
              
              <CustomLink className="nav-link fs-6"  to="/blogs" >Blogs</CustomLink>
             
             
            </Nav>
            <Nav className="navbar-link">
              {user && (
                <>
                  <CustomLink className="nav-link fs-6 " to="/additem" >Add Item</CustomLink>
                  <CustomLink className="nav-link fs-6"  to="/allProducts" >Manage Inventory</CustomLink >
                  <CustomLink className="nav-link fs-6 " to="/myitems" >User Item</CustomLink>
                  {/* <Nav.Link as={Link} to="orders">Orders</Nav.Link> */}
                </>
              )}
            {
                user?(<CustomLink  className="nav-link fs-6  mt-1 ms-2 text-center text-dark fw-bolder border p-1 btn btn-outline-warning "  to='/' onClick={handleSignOut}> Sign out</CustomLink>):(<CustomLink className="nav-link fs-6 "  to='/login'> Log In</CustomLink>)
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
