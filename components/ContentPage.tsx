import React from 'react'

interface ContentPageProps{
    firstArticle: string;
    secondArticle:string;
    headline:string;
}

const ContentPage = ({firstArticle,secondArticle,headline} : ContentPageProps) => {
  return (
    <div className='page column-page'>
        <h2 className='auto-show headline'>{headline}</h2>
        <div className='grid-content'>
            <div>
                none
            </div>
            <div className='auto-show text-content'>
                <figure>
                    <img src={'/next.svg'}/>
                </figure>
                <p>
                    {firstArticle}
                </p>
            </div>
            <div className='auto-show text-content '>
                <figure>
                    <img src={'/next.svg'}/>
                </figure>
                <p>
                    {secondArticle}
                </p>
            </div>
            <div>
                none
            </div>
            <div>
                none
            </div>
            <div className='auto-show text-content'>
                <figure>
                    <img src={'/next.svg'}/>
                </figure>
                <p>
                    {firstArticle}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ContentPage