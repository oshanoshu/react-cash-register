import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';

 
const Navigation = () => {
    return (
       <div>
          <Navbar bg="light">
            <Navbar.Brand href="/">
               Amazing Register
            </Navbar.Brand>
         </Navbar>
       </div>
    );
}

export default Navigation; 