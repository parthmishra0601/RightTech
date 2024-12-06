import React from 'react';

const Header = () => {
  return (
    <div className="shadow-lg">
      {/* Top Section with Logo and Title */}
      <div className="md:px-4 py-1 md:flex justify-between items-center"> {/* Reduced padding to reduce height */}
        {/* Logo and Title */}
        <div className="flex items-center ml-2 text-xl font-semibold"> {/* Removed bg color from the container */}
          <img src="Logo Letter.jpg" alt="Company Logo" className="h-[60px]" /> {/* Reduced logo height */}
          <span className="inline-block text-white font-semibold text-2xl bg-blue-400 transform skew-x-12 px-4 py-2 mt-2"> {/* Slanted box to the right */}
           Right technologies
          </span> 
        </div>
      </div>

      {/* Subtitle */}
      <div className="text-xl font-semibold md:px-8 py-1 px-6 ml-4"> {/* Moved to the right */}
        Consultants Private Limited
      </div>

      {/* Address - Centered */}
      <div className="text-end font-medium text-gray-800 py-1 pr-[40px] cursor-pointer text-2xl pb-[20px]"> {/* Reduced padding */}
        Address: 1124, E-Square, Sector 96, Noida, 201303
      </div>
    </div>
  );
};

export default Header;
