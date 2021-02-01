import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';

 
const Navigation = () => {
    return (
       <div>
          <Navbar bg="light">
            <Navbar.Brand href="/">
               Amazing Register
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                  <Nav.Link href="/about">About</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
       </div>
    );
}

export default Navigation; 