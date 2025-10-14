import CardText from './CardText'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-80 relative overflow-hidden rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.data.img} alt="" />
        <CardText tag={props.data.tag} color={props.data.color} id={props.id}/>
    </div>
  )
}

export default RightCard;