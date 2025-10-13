import React from 'react'

const Card = () => {
    return (
    
           <div className="w-[300px] bg-gradient-to-b from-gray-800 to-black text-white p-6 rounded-xl flex flex-col items-center gap-6 shadow-xl shadow-black">
                <div className='flex justify-between w-full ' >
                    <h6 className='text-gray-100 bg-green-600 px-2 rounded-xl'>available</h6>
                    <div>$55/hr</div>
                </div>
                <div className="center-desc">
                    <div className='h-24 w-24 rounded-full overflow-hidden mx-auto'>
                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="image" className="h-full w-full object-cover" />
                    </div>

                    <h4 className='text-center font-bold my-2'>Wade Wilson</h4>
                    <p className='text-center text-gray-400 text-xs'>UI/UX designer</p>
                    <h4 className='text-center text-green-400 text-xs my-1'>Epic Coders</h4>
                    <div className='my-2'>
                        <ul className='flex justify-center gap-2'>
                            <li className='px-3 border bg-gray-200 text-gray-600 rounded-2xl text-xs text-center'>UI</li>
                            <li className='px-3 border bg-gray-200 text-gray-600 rounded-2xl text-xs text-center'>UX</li>
                            <li className='px-3 border bg-gray-200 text-gray-600 rounded-2xl text-xs text-center'>PhotoShop</li>
                        </ul>
                    </div>
                    <p className='text-center text-xs text-gray-500 my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas earum corrupti quo non animi praesentium vero repellendus laboriosam. In?</p>
                </div>
                <div className="hover:bg-green-500 w-full text-gray-600 bg-white hover:text-white text-center p-2 rounded-lg cursor-pointer">
                    <button>VIEW PROFILE</button>
                </div>
            </div>
    )
}

export default Card