import React from 'react';

const Header = () => {
  return (
    <div className="shadow-lg">
      {/* Top Section with Logo and Title */}
      <div className="md:px-4 py-1 md:flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center ml-2 text-xl font-semibold">
          <img
            src="Logo Letter.jpg"
            alt="Company Logo"
            className="h-[40px] md:h-[60px] w-auto"
          /> {/* Logo adjusts height */}
          <span className="inline-block text-white font-semibold text-lg md:text-2xl bg-blue-400 transform skew-x-12 px-2 md:px-4 py-1 md:py-2 mt-2">
            Right Technologies
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <div className="text-center md:text-left text-sm md:text-xl font-semibold md:px-8 py-1 px-4">
        Consultants Private Limited
      </div>

      {/* Address - Centered for smaller screens */}
      <div className="text-center md:text-end font-medium text-gray-800 py-2 px-4 md:pr-[40px] cursor-pointer text-sm md:text-2xl">
        Address: 1124, E-Square, Sector 96, Noida, 201303
      </div>
    </div>
  );
};

export default Header;
