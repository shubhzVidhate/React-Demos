import React, { useState } from 'react'

const Form = ({handledata}) => {

    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');
    const [task,setTask] = useState([]);

    const handleFormClick = (e) => {
        e.preventDefault();
        const newTask = {Title: title, Desc: desc};
        const updatedData = [...task, newTask];
        setTask([...task, newTask]);
        handledata(updatedData);
        setTitle('');
        setDesc('');

    }

    const handleTitleClick = (e) => {
        setTitle(e.target.value);
    }

      const handleDescClick = (e) => {
        setDesc(e.target.value);
    }
    
    return (
        <div className="md:w-1/2 sm:w-full  h-full flex items-center justify-center md:border-r-2">
            <form className="px-10 py-10 flex flex-col gap-10 border rounded-md m-5 w-full">
                <input type="text" value={title} onChange={handleTitleClick} placeholder='Enter Note Title...' className="border text-xl w-full p-3 outline-none rounded-md" />
                <textarea value={desc} placeholder='Enter Note Description...' onChange={handleDescClick} className="border text-xl w-full p-3 outline-none rounded-md" />
                <button onClick={handleFormClick} className="border text-xl hover:bg-blue-200 w-full p-3 rounded-md">
                    SUBMIT
                </button>
            </form>
        </div>
    );
};


export default Form