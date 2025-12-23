const PricingSection = () => {
  return (
    <section className="w-full min-h-screen mainLayout overflow-x-auto px-4">
      <div className="flex justify-center">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-start gap-8 mt-20">

          {/* Left Card */}
          <div className="flex-1 bg-black text-white p-6 sm:p-10 rounded-xl">
            <div className="flex bg-red-400 rounded-2xl w-max px-4 py-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <p className="whitespace-nowrap text-sm sm:text-base">Slots Available</p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-snug mt-6">
              Join <br /> DesignFiesta
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-lg sm:text-xl">Book a 15-min intro call</h4>
                <p className="text-sm sm:text-base">
                  Learn more about how DesignFiesta works and how it can help you
                </p>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl">Book a 15-min intro call</h4>
                <p className="text-sm sm:text-base">
                  Learn more about how DesignFiesta works and how it can help you
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl">Membership</h3>

            {/* Membership Toggle */}
            <div className="flex gap-2 sm:gap-3 p-1 rounded-2xl bg-black w-full max-w-md">
              <div className="bg-amber-400 py-2 px-4 sm:px-7 rounded-2xl text-sm sm:text-base">Standard</div>
              <div className="flex-1 text-white flex items-center justify-center text-sm sm:text-base">Pro</div>
            </div>

            {/* Pricing Details */}
            <div className="bg-amber-300 p-4 sm:p-6 rounded-xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl">$4,995 <span className="text-base sm:text-lg">/m</span></h1>
              <p className="text-sm sm:text-base mt-2">One request at a time. Pause or cancel anytime</p>
              <div className="line h-px bg-gray-600 my-2"></div>
              <p className="text-sm sm:text-base">What's included</p>

              <ul className="mt-2 text-sm sm:text-base space-y-1">
                <li>One request at a time</li>
                <li>Average 48 hour delivery</li>
                <li>Unlimited brands</li>
                <li>Webflow development</li>
                <li>Unlimited stock photos</li>
                <li>Unlimited users</li>
                <li>Pause or cancel anytime</li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 items-start sm:items-center">
              <button className="px-5 py-3 bg-black rounded-xl text-white active:scale-95">
                See Plans
              </button>
              <div className="px-5 py-3 text-center">or <span className="underline cursor-pointer">book a call</span></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
