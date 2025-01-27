function Nav() {
  
  //const [city, setCities] = useState(cit)
  return (
    <>
      <nav className=' p-4 flex flex-col sm:flex-row'>
        {/* flex gap-4 justify-between */}
        <div className="mb-4">
        <img src="https://joregesosa.github.io/windbnb_challenge/assets/logo-f7862584.svg" alt="logo" className=' w-36' />
        </div>


        <div className='flex flex-row justify-end align-middle mx-2 sm:w-3/4 '>
          <input type="text" placeholder="Add location" className='border shadow-md w-28 h-9 rounded-s-xl focus: outline-cyan-600 text-center ' />
          
          <input type="text" placeholder="Add guests" className='border shadow-md w-28 h-9 focus: outline-cyan-600 text-center' />
          <button className='border shadow-md rounded-e-xl bg-white hover:bg-slate-50 px-4  h-9 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 text-red-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>



        </div>
      </nav>

    </>
  )
}


export default Nav

