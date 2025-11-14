'use client'
import React, { useEffect, useState } from 'react'

const LandingBanner = () => {

    // works only one time + 2 re-renders from useeffect - after some time ellapsed it works on page refresh 2 times following the useffect.
    const [animateBackground,setAnimateBackground] = useState<boolean>(false);

    useEffect(()=>{
        setAnimateBackground(true);
    },[])

  return (
    <div id='banner' className={animateBackground ? "animate-background-mask" : ''}>
      <div id='content'>
        <h1 className='title'>Explore</h1>
        <p> more..</p>
      </div>
    </div>
  )
}

export default LandingBanner