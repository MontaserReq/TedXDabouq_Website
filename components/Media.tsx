import React from 'react'

interface MediaProps {
  className: string;
}


export default function Media({ className }: MediaProps) {
  return (
    <div id='media' className={`${className}min-h-screen text-white flex items-center justify-center  `}>
    <h1 className=' text-4xl text-secondry-red font-semibold'>Media</h1>
  </div>  )
}
