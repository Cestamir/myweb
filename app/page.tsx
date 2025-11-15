import React from 'react'
import LandingBanner from '@/components/LandingBanner'
import PortalPage from '@/components/PortalPage'

const page = () => {

  return (
    <div>
      {/* animation works only one time */}
      <LandingBanner/>
      <PortalPage/>
    </div>
  )
}

export default page