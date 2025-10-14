
import Navbar from './Navbar'
import Pagecontent from './Pagecontent'

const Section1 = (props) => {
  return (
    <div>
      <Navbar />
      <Pagecontent data={props.data} />
    </div>
  )
}

export default Section1