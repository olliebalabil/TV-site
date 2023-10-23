import React from 'react'
import DOMPurify from 'dompurify'

export default function ShowCard({ show }) {
  const cleanHTML = DOMPurify.sanitize(show.summary)

  return (
    <div className='show-card'>
      <div>
        <img src={show.image.medium} alt={show.name} />
      </div>
      <div>
        {show.rating.average ? <span> ({show.rating.average}/10)</span> : ""}
        <h2>{show.name}</h2>
        <em>{show.language}, {show.premiered}</em>
        <div dangerouslySetInnerHTML={{__html: cleanHTML}} ></div>
      </div>
    </div>
  )
}

//dangerouslySetInnerHTML takes '<p>summary here</p>' to 'summary here'. We use DOMPurify so that is the API gets hacked, malicious code can't be added. You should always do dangerously... with DOMPurify (unless you trust the API completely).