import React from 'react'

interface TicketsProps {
  className: string;
}


export default function Tickets({className}:TicketsProps) {
  return (
    <div className={`${className}min-h-screen text-white flex items-center justify-center  `}>
    <h1 className=' text-4xl text-secondry-red font-semibold'>Tickets</h1>
  </div>  )
}
