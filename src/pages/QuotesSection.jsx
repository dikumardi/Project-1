import three from '../assets/three.png'

const QuotesSection = () => {
  return (
    <section className="min-h-screen w-full mainLayout flex flex-col items-center relative px-4">

      {/* Top quote */}
      <div className="w-full max-w-[560px]">
        <div className="text-center mb-10">
          <p>They said it best</p>
        </div>

        <h1 className="text-[28px] sm:text-[32px] md:text-[36px] text-center mb-10">
          "Designjoy shows that <br className="hidden sm:block" />
          they know the art of subtlety"
        </h1>

        <img src={'dasds'} alt="notFound" />
      </div>

      {/* Floating images */}
      <img
        src={three}
        alt="notFoundImg"
        className="absolute bottom-48 left-4 sm:left-20 w-10 sm:w-14"
      />
      <img
        src={three}
        alt="notFoundImg"
        className="absolute bottom-48 w-8 sm:w-10"
      />
      <img
        src={three}
        alt="notFoundImg"
        className="absolute bottom-48 right-4 sm:right-20 w-10 sm:w-15"
      />

      {/* Bottom content */}
      <div className="w-full max-w-[560px] mt-32 sm:mt-40 flex flex-col items-center text-center">
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] leading-snug mb-4">
          It’s “you’ll never go back” better
        </h2>

        <p className="text-[16px] sm:text-[18px] md:text-[20px] mb-6">
          Designjoy replaces unreliable freelancers and expensive agencies
          for one flat monthly fee, with designs delivered so fast that it
          will blow your mind.
        </p>

        <button className="px-5 py-3 bg-black rounded-xl text-white active:scale-95">
          See Plans
        </button>
      </div>

    </section>
  )
}

export default QuotesSection
