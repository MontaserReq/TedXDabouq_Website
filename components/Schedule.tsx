import React from 'react'

interface ScheduleProps {
  className: string;
}


export default function Schedule({className}:ScheduleProps) {
  return (
    <div id='schedule' className={`${className}min-h-screen flex text-white items-center justify-center  `}>
    <h1 className=' text-4xl text-secondry-red font-semibold'>Schedule</h1>
  </div>  )
}
