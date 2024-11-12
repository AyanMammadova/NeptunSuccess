import React from 'react'

function FullLoader() {
  return (
    <>
      <div className='flex w-[100%] fixed z-50 relative h-[100vh] h animate-pulse justify-center items-center'>
        <div className='top-0'>
        <img className='h-[100px] w-[20 0px]' src="/img/logo.png" />
        </div>
      </div>
    </>
  )
}

export default FullLoader
