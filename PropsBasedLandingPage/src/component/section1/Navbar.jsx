import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex justify-between py-8 px-10'>
        <h4 className='uppercase bg-black rounded-full px-3 py-1 font-bold text-white '>Target Audience</h4>
        <button className='uppercase bg-gray-300 hover:bg-gray-400 text-sm rounded-full px-3 py-1'>digital banking platform</button>
    </div>
  )
}

export default Navbar;