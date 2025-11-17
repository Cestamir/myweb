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
      <ContentPage firstArticle='In the relentless future of AI and machine learning, speed is paramount. Every second saved in compute time or during the build phase of new systems directly translates into reduced costs and faster market entry. Optimizing the hardware and software stacks—from the underlying database structure to efficient coding—is key. Delaying a project in this space is akin to burning money because a slower time-to-market diminishes potential returns. This efficiency challenge links time and money intrinsically.' secondArticle='The development of sophisticated AI requires immense processing time on specialized computers. To maximize the value of this investment, engineers must prioritize efficient data handling and streamlined coding. By improving the speed of machine learning algorithms, reducing latency in systems, and optimizing the structure of the database, companies can accelerate the entire learning cycle. This focus on optimization saves money by utilizing expensive hardware resources more effectively, underscoring the principle that increased processing speed equals cost savings.' thirdArticle='Ultimately, in the competitive tech space, the rapid build of advanced AI systems dictates financial success. Money must be invested wisely in high-performance hardware and expert personnel for efficient coding and data management. The objective is to cut down the total time required to move from concept to deployment. Faster deployment, achieved through relentless focus on speed and optimal system structure, allows businesses to quickly monetize their learning models and capture market share in the future, making time the most valuable commodity.' headline='Money = Time'/>
      <TitleSectionPage/>
    </div>
  )
}

export default page