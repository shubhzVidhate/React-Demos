import React from 'react'

const Form = () => {
    return (
        <div className="md:w-1/2 sm:w-full  h-full flex items-center justify-center md:border-r-2">
            <form className="px-10 py-10 flex flex-col gap-10 border rounded-md m-5 w-full">
                <input type="text" placeholder='Enter Note Title...' className="border text-xl w-full p-3 outline-none rounded-md" />
                <textarea placeholder='Enter Note Description...' className="border text-xl w-full p-3 outline-none rounded-md" />
                <button className="border text-xl hover:bg-blue-200 w-full p-3 rounded-md">
                    SUBMIT
                </button>
            </form>
        </div>
    );
};


export default Form