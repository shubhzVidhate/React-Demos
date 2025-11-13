import React from 'react'

const Notes = ({ data,handleXCLick }) => {   

    
    return (
        <div className="md:w-1/2 sm:w-full  h-full pt-5 pl-5 flex flex-wrap gap-5 overflow-auto">
            {
               data.length >= 1 ?  data.map((item, index) => (
                    <div key={index} className='relative w-40 h-50 bg-white cursor-pointer'>
                        <div className='flex justify-between px-3 pt-2'>
                            <div onClick={()=>handleXCLick(index)} className='h-5 w-5 bg-red-400 text-white rounded-full absolute top-2 right-2 flex items-center justify-center'>X</div>
                            {
                                item.Important && <small className='bg-amber-400 text-white py-1 px-1 rounded upprcase'>IMP</small>
                            }
                        </div>
                        <div className='my-3 mx-2'>
                            <h2 className='font-bold text-lg mb-1'>{item.Title}</h2>
                            <p className='text-gray-500'>{item.Desc}</p>
                        </div>
                    </div>
                )) : <h1 className='text-gray-500'>🫥 No Notes Available</h1>
            }



        </div>
    )
}

export default Notes