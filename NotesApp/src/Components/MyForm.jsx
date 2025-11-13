import { useState } from 'react';

const MyForm = ({ handledata }) => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [imp, setImp] = useState(false);
    const [task, setTask] = useState([]);

    const handleFormClick = (e) => {
        e.preventDefault();
        const newTask = { Title: title, Desc: desc, Important: imp };
        const updatedData = [...task, newTask];
        setTask([...task, newTask]);
        handledata(updatedData);

        setTitle('');
        setDesc('');
        setImp(false);

    }

    const handleTitleClick = (e) => {
        setTitle(e.target.value);
    }

    const handleDescClick = (e) => {
        setDesc(e.target.value);
    }

    const handleCheckboxClicked = (e) => {
        setImp(e.target.checked);
    }

    return (
       
            <div className="md:w-1/2 sm:w-full  h-full flex items-center justify-center md:border-r-2">
                <form  className="px-10 text-black py-10  border rounded-md m-5 w-full">
                    <div className='flex flex-col gap-10'>
                        <input type="text" value={title} onChange={handleTitleClick} placeholder='Enter Note Title...' className="border text-xl w-full p-3 outline-none rounded-md" />
                        <textarea value={desc} placeholder='Enter Note Description...' onChange={handleDescClick} className="border text-xl w-full p-3 outline-none rounded-md" />
                    </div>
                    <label className="flex items-center gap-3 mt-2 mb-10 text-md font-bold cursor-pointer select-none">
                        <span>This might be important — or maybe it’s not, check!</span>
                        <input
                            onChange={handleCheckboxClicked}
                            checked={imp}
                            type="checkbox"
                            className="w-5 h-5 accent-blue-500 rounded cursor-pointer"
                        />
                    </label>
                    <button onClick={handleFormClick} className="border text-xl hover:bg-blue-200 w-full p-3 rounded-md">
                        SUBMIT
                    </button>
                </form>
            </div>
    );
};


export default MyForm;