import React from 'react';

interface ContactProps {
  className: string;
}


export default function Contact({ className }: ContactProps) {
  return (
    <div id='contact' className={`${className}min-h-screen flex items-center justify-center  `}>
      <h1 className="text-4xl text-white font-semibold">Contact</h1>
    </div>
  );
}
