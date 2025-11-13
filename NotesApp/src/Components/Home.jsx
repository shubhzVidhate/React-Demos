import { useState } from 'react';
import Notes from './Notes';
import MyForm from './MyForm';

const Home = () => {
    const [newData,setNewData] = useState([]);

    const handleXCLick = (index)=>{
        const filteredData = newData.filter((item,idx)=> idx !== index);
        setNewData(filteredData);
    }
    const handledatafromneiborchild = (data) => {
        setNewData(data);
    }
    
    
    return (
        <div className='h-screen'>
            <div className='w-full flex justify-between px-10 py-4 bg-blue-400'>
                <h1 className='text-blue-200 lg:text-2xl md:text-sm font-bold leading-tight text-shadow-2xs '>NOTE</h1>
                <div className='h-[30px] w-[30px] bg-blue-200 rounded-2xl'></div>
            </div>
            <div className="h-[91.4%] md:flex bg-blue-100">
                <MyForm handledata={handledatafromneiborchild} />
                <Notes  data={newData} handleXCLick={handleXCLick}/>
            </div>
        </div>
    )
}

export default Home;