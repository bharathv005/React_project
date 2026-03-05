import React,{useState} from 'react'
import Accorian from './Accorian';


const Men = () => {
  const [open,setOpen] = useState(0);
  return (
    <div  className='max-w-6xl mx-auto mt-10'>
      <h1 className='font-bold text-xl'>Filter options</h1>
      {["Gender","Mens","Women","Kids","Unisex"].map((item, index) => (
        <Accorian 
        key={item} 
        title={item}
        open={index==open?true:false}
        setOpen={() => setOpen(index)}
         />
      ))}
    </div>
  )
}

export default Men;

