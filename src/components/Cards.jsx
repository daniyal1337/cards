import React from 'react';
import { FiFileText } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
import { motion } from "framer-motion";
function Cards({data,reference}) {


  return (

      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={.2} dragTransition={{ bounceStiffness:600, bounceDamping: 10 }} className=' relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-700 text-white py-10 px-8 overflow-hidden'>

      <FiFileText />
   
        <p className='text-sm leading-tight mt-5 font-semibold  '>{data.desc} </p>
        <div className='footer absolute bottom-0 w-full     left-0 '>
        <div className='flex items-center justify-between py-3 px-8 mb-3'>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 bg-zinc-500 rounded-full  flex items-center justify-center'>
       
          <BsDownload size=".7em" color='#000' />
          </span>
         

        </div>

        {data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600": "bg-green-600"} flex items-center justify-center`}> 
        <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
        </div>
        

          )
        }
        
        </div> 
         </motion.div>


    
  )
}

export default Cards
