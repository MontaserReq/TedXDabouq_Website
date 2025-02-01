import React from 'react'

interface AboutusProps {
  className: string;
}


function Aboutus({className}:AboutusProps) {
  return (
    <div className={`${className}min-h-screen flex items-center justify-center bg-[url('/images/Cover1.svg')] bg-cover bg-center bg-no-repeat  `}>
      <h1 className=' text-4xl text-red-600  font-semibold'>Aboutus</h1>
    </div>
  )
}

export default Aboutus