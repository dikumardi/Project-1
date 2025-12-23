import imgi78 from '../assets/imgi78.png'
import imgi79 from '../assets/imgi79.png'
import imgi80 from '../assets/imgi80.png'
import imgi81 from '../assets/imgi81.png'
import imgi82 from '../assets/imgi82.png'
import imgi83 from '../assets/imgi83.png'

const ServicesPages = () => {
  return (
    <section className='w-full min-h-screen mainLayout px-4 overflow-x-auto'>
      <div className="flex flex-col items-center justify-center">

        {/* Heading */}
        <div className="w-full max-w-6xl flex flex-col items-center justify-center mt-20 text-center">
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold'>
            Apps, websites, logos & more
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mt-6 justify-center">
            {['Landing Pages', 'Mobile Apps', 'Logo', 'Branding', 'Icons', 'Blog Graphics', 'Slide Decks', 'Brand Guides'].map((item, index) => (
              <div key={index} className='text-white px-3 py-2 sm:px-4 sm:py-3 bg-amber-300 rounded-2xl text-sm sm:text-base'>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Cards container */}
        <div className="w-full max-w-7xl mt-20 flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-10">
          {[imgi78, imgi79, imgi80, imgi81, imgi82, imgi83].map((img, index) => (
            <div key={index} className="w-40 sm:w-64 p-4 sm:p-6 flex flex-col items-center gap-4 bg-red-500 rounded-xl">
              <img src={img} alt="" className='w-full h-auto object-contain' />
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="mt-20 px-5 py-3 bg-black rounded-xl text-white active:scale-95">
          See Plans
        </button>

      </div>
    </section>
  )
}

export default ServicesPages
