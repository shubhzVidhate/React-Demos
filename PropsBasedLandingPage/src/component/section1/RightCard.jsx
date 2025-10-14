import React from 'react'
import CardText from './CardText'

const RightCard = () => {
  return (
    <div className='h-full shrink-0 w-80 relative overflow-hidden rounded-4xl'>
        <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1507206130118-b5907f817163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="" />
        <CardText />
    </div>
  )
}

export default RightCard