import React from 'react'

const ProcessSection = () => {
  return (
    <section className='mainLayout w-full h-screen flex flex-col items-center justify-center '>
    <div className='w-160  '>
    <h2 className='text-[48px] text-center mx-20 leading-12 mb-6'>We didn’t reinvent the  wheel. Just design.</h2>
    <p className='text-[20px]  text-center'>Design as you know it is out the door. Design as you want it <br /> just arrived.</p>
    </div>
    <div className=" w-218 h-42.5 mt-20 flex gap-10">

    <div className="w-[256px] h-40  flex flex-col items-center justify-center p-3 ">
          <div className='w-20 h-20 bg-emerald-600 rounded-full items-center text-center mb-3' ></div>
          <p>Subscribe to a plan & request as many designs as you’d like.</p>
    </div>

     <div className="w-[256px] h-40  flex flex-col items-center justify-center p-3 ">
          <div className='w-20 h-20 bg-emerald-600 rounded-full items-center text-center mb-3' ></div>
          <p>Receive your design within two business days on average.</p>
              </div>
     <div className="w-[256px] h-40  flex flex-col items-center justify-center p-3 ">
          <div className='w-20 h-20 bg-emerald-600 rounded-full items-center text-center mb-3' ></div>
          <p>We'll revise the designs until you're 100% satisfied.</p>
    </div>
    

    </div>
     <button className='mt-7 px-6 py-3 bg-black text-white rounded-xl'>See Plans</button>
    </section>
  )
}

export default ProcessSection