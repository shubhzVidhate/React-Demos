import React from 'react'
import RightCard from './RightCard';

const RightContent = () => {
  return (
    <div id='hide-scrollbar' className='bg-red-100 flex gap-6 flex-nowrap rounded-4xl overflow-x-scroll p-5 h-full w-3/4'>
        <RightCard />
        <RightCard />
        <RightCard />
        <RightCard />
    </div>
  )
}

export default RightContent;