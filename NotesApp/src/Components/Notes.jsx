import React from 'react'

const Notes = () => {
    return (
        <div className="md:w-1/2 sm:w-full  h-full pt-5 pl-5 flex flex-wrap gap-5 overflow-auto">
            <div className='relative w-40 h-50 bg-white'>
                <div className='flex justify-between px-3 pt-2'>
                    <div className='h-5 w-5 bg-red-400 text-white rounded-full absolute font-bold top-2 right-2 flex items-center justify-center'>X</div>
                    <small className='bg-amber-300 py-1 px-1 rounded upp'>Complete</small>
                </div>
                <div className='my-3 mx-2'>
                    <h2 className='font-bold text-lg mb-1'>ReactJS</h2>
                    <p className='text-gray-500'>React is a JavaScript library for building user interfaces...</p>
                </div>
            </div>
        </div>
    )
}

export default Notes