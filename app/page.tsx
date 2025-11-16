import React from 'react'
import LandingBanner from '@/components/LandingBanner'
import PortalPage from '@/components/PortalPage'
import ContentPage from '@/components/ContentPage'
import TitleSectionPage from '@/components/TitleSectionPage'

const page = () => {

  return (
    <div>
      {/* animation works only one time */}
      <LandingBanner/>
      <PortalPage/>
      <ContentPage firstArticle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' secondArticle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' headline='Money = Time'/>
      <TitleSectionPage/>
    </div>
  )
}

export default page