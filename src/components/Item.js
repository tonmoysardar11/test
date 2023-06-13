import React from 'react'

const Item = (props) => {
  return (
<div className="card my-2 mx-auto" style={{ width: '25rem' }}>
      <div className="card-body">
        <h5 className="card-title">Owner Name : {props.name}</h5>
        <br />
        <p className='card-text'>
          <u>Card Type: {props.card_type}</u>
        </p>
        <br />
     </div>
    </div>
  )
}

export default Item
