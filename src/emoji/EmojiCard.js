import React from 'react'

export default function EmojiCard(props) {
  return (
    <div className='container1 text-center mx-4 my-3 '>
      <div className="card border-info border" style={{maxWidth: '28rem' , height:"20rem" }}>
      <div className="col-md-12">
      <div className="card-body">
      <div className='emoji'>{props.emoji}</div>
        <h5 className="card-title">Group: {props.group}</h5>
        <h5 className="card-title text-primary">Code Point: {props.point}</h5>
        <p className="card-text">slug: {props.slug}</p>
        <p className="card-text text-success">Sub Group: {props.code}</p>
      </div>
    </div>

      </div>
    </div>
  )
}