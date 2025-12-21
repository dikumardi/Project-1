import man from '../assets/man.png'
import three from '../assets/three.png'

const FeatSection = () => {
  return (
    <section className="mainLayout w-full min-h-screen relative px-4">
      
      <div className="flex justify-center">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-10 mt-10">

          {/* Quote card */}
          <div className="w-full lg:w-[488px] bg-white p-6 sm:p-8 lg:p-10">
            <h5 className="text-[20px] sm:text-[22px] lg:text-[24px]">
              “Design is everything, and these guys have nailed it.”
            </h5>

            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-10 mt-10">
              <div className="flex flex-col whitespace-nowrap">
                <div>Kevin O'Leary</div>
                <div>Shark Tank</div>
              </div>

              <img
                src={man}
                alt=""
                className="w-40 sm:w-48 lg:w-[212px] h-auto"
              />
            </div>
          </div>

          {/* Features */}
          <div className="w-full lg:w-[424px] flex flex-col gap-8 lg:gap-15">
            <div>
              <h1 className="text-[20px] lg:text-[24px]">Totally async</h1>
              <p className="text-[14px]">
                Don't like meetings? We don't either; so much so that we've outlawed them completely.
              </p>
            </div>

            <div>
              <h1 className="text-[20px] lg:text-[24px]">Manage with Trello</h1>
              <p className="text-[14px]">
                Manage your design board using Trello. View active, queued and completed tasks with ease.
              </p>
            </div>

            <div>
              <h1 className="text-[20px] lg:text-[24px]">Invite your team</h1>
              <p className="text-[14px]">
                Invite your entire team, so anyone can submit requests and track their progress.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Floating images */}
      <img
        src={three}
        alt="notFoundImg"
        className="absolute bottom-20 left-4 sm:left-30 w-10 sm:w-14"
      />
      <img
        src={three}
        alt="notFoundImg"
        className="absolute bottom-20 w-8 sm:w-10"
      />
      <img
        src={three}
        alt="notFoundImg"
        className="absolute bottom-20 right-4 sm:right-20 w-10 sm:w-15"
      />
    </section>
  )
}

export default FeatSection
