import React from 'react'

interface ContentPageProps{
    firstArticle: string;
    secondArticle:string;
    thirdArticle:string;
    headline:string;
}

const ContentPage = ({firstArticle,secondArticle,thirdArticle,headline} : ContentPageProps) => {
  return (
    <div className='page column-page'>
        <h2 className='auto-show headline'>{headline}</h2>
        <div className='grid-content'>
            <figure className='auto-show img-container'>
                <img className='content-image' src={'/spaceship.webp'}/>
            </figure>
            <div className='auto-show text-content'>
                <h3 className='small-headline'>Speed</h3>
                <p>
                    {firstArticle}
                </p>
            </div>
            <div className='auto-show text-content '>
                <h3 className='small-headline'>Time</h3>
                <p>
                    {secondArticle}
                </p>
            </div>
            <figure className='auto-show img-container'>
                <img className='content-image' src={'/clocksteam.png'}/>
            </figure>
            <figure className='auto-show img-container'>
                <img className='content-image' src={'/money.webp'}/>
            </figure>
            <div className='auto-show text-content'>
                <h3   className='small-headline'>Money</h3>
                <p>
                    {thirdArticle}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ContentPage