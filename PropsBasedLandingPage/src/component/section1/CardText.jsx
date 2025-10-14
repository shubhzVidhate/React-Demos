import React from 'react'

const CardText = () => {
    return (
        <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-8 '>
            <h2 className='bg-white h-10 w-10 rounded-full flex justify-center items-center font-bold text-xl'>1</h2>
            <div>
                <p className='text-lg leading-relaxed mb-10 text-white text-shadow-gray-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, error sit atque nobis delectus facilis?</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 px-8 py-2 font-semibold text-white rounded-full'>Satisfied</button>
                    <button className='bg-blue-600 px-3 py-2 font-semibold text-white rounded-full'><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default CardText