import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/stoiclogo.svg";

function Navbar() {
  return (
    <div className='w-full flex flex-wrap flex-col md:flew-row justify-evenly items-center mb-6 py-6'>
      <Link to='/' className='mb-4'>
        {" "}
        <img src={logo} alt='' />
      </Link>
      <div className='w-4/12 md:w-3/12 flex justify-evenly'>
        <NavLink
          to='/'
          exact={true}
          activeClassName='underline'
          className='px-2'
        >
          Home{" "}
        </NavLink>
        <NavLink to='/docs' activeClassName='underline' className='px-4'>
          Docs{" "}
        </NavLink>
        <NavLink to='/quotes' activeClassName='underline'>
          Quotes{" "}
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
