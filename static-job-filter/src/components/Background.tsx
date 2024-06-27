

const Background:React.FC = () => {

  return (
    <>
      {/* -------Mobile screen background----- */}
      <div className='bg-primary-desaturatedDarkCyan md:hidden'>
        <img src="./src/assets/bg-header-mobile.svg" alt="background image" className="w-full"/>
      </div>

      {/* -------Mobile screen background----- */}
      <div className='bg-primary-desaturatedDarkCyan hidden md:block'>
        <img src="./src/assets/bg-header-desktop.svg" alt="background image" className="w-full"/>
      </div>

    </>
  )
}

export default Background