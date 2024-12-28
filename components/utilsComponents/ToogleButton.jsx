'use client'

import React, { useState } from "react";

function ToogleButton({isChecked,className,...props}) {
  
   

  

  return (
    <>
    <div className={`themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center w-[80px] ${className}`} {...props}>
      {/* <input
        type='checkbox'
        checked={isChecked}
        className='sr-only'
      /> */}
      <span className={`label flex items-center text-xs font-bold  absolute  ${ isChecked ? 'left-2 text-green-600' : 'right-2 text-red-600' }`}>
      { isChecked ? 'Present' : 'Absent' }
      </span>
      <span
        className={`slider  flex h-7 w-[80px] items-center rounded-full p-1 duration-200 border-2 ${
          isChecked ? 'border-green-600' : 'border-red-600' 
        }`}
      >
        <span className={`dot h-5 w-5 rounded-full  duration-200 shadow-sm ${ isChecked ? 'translate-x-[48px] bg-green-600 ' : 'bg-red-600' }`}  ></span> </span>
     
    </div>
  </>
  );
}

export default ToogleButton;
