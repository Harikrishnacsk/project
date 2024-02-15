import React from 'react'
import './myAccounts.css'
import Profile from './Profile';
import GiftCardAndCoupon from './GiftCardAndCoupon';
import SizeProfile from './SizeProfile';
import { Outlet, Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="myaccount-left">
        <h6>My Account</h6>
        <nav className="profilenav">
            <ul>
                <li>
                  <Link to="/">Profile</Link>
                </li>
                <li><a href="">My Orders</a></li>
                <li><a href="">Manage Address</a></li>
                <li>
                  <Link to="/giftcardandcoupon">Gift Card and Coupon</Link>
                </li>
                <li>
                  <Link to="/sizeprofile">Size Profile</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default NavBar;