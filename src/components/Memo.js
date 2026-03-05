import React from 'react'
import { useState , useRef} from 'react'
const Memo = () => {
  const [Y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);
  const ref2 = useRef(null);
 
  const focusInput = () =>{
    ref2.current.click();
  }
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center p-6'>
      <button className='bg-blue-500 text-white px-6 py-2 ' onClick={() =>{x=x+1; console.log(x);}}>Click Me</button>
      <h1 className='text-2xl font-bold text-gray-900 mt-4'>Value of X: {x}</h1>
      <button className='bg-green-500 text-white ' onClick={() =>{setY(Y+1); console.log("StateVar");}}>Increment Y</button>
      <h1 className='text-2xl font-bold text-gray-900 mt-4'>Value of Y: {Y}</h1>
      <button className='bg-purple-500 text-white px-6 ' onClick={() =>{ ref.current = ref.current + 1; console.log(ref.current);}}>Get X from Ref</button>
      <h1 className='text-2xl font-bold text-gray-900 mt-4 ' 
      >Value of X from Ref: {ref.current}</h1>
      <input ref={ref2} className='border px-4 py-2' type="file" placeholder='Focus on me'/>
      <button className='bg-yellow-500 text-white px-6 ' onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default Memo
