import React from 'react';

const Logo = () => {
  return (
    <div className="relative flex items-center space-x-3">
      {/* Logo Icon */}
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 120 120"
        className="fill-primary cursor-pointer h-[40px] w-[40px]"
      >
        <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="5" fill="none" />
        <path
          d="M60,35 L75,85 L60,70 L45,85 Z"
          fill="currentColor"
        />
      </svg>

      {/* Text */}
      <h5 className="text-3xl font-bold tracking-tight text-primary">
        Inkwire
      </h5>
    </div>
  );
};

export default Logo;
