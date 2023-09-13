/* eslint-disable react/prop-types */

function Toggle({isActive, menuHandler}) {
  return (
    <>
    {
        isActive === false ? 
        <>
            <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 cursor-pointer" 
      onClick={menuHandler}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
        </> 
        : <>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={menuHandler} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </>
    }
    </>
  )
}

export default Toggle