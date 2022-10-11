import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import './navbar.css';

const Navbar = (props) => {

  

  return (
    <>
    <div className='navbar'>
      <div>
        <h2 style={{margin: 0, padding: 0}}>
          <Link to='/' style={{color: 'white', textDecoration: 'none'}}>Shoe Store</Link>
        </h2>
      </div>
      <div style={{paddingTop: '7px'}}>
        <h5 className='home'><Link className='link' to='/'>Home</Link></h5>
      <h5 className='about'><Link className='link' to='/about'>About</Link></h5>
      <h5><Link className='link' to='/product'>Products</Link></h5>
      </div>
      <div>
        <Link >
        <Badge badgeContent={props.cart} color="primary" >
        <ShoppingCartIcon style={{color: 'white', paddingTop: '4px'}}/>
        </Badge>
        </Link>
        
         
        
      </div>
      {/* <Link style={{padding: '5px'}} to={'productItem'}>Product Item</Link> */}
    </div>
    </>
  )
}

export default Navbar;