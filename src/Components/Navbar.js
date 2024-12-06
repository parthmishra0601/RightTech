import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu toggle and search

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Track dropdown visibility
  const [searchQuery, setSearchQuery] = useState(""); // Track the search input
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Track sidebar visibility

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services", dropdown: true },
    { to: "/team", label: "Our Team" },
    { to: "/collaborations", label: "Our Collaborations" },
    { to: "/associates", label: "Our Associates" },
    { to: "/contact", label: "Contact Us" },
  ];

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
  };

  return (
    <div>
      {/* Main Navbar */}
      <nav className="w-full py-4 bg-blue-950 flex items-center justify-between px-4 md:px-16 z-50">
        

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FaBars size={24} />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-between items-center">
          <ul className="list-none flex items-center gap-x-10 text-xl text-white font-medium">
            {navLinks.map((item) => (
              <li
                key={item.to}
                className="relative"
                onMouseEnter={item.dropdown ? handleMouseEnter : null}
                onMouseLeave={item.dropdown ? handleMouseLeave : null}
              >
                <Link
                  to={item.to}
                  className="hover:text-gray-300 transition duration-200"
                >
                  {item.label}
                </Link>
                {item.dropdown && dropdownOpen && (
                  <ul className="absolute top-8 left-0 bg-white text-black rounded-md shadow-lg p-2">
                    <li className="py-1 px-4 hover:bg-gray-200">
                      <Link to="/services/sub1">Sub Service 1</Link>
                    </li>
                    <li className="py-1 px-4 hover:bg-gray-200">
                      <Link to="/services/sub2">Sub Service 2</Link>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex items-center"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-[200px] md:w-[300px] px-10 py-2 text-black rounded-md outline-none"
            />
            <button
              type="submit"
              className="absolute left-3 text-gray-500"
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-y-0 left-0 bg-blue-950 text-white z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 w-[75%] sm:w-[60%] p-4`}
      >
        {/* Close Button */}
        <button
          className="text-white text-2xl mb-4"
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaTimes />
        </button>

        {/* Sidebar Links */}
        <ul className="flex flex-col gap-y-6 text-xl font-medium">
          {navLinks.map((item) => (
            <li
              key={item.to}
              onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
            >
              <Link
                to={item.to}
                className="hover:text-gray-300 transition duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search Bar in Sidebar */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative mt-8 flex items-center"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-full px-10 py-2 text-black rounded-md outline-none"
          />
          <button
            type="submit"
            className="absolute left-3 text-gray-500"
          >
            <FaSearch />
          </button>
        </form>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
