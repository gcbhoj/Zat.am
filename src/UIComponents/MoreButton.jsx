import React from 'react'

const MoreButton = () => {
  return (
    <div className="flex gap-0.5 mb-5 mt-1 cursor-pointer relative group">
      <div className="size-2 rounded-full bg-conic/decreasing from-slate-100 via-gray-600 to-amber-500 animate-spin"></div>
      <div className="size-2 rounded-full bg-conic/decreasing from-slate-100 via-gray-600 to-amber-500 animate-spin"></div>
      <div className="size-2 rounded-full bg-conic/decreasing from-slate-100 via-gray-600 to-amber-500 animate-spin"></div>

      <span className="absolute right-full -translate-y-1/2 ml-1 px-1 py-1 text-[12px] text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 italic tracking-[1.75px] ">
        More
      </span>
    </div>
  );
}

export default MoreButton