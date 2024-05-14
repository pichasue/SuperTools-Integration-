import React from 'react';

const NavBar = () => {
  return (
    <nav>
      {/* Logo */}
      <div>
        <img src="https://assets.super.so/9b1db7dc-155d-4da6-bf88-a68ad1c2af0f/uploads/logo/6b5058c2-94fe-4d1a-90b6-727882b1acf7.png" alt="SuperTools Logo" width={150} height={50} />
      </div>
      {/* Navigation Links */}
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#tools">Tools</a></li>
        {/* Join for Free button */}
        <li><a href="#join" className="join-for-free">Join for Free</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
