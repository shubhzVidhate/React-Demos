
import RightCard from './RightCard';

const RightContent = (props) => {
  return (
    <div id='hide-scrollbar' className=' flex gap-6 flex-nowrap rounded-4xl overflow-x-scroll p-5 h-full w-3/4'>
        {
          props.data.map((card,index)=>{
            return <RightCard key={index} data={card} id={index} />
          })
        }
            
        
    </div>
  )
}

export default RightContent;