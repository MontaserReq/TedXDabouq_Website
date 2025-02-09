import React from 'react'

interface SpeakersProps {
  className: string;
}

export default function Speakers({className}:SpeakersProps) {
  return (
    <div id='speakers' className={`${className} min-h-screen text-white flex items-center align-middle justify-center  `}>
    <h1 className=' text-4xl text-secondry-red font-semibold'>Speakers</h1>
  </div>  )
}
