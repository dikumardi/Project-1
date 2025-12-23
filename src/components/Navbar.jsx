import smiley from '../assets/smiley.svg'

const Navbar = () => {
  return (
    <div className="hidden lg:flex bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed z-50">
      <div className="w-full lg:w-[500px] h-[49.3px] bg-black rounded-full flex items-center justify-center gap-3 text-white py-2 px-4">
        <div className="logo">
          <img src={smiley} alt="" className="w-6 h-6"/>
        </div>
        <div className="px-3 py-1 bg-amber-300 rounded-2xl text-black text-sm cursor-pointer">How it works</div>
        <p className="text-sm cursor-pointer">Benefits</p>
        <p className="text-sm cursor-pointer">Services</p>
        <p className="text-sm cursor-pointer">Pricing</p>
        <p className="text-sm cursor-pointer">FAQs</p>
      </div>
    </div>
  )
}

export default Navbar
