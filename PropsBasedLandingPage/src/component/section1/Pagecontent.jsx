import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Pagecontent = (props) => {
  return (
    <div className='py-10 flex gap-10 items-center px-18 h-[90vh]'>
        <LeftContent />
        <RightContent data={props.data} />
    </div>
  )
}

export default Pagecontent