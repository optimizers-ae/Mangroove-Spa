import React from 'react';
import { Link } from 'react-router-dom';

const BrandLogo = ({ variant = 'default', size = 'md', className = '', link = true }) => {
  const badgeSize = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  const content = (
    <div className={`flex items-center gap-3 group transition-transform duration-300 ${className}`}>
      {/* Authentic Original Logo Badge */}
      <div className={`relative overflow-hidden rounded-full p-[2px] bg-gradient-to-tr from-[#C6A66B] via-[#E0C79B] to-[#9E7D42] shadow-md shadow-[#102F27]/20 flex-shrink-0 ${badgeSize[size] || badgeSize.md}`}>
        <div className="w-full h-full rounded-full overflow-hidden bg-[#102F27] flex items-center justify-center p-[2px]">
          <img
            src="/mangroove-logo.png"
            alt="Mangroove Spa Emblem"
            className="w-full h-full object-cover rounded-full filter contrast-105 group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      {variant !== 'badge-only' && (
        <div className="flex flex-col text-left">
          <span className="font-display tracking-[0.2em] text-base md:text-lg font-bold leading-tight text-[#E8DDCE] group-hover:text-[#C6A66B] transition-colors duration-300">
            MANGROOVE
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="h-[1px] w-3 bg-[#C6A66B]/60"></span>
            <span className="font-sans tracking-[0.32em] text-[9px] md:text-[11px] text-[#C6A66B] font-semibold uppercase">
              SPA · WELLNESS
            </span>
            <span className="h-[1px] w-3 bg-[#C6A66B]/60"></span>
          </div>
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <Link to="/" className="inline-block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A66B]">
        {content}
      </Link>
    );
  }

  return content;
};

export default BrandLogo;
