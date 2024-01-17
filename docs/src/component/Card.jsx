import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion"
function Card({data,referance}) {
  return (
    <motion.div drag dragConstraints={referance} whileDrag={{scale:1.1} } dragElastic={0.1} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 px-8 py-10 text-white overflow-hidden'>
        <FaFileAlt></FaFileAlt>
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full  left-0    '>
           <div className='flex items-center justify-between  px-8  py-3 mb-3 '>
           <h5>{data.filesize}</h5>
           <span className='w-7 h-7 bg-zinc-200 rounded-full flex items-center justify-center'>
{data.close ? <MdOutlineClose></MdOutlineClose> : <MdDownload size='.7em' color='#000'></MdDownload>}

            
           </span>
           </div>
{
    data.tag.isOpen && (  <div className={`tag w-full py-4 ${data.tag.tagColor==="blue" ? "bg-blue-200" : "bg-green-800"} flex items-center justify-center`}>
    <h3 className='text-sm font-semibold'>{data.tag.tagTitle} </h3>

          </div>

    ) 
}
         

      
        </div>

    </motion.div>
  )
}

export default Card