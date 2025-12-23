import banner1 from '../assets/banner1.svg'
import banner2 from '../assets/banner2.svg'

const BannerContent = () => {
  return (
    <section className='mainLayout min-h-screen w-full flex flex-col items-center px-4 relative'>

      {/* Background Images */}
      <img src={banner1} alt="" className='absolute right-0 top-0 hidden md:block'/>
      <img src={banner2} alt="" className='absolute left-0 top-0 hidden md:block'/>

      {/* Main Content */}
      <div className="w-full max-w-6xl flex flex-col items-center justify-center bg-white py-10 px-4 md:px-10">
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-center'>Scribbles</h1>
        <h2 className='text-base sm:text-lg md:text-xl text-center mt-4 leading-snug'>
          A collection of funky vectorized scribbbles to <br />
          spice up your design projects.
        </h2>

        {/* Button */}
        <button className="px-5 py-3 bg-black rounded-xl text-white mt-6 active:scale-95">
          Download Now
        </button>

        <p className='text-sm sm:text-base mt-6 text-center'>
          Used by over 30,000 designers & top brands.
        </p>
      </div>
    </section>
  )
}

export default BannerContent
