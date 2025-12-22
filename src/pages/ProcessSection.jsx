import  media1 from '../assets/media1.svg'
import  media1arrows from '../assets/media1arrows.svg'
import  media2 from '../assets/media2.svg'
import  media3 from '../assets/media3.svg'

const ProcessSection = () => {
  return (
    <section className="mainLayout w-full min-h-screen flex flex-col items-center justify-center px-4">
      
      {/* Heading section */}
      <div className="max-w-3xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight mb-4">
          We didn’t reinvent the wheel. Just design.
        </h2>
        <p className="text-base sm:text-lg md:text-[20px]">
          Design as you know it is out the door. Design as you want it <br className="hidden sm:block" />
          just arrived.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 flex flex-col sm:flex-row gap-8">
        
        <div className="w-full sm:w-[256px] flex flex-col items-center text-center p-4">
          <div className="w-20 h-20 rounded-full mb-3">
          <img src={media1} alt="" />
          <img src={media1arrows} alt="" className='absolute 
           right-48 top-385
           sm:
          lg:top-375 left-112   w-13'/>
          </div>
          <p>
            Subscribe to a plan & request as many designs as you’d like.
          </p>
        </div>

        <div className="w-full sm:w-[256px] flex flex-col items-center text-center p-4">
          <div className="w-20 h-20 rounded-full mb-3">
          <img src={media2} alt="" />
          </div>
          <p>
            Receive your design within two business days on average.
          </p>
        </div>

        <div className="w-full sm:w-[256px] flex flex-col items-center text-center p-4">
          <div className="w-20 h-20 rounded-full mb-3">
          <img src={media3} alt="" />
          </div>
          <p>
            We'll revise the designs until you're 100% satisfied.
          </p>
        </div>

      </div>

      {/* Button */}
      <button className="mt-10 px-6 py-3 bg-black text-white rounded-xl">
        See Plans
      </button>

    </section>
  )
}

export default ProcessSection
