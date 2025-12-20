import React from 'react'

const ProjectsContainer = (props) => {
    
  return (
    <section className='w-full  mainLayout overflow-x-auto flex shrink-0 '>
    <div className="flex  gap-10  "
   onWheel={()=>{console.log('scrolling');
   }}>
     <div className="w-87.5  bg-amber-200 rounded-xl"><img src={props.img1} alt="" /></div>
     <div className="w-87.5  bg-amber-200 rounded-xl"><img src={props.img3} alt="" /></div>
     <div className="w-87.5  bg-amber-200 rounded-xl"><img src={props.img4} alt="" /></div>
    <div className="w-87.5  bg-amber-200 rounded-xl"><img src={props.img2} alt="" /></div>
     <div className="w-87.5  bg-amber-200 rounded-xl"><img src={props.img1} alt="" /></div>
     
    </div>
    
    </section>
  )
}

export default ProjectsContainer