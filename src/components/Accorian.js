import React from 'react'
import { useState } from 'react';
import ListItems from './ListItems';
export default function Accorian({ title,open,setOpen }) {
  const toggleAccordion = () => {
    setOpen();
  };

  return (
    <div className='my-1 shadow-md mb-5 border-gray-200 px-4 py-2  w-64'>
      <div className='flex justify-between '>
        <h1>{title}</h1>
        <button className='bg-black text-white px-2  rounded-md ' onClick={toggleAccordion}>
          {open ? 'Hide' : 'Show'}
        </button>
      </div>
      {
        open && <ListItems />
      }
    </div>
  )
}
