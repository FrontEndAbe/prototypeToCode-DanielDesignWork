import React from 'react';
import { ReactComponent as CheckOut } from '../../images/checkout.svg';

function Nav() {
  return (
    <div className="nav displayFlex justifyBetween alignCenter">
      <a className="logo" href="#">Domingo</a>
      <div>
        <a className="active navItem" href="#">Shop Now</a>
        <a className="navItem" href="#">Cleanses</a>
        <a className="navItem" href="#">Daily bundles</a>
        <a className="navItem" href="#">Collections</a>
      </div>
      <div className="displayFlex justifyBetween alignCenter">
        <a className="navItem" href="#">Account</a>
        <CheckOut />
      </div>
    </div>
  );
}

export default Nav;
