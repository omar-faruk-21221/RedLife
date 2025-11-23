"use client";
import Link from "next/link";

export default function Navbar() {
  const Links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">Add Product</Link>
      </li>
      <li>
        <Link href="/contact">Manage Products</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8 sticky top-0 z-50">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-secondary-focus">
          RedLife
        </Link>
      </div>

      {/* Navbar Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-2">
        <Link href="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
}
