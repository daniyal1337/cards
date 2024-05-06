import React, { useRef, useState } from 'react'
import Cards from './Cards'


function Foreground() {
  const ref =useRef(null);
  const data=[
      {
        desc:"fazar phadni hai", 
        filesize:".9mb", 
        tag:{isOpen:true, tagTitle:"Download Now", tagColor:"green"},
       },
       {
        desc:"zuahr bhi phadni hai", 
        filesize:".9mb", 
        tag:{isOpen:true, tagTitle:"Upload", tagColor:"blue"},
       },
       {
        desc:"asar bhi phadni hai!", 
        filesize:".9mb", 
        tag:{isOpen:true, tagTitle:"Upload", tagColor:"green"},
       },
       {
        desc:"maghrib to har keemat pe phadni hai.", 
        filesize:".9mb", 
        tag:{isOpen:true, tagTitle:"Upload", tagColor:"green"},
       },
       {
        desc:"isha to chod hi nahi sakte!...", 
        filesize:".9mb", 
        tag:{isOpen:false, tagTitle:"Upload", tagColor:"green"},
       },
       {
        desc:"phir tahajud nhi complete kar lena okk Daniyal...", 
        filesize:".9mb", 
        tag:{isOpen:true, tagTitle:"Upload", tagColor:"green"},
       },
  ];
  
  return (
  
      <div ref={ref} className=' fixed top-0 left-0  z-[3] w-full h-full flex gap-10 flex-wrap p-5 '>
       
        {data.map((item,index)=>(
          <Cards data={item} reference={ref}/>
          
        ))}

      </div>
    

   
  )
}

export default Foreground
