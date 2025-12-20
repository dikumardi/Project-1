import  one from '../assets/one.png'

const HeroSection = () => {
  return (
    <section className='h-screen w-full flex flex-col items-center '>
    <img src={one} alt="img" className='absolute right-15 top-70'/>
    <div className='text-[84px] text-center leading-25  mt-30'>
    <h1>A design agency <br /> with a twist
</h1>
</div>
<p className='text-lg'>Design subscriptions for everyone. Pause or cancel anytime.</p>
<button className='px-5 py-3 bg-black rounded-xl text-white mt-6 active:scale-95'>See Plans</button>
<div className="flex items-center gap-3 mt-6  mb-17">
<div className="w-3 h-3 bg-emerald-500 rounded-full  "></div>
<p>Avaliable Now</p>

</div>
<div className="bg-black w-200 py-6 rounded-full">

<div className=" text-white flex gap-10 px-30">
<h1>lorem</h1>
<h1>ipsum</h1>
<h1> voluptas</h1>
<h1>beatae</h1>
<h1>beatae</h1>
<h1>porro</h1>
<h1>Animi</h1>
</div>
</div>

    </section>
  )
}

export default HeroSection
