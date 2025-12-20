import  three from '../assets/three.png'

const QuotesSection = () => {
  return (
    <section className='h-screen w-full mainLayout flex flex-col  items-center'>

   <div className=" w-140">
    <div className="text-center mb-10 "><p>They said it best</p></div>
    <h1 className='text-[36px] text-center mb-10'>"Designjoy shows that <br />they know the art of subtlety"</h1>
    <img src={'dasds'} alt="notFound"  />

   
    </div> 
    

     <img src={three} alt="notFoundImg" className='absolute top-520 left-20 w-14' />
     <img src={three} alt="notFoundImg" className='absolute top-520 w-10' />
     <img src={three} alt="notFoundImg" className='absolute w-15 top-520 right-20' />

    <div className="w-140 mt-40 flex flex-col items-center justify-between">
    <h2 className='text-[48px] text-center leading-snug'>It’s “you’ll never go back” better</h2>
        <p className='text-[20px] text-center mb-3'>Designjoy replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs delivered so fast that it will blow your mind.</p>
        <button className='px-5 py-3 bg-black rounded-xl text-white  active:scale-95'>See Plans</button>
    </div>
    </section>
  )
}

export default QuotesSection