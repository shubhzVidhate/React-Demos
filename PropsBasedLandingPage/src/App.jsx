import Section1 from './component/section1/Section1.jsx';
import Section2 from './component/section2/Section2.jsx';

const App = () => {

  const data = [
    {
      img:"https://images.unsplash.com/photo-1507206130118-b5907f817163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro:"",
      tag:"Satisfied"
    },
    {
      img:"https://images.unsplash.com/photo-1759593218431-6f1585bc14de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=704",
      intro:"",
      tag:"Motivated"
    },
    {
      img:"https://images.unsplash.com/photo-1630344745884-9c93c4593f70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=686",
      intro:"",
      tag:"Confident"
    },
    {
      img:"https://images.unsplash.com/photo-1727268531066-1df9a7b21b3f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro:"",
      tag:"Inspired"
    },
  ];

  return (
    <div>
        <Section1 data={data}/>
        <Section2 />
    </div>
  )
}

export default App;