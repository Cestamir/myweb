import React from 'react'
import InteractiveCard from './InteractiveCard'

const PortalPage = () => {
  return (
    <div className='page portal-page'>
        <img className='portalimage auto-rotate' width={"200px"} height={"200px"} src={'/portalvoid-removebg-preview.png'}/>
        {/* <div className='portal-content'>
            <h1 className="name">
                <span className="copy-wrap">
                    Paul DeCotiis
                </span>
            </h1>

            <div className="square"></div>

            <div className="card">
            <div className="card-title-wrap">
                <h1 className="title">
                <span className="copy-wrap">
                    Photography
                </span>
                </h1> 
                <button className="btn hide">
                View
                </button>
            </div>
            <div className="card-img"></div>
            </div>

            <h2 className="copyright">
            <span className="copy-wrap">
                20&nbsp;&nbsp;&nbsp;&nbsp;17
            </span>
            </h2>
        </div> */}
        <InteractiveCard/>
    </div>
  )
}

export default PortalPage