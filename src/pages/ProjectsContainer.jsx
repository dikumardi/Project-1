import React from 'react'

const ProjectsContainer = (props) => {
  return (
    <section className="w-full mainLayout overflow-x-auto">
      
      <div
        className="
          flex gap-6 
          px-4
          sm:px-6
          md:px-10
        "
      >
        {[props.img1, props.img3, props.img4, props.img2, props.img1].map(
          (img, index) => (
            <div
              key={index}
              className="
                shrink-0
                w-[75%]        /* mobile */
                sm:w-[45%]     /* tablets */
                md:w-[30%]     /* small laptop */
                lg:w-[22%]     /* desktop */
                bg-amber-200
                rounded-xl
                overflow-hidden
              "
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          )
        )}
      </div>

    </section>
  )
}

export default ProjectsContainer
