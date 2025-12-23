import React from 'react'

const Benifits = () => {
  return (
    <section className="mainLayout min-h-screen w-full px-4 py-10">
      
      <div className="flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-center mb-4">
          Membership benefits
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-center max-w-3xl mb-10">
          Perks so good you'll never need to go anywhere else for your design. Seriously.
        </p>

        {/* Cards container */}
        <div className="w-full max-w-6xl flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-full sm:w-64 p-6 flex flex-col items-center gap-4 bg-white rounded-xl shadow-md">
              <div className="w-10 h-10 bg-red-400 rounded-full"></div>
              <h4 className="text-lg sm:text-xl md:text-2xl text-center">
                Design board
              </h4>
              <p className="text-sm sm:text-base text-center">
                Subscribe to a plan & request as many designs as you’d like.
              </p>
            </div>
          ))}

        </div>
      </div>

    </section>
  )
}

export default Benifits
