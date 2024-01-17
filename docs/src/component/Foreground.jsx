import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
    const ref=useRef(null);

    const data=[{
        desc:"tetur adipisicing elit. Consequuntur, rerum!",
        filesize:"0.8Mb",
        close:true,
        tag:{
            isOpen:true,
            tagTitle:"Download Now ", tagColor:"green"
        }
    },{
        desc:"tetur adipisicing elit. Consequuntur, rerum!",
        filesize:"0.8Mb",
        close:true,
        tag:{
            isOpen:false,
            tagTitle:"Download Now ", tagColor:"blue"
        }
    },{
        desc:"tetur adipisicing elit. Consequuntur, rerum!",
        filesize:"0.8Mb",
        close:false,
        tag:{
            isOpen:true,
            tagTitle:"Download Now ", tagColor:"green"
        }
    }]
  return (

    <div ref={ref} className=' fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>

   {data.map((item,indes)=>(
    <Card data={item} referance={ref}></Card>
   ))}
 
   

    </div>

  )
}

export default Foreground