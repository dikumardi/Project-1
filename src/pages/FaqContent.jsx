import smileFace from '../assets/smileFace.png'

const FaqContent = () => {
  return (
    <section className="mainLayout min-h-screen w-full flex flex-col items-center px-4 relative">
      
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">

        {/* FAQ Questions */}
        <div className="flex-1 flex flex-col gap-3">
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-snug'>
            Commonly asked questions
          </h2>
          <div className="flex flex-col gap-4 sm:gap-6 mt-4">
            <p className='text-sm sm:text-base'>How does the pause feature work?</p>
            <p className='text-sm sm:text-base'>Is there a limit to how many requests I can have?</p>
            <p className='text-sm sm:text-base'>How fast will I receive my designs?</p>
            <p className='text-sm sm:text-base'>Who are the designers?</p>
            <p className='text-sm sm:text-base'>Who are the designers?</p>
            <p className='text-sm sm:text-base'>Who are the designers?</p>
            <p className='text-sm sm:text-base'>Why wouldn't I just hire a full-time designer?</p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white p-6 rounded-xl">
          <img src={smileFace} alt="" className='w-36 sm:w-44 md:w-48' />
          <h3 className='text-2xl sm:text-3xl md:text-4xl text-center mt-4'>
            Book a 15-minute <br /> intro call
          </h3>
          <button className="px-5 py-3 bg-black rounded-xl text-white mt-6 active:scale-95">
            Schedule Now
          </button>
        </div>

      </div>

    </section>
  )
}

export default FaqContent
