import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMobileMenu, closeMobileMenu } from '../redux/slices/navbarSlice';
import logo from '../assets/logo.png';
import { MdOutlineMenu } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

function Navbar() {
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector((state) => state.navbar.isMobileMenuOpen);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">ModelXChange</span>
          </div>

          {/* links */}
          <ul className={`hidden lg:flex ml-14 space-x-12 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <li><a href="#">Models</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          {/* Buttons */}
          <div className={`hidden lg:flex justify-center space-x-12 items-center ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <Link to='/Login' className="py-2 px-3 border rounded-md">Login</Link>
            <Link to='/Register' className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md">Create an account</Link>
          </div>

          {/* Mobile menu icon */}
          <div className="lg:hidden">
            <button onClick={() => dispatch(toggleMobileMenu())}>
              {isMobileMenuOpen ? <IoClose size={24} /> : <MdOutlineMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3">
            <ul className="flex flex-col space-y-4">
              <li><a href="#" onClick={() => dispatch(closeMobileMenu())}>Models</a></li>
              <li><a href="#" onClick={() => dispatch(closeMobileMenu())}>Pricing</a></li>
              <li><a href="#" onClick={() => dispatch(closeMobileMenu())}>Docs</a></li>
              <li><a href="#" onClick={() => dispatch(closeMobileMenu())}>Contact</a></li>
              <li>
                <Link to='/Login' className="py-2 px-3 border rounded-md" onClick={() => dispatch(closeMobileMenu())}>Login</Link>
              </li>
              <li>
                <Link to='/Register' className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md" onClick={() => dispatch(closeMobileMenu())}>Create an account</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
