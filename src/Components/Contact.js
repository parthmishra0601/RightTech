import React from 'react';

const Contact = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src="/Services2.jpg" // Ensure the image is in the public directory or adjust path as needed
        alt="Contact Us"
        className="w-full h-[300px] object-cover"
      />

      {/* Overlay Text with Less Bright Fluorescent Silver and 3D Effect */}
      <h3
        className="absolute inset-0 flex justify-start items-start pt-[140px] pl-[80px] text-white text-8xl"
        style={{
          fontFamily: 'Impact, Arial, sans-serif',
          color: 'rgba(255, 255, 255, 0.8)', // Slightly muted fluorescent silver
          textShadow: `4px 4px 5px rgba(192, 192, 192, 0.5), 
                       -2px -2px 3px rgba(255, 255, 255, 0.4), 
                       0px 0px 10px rgba(186, 192, 192, 0.6), 
                       0px 0px 25px rgba(186, 192, 192, 0.3)`,  
        }}
      >
        Contact Us
      </h3>
    </div>
  );
};

export default Contact;
