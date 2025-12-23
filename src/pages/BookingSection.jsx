import booking1 from '../assets/booking1.svg'
import booking2 from '../assets/booking2.svg'
import logo from '../assets/logo.svg'
import smiley from '../assets/smiley.svg'
import imgi1smiley from '../assets/imgi1smiley.svg'

const BookingSection = () => {
  return (
    <section className='mainLayout min-h-screen w-full flex flex-col items-center px-4 relative'>

      {/* Background Images */}
      <img src={booking1} alt="" className='absolute right-0 top-0 hidden md:block'/>
      <img src={booking2} alt="" className='absolute left-0 top-0 hidden md:block' />

      {/* Heading & Text */}
      <div className="w-full max-w-6xl flex flex-col items-center justify-center text-center">
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-snug'>
          See if Designjoy is right <br /> for you. (It totally is.)
        </h2>
        <p className='text-base sm:text-lg md:text-xl mt-4'>
          Get a guided tour through Designjoy, and find out how <br />
          you and your team can change the way you source design, forever.
        </p>

        {/* Button */}
        <button className="px-5 py-3 bg-black rounded-xl text-white mt-6 active:scale-95">
          Book a call
        </button>
      </div>

      {/* Logos / Images */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center mt-20 gap-6 md:gap-10">
        <img src={imgi1smiley} alt="" className='w-40 sm:w-48 md:w-52'/>
        <img src={logo} alt="" className='w-36 sm:w-44 md:w-180'/>
      </div>

      {/* Footer Links */}
      <div className="w-full max-w-4xl h-auto mt-10">
        <ul className='flex flex-wrap gap-4 sm:gap-6 md:gap-10 justify-center items-center text-sm sm:text-base'>
          <li>Latest projects</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>Client Login</li>
          <li>Get Started</li>
          <li>Terms & conditions</li>
          <li>PrivacyPolicy</li>
        </ul>
      </div>

    </section>
  )
}

export default BookingSection
