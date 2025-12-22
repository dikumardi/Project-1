import  imgi78 from '../assets/imgi78.png'
import  imgi79 from '../assets/imgi79.png'
import  imgi80 from '../assets/imgi80.png'
import  imgi81 from '../assets/imgi81.png'
import  imgi82 from '../assets/imgi82.png'
import  imgi83 from '../assets/imgi83.png'

const ServicesPages = () => {
  return (
    <section className='w-full min-h-screen mainLayout overflow-x-auto '>
    <div className="flex flex-col items-center justify-center  ">

    <div className="w-200 h-47.5 flex flex-col items-center justify-center mt-20 ">

    <h1 className='text-[48px] '>Apps, websites, logos & more</h1>

    <div className="flex flex-wrap gap-4 mt-10">
     <div className='text-white px-2 py-3 bg-amber-300 rounded-2xl'>Landing Pages</div>
    <div className='text-white px-2 py-3 bg-amber-300 rounded-2xl'>Mobile Apps</div>
    <div className='text-white px-2 py-3 bg-amber-300 rounded-2xl'>Logo</div>
    <div className='text-white px-2 py-3 bg-amber-300 rounded-2xl'>Branding</div>
    <div className='text-white px-2 py-3 bg-amber-300 rounded-2xl'>Icons</div>
    <div className='text-white px-2 py-3 bg-amber-300 rounded-2xl'>Blog Graphics</div>
    <div className='text-white px-2 py-3 bg-amber-300 rounded-2xl'>Slide Decks</div>
    <div className='text-white px-2 py-3 bg-amber-300 rounded-2xl'>Blog Graphics</div>
    <div className='text-white px-2 py-3 bg-amber-300 rounded-2xl'>Brand Guides</div>
    </div>


    </div>
          

    
      {/* Cards container */}
        <div className="w-240 h-153.25 mt-20 flex flex-wrap   sm:gap-8 lg:gap-10  ">
          
          {/* Single card */}
          <div className=" w-74.5 h-74.5 bg-red-500 sm:w-[256px] p-6 flex  flex-col items-center gap-4 rounded-xl ">
          <img src={imgi78} alt="" className='flex ' />
          </div>

           {/* Single card */}
          <div className=" w-74.5 h-74.5 bg-red-500 sm:w-[256px] p-6 flex  flex-col items-center gap-4 rounded-xl">
          <img src={imgi79} alt="" className='flex ' />
          </div>

           {/* Single card */}
          <div className=" w-74.5 h-74.5 bg-red-500 sm:w-[256px] p-6 flex  flex-col items-center gap-4 rounded-xl">
          <img src={imgi80} alt="" className='flex ' />
          </div>

           {/* Single card */}
          <div className=" w-74.5 h-74.5 bg-red-500 sm:w-[256px] p-6 flex  flex-col items-center gap-4 rounded-xl">
          <img src={imgi81} alt="" className='flex ' />
          </div>

           {/* Single card */}
          <div className=" w-74.5 h-74.5 bg-red-500 sm:w-[256px] p-6 flex  flex-col items-center gap-4 rounded-xl">
          <img src={imgi82} alt="" className='flex ' />
          </div>

           {/* Single card */}
          <div className=" w-74.5 h-74.5 bg-red-500 sm:w-[256px] p-6 flex  flex-col items-center gap-4 rounded-xl">
          <img src={imgi83} alt="" className='flex ' />
          </div>






        </div>

                 <button className="mt-20  px-5 py-3 bg-black rounded-xl text-white  active:scale-95">
        See Plans
      </button>

    
    </div>

    
    </section>
  )
}

export default ServicesPages