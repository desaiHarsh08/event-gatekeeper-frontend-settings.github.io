import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='h-[92px] sm:h-[8vh] w-full p-3 px-4 bg-blue-500 text-white font-medium flex sm:justify-between flex-col items-center sm:flex-row'>
        <div id="left">
            <p  className='hover:text-slate-200 '>
                <span className='text-xl'>@Event_Gatekeeper</span>
            </p>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
