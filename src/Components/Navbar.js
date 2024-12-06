import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaSearch } from 'react-icons/fa'; // Importing the magnifying glass icon

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Track dropdown visibility
  const [searchQuery, setSearchQuery] = useState(""); // Track the search input

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
    setDropdownOpen(true); // Show dropdown on hover
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false); // Hide dropdown when mouse leaves
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search input state
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery); // Handle the search action (update as needed)
  };

  return (
    <div>
      <nav className="w-full h-[100px] py-4 bg-blue-950 flex items-center justify-between md:px-28 md:px-16 sm:px-7 px-4 z-50">
        <div
          className="flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-2.5 md:items-center md:p-0 p-4 justify-start md:bg-transparent bg-neutral-100 md:shadow-none shadow-md rounded-md"
        >
          <ul className="list-none flex md:items-center items-start gap-x-20 gap-y-2 text-xl text-white font-medium">
            {navLinks.map((item) => (
              <li
                key={item.to}
                className="relative"
                onMouseEnter={item.dropdown ? handleMouseEnter : null}
                onMouseLeave={item.dropdown ? handleMouseLeave : null}
              >
                <div className="flex items-center gap-x-2">
                  <Link
                    to={item.to}
                    className="transition duration-200"
                  >
                    {item.label}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative flex items-center"
        >
          {/* Search Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-[200px] md:w-[300px] px-10 py-2 text-black rounded-md outline-none"
          />
          {/* Search Button */}
          <button
            type="submit"
            className="absolute left-3 text-gray-500"
          >
            <FaSearch />
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
