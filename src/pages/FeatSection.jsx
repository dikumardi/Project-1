import man from '../assets/man.png'

const FeatSection = () => {
  return (
    <section className='mainLayout w-full h-screen' >
    
    <div className="w-350 h-15.05 flex   justify-center ">
    <div className="w-5xl flex gap-10">

    <div className="w-122 bg-white  p-10  ">
    <h5 className='text-[24px]'>“Design is everything, and these guys have nailed it.”</h5>
   
   <div className=" flex gap-30">
    <div className=" flex flex-col mt-30 whitespace-nowrap  ">
     <div >Kevin O'Leary</div>
     <div >Shark Tank</div> 
     </div>
     <img src={man} alt="" className='w-53 h-41.5'  />
     </div>
   </div>


     



  <div className=" w-106 h-89 flex flex-col gap-15">
    <div className=" flex flex-col ">
     <h1 className='text-[24px]'>Totally async</h1>
     <p className='text-[14px]'>Don't like meetings? We don't either; so much so that we've outlawed them completely.</p>
    </div>
    <div>
     <h1 className='text-[24px]'>Manage with Trello</h1>
     <p className='text-[14px]'>Manage your design board using Trello. View active, queued and completed tasks with ease.</p>
    </div>
    <div>
     <h1 className='text-[24px]'>Invite your team</h1>
     <p className='text-[14px]'>Invite your entire team, so anyone can submit requests and track their progress.</p>
    </div>
     </div>
    
   
   </div>



    </div>
    </section>
  )
}

export default FeatSection

    //  <img src={man} alt="" className='w-53 h-41.5'  />
