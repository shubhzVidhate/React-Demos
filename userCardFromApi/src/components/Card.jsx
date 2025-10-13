import React from 'react'

const Card = (props) => {

    const { name, role, company, skills, rate_per_hour, age, availability, image, description } = props.data;
    return (

        <div style={{ boxShadow: '0 1px 2px rgba(255, 255, 255, 0.5)' }} className="w-[300px] bg-gradient-to-b from-gray-800 to-black text-white p-6 rounded-xl flex flex-col items-center gap-6 shadow-xl shadow-black">
            <div className='flex items-center w-full'>
                {availability && (
                    <h6 className='text-gray-100 bg-green-600 px-2 rounded-xl'>Available</h6>
                )}
                <div className='ml-auto text-right text-gray-100'>${rate_per_hour}/hr</div>
            </div>

            <div className="center-desc">
                <div className='h-24 w-24 rounded-full overflow-hidden mx-auto'>
                    <img src={image} alt="image" className="h-full w-full object-cover" />
                </div>
                <h4 className='text-center font-bold my-2'>{name}</h4>
                <p className='text-center text-gray-400 text-xs'>{role}</p>
                <h4 className='text-center text-green-400 text-xs my-1'>{company}</h4>
                <div className='my-4'>
                    <ul className='flex justify-center gap-2'>
                        {skills.slice(0, 3).map((skill, index) => (
                            <li key={index} className='px-2 border bg-gray-200 text-gray-600 rounded-2xl text-xs text-center'>
                                {skill}
                            </li>
                        ))}

                        {skills.length > 3 && (
                            <li className='px-3 border bg-gray-200 text-gray-600 rounded-2xl text-xs text-center'>
                                {skills.length - 3}+
                            </li>
                        )}

                    </ul>
                </div>
                <p className='text-center text-xs text-gray-500 my-2'>{description}</p>
            </div>
            <div className="hover:bg-green-500 w-full text-gray-600 bg-white hover:text-white text-center p-2 rounded-lg cursor-pointer">
                <button>VIEW PROFILE</button>
            </div>
        </div>
    )
}

export default Card