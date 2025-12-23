import one from '../assets/one.png'
import imgi_3 from '../assets/imgi_3.svg'

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center  px-4 relative">

      {/* Image */}

      <img
         src={imgi_3} 
         alt="img" 
         className="
         z-0
         absolute 
          w-16 left-0 top-82
          md:left-0 md:top-24 
          lg:w-48 lg:top-32
         "
      
      />
      <img
        src={one}
        alt="img"
        className="
          absolute 
          w-16 right-0 top-82
          md:right-0 md:top-24 
          lg:w-44 lg:top-32
        "
      />

      {/* Heading */}
      <div className="mt-20 md:mt-32 ">
        <h1
          className="
            text-4xl 
            md:text-6xl 
            lg:text-[84px]
            text-center 
            leading-tight
          "
        >
          A design agency <br /> with a twist
        </h1>
      </div>

      {/* Description */}
      <p className="text-sm md:text-lg text-center mt-4 max-w-xl">
        Design subscriptions for everyone. Pause or cancel anytime.
      </p>

      {/* Button */}
      <button className="px-5 py-3 bg-black rounded-xl text-white mt-6 active:scale-95">
        See Plans
      </button>

      {/* Status */}
      <div className="flex items-center gap-3 mt-6">
        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
        <p className="text-sm md:text-base">Available Now</p>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black w-full max-w-5xl py-4 mt-10   rounded-full overflow-hidden z-10 ">
        <div className="text-white flex justify-center gap-6 md:gap-10 text-sm md:text-base px-4  ">
          <h1>lorem</h1>
          <h1>ipsum</h1>
          <h1>voluptas</h1>
          <h1>beatae</h1>
          <h1>porro</h1>
          <h1>Animi</h1>
        </div>
      </div>

    </section>
  )
}

export default HeroSection
