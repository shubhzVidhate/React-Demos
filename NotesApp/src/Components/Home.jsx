import React from 'react'
import Form from './Form'
import Notes from './Notes';

const Home = () => {
    return (
        <div className='h-screen'>
            <div className='w-full flex justify-between px-10 py-4 bg-blue-400'>
                <h1 className='text-blue-200 lg:text-2xl md:text-sm font-bold leading-tight text-shadow-2xs '>NOTE</h1>
                <div className='h-[30px] w-[30px] bg-blue-200 rounded-2xl'></div>
            </div>
            <div className="h-[91.4%] md:flex bg-blue-100">
                <Form />
                <Notes />
            </div>
        </div>
    )
}

export default Home;