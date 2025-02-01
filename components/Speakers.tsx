import React from 'react'

interface SpeakersProps {
  className: string;
}

export default function Speakers({className}:SpeakersProps) {
  return (
    <div className={`${className}min-h-screen text-white flex items-center justify-center bg-[url('/images/Cover2-red.svg')] bg-cover bg-center bg-no-repeat `}>
    <h1 className=' text-4xl text-secondry-red font-semibold'>Speakers</h1>
  </div>  )
}
