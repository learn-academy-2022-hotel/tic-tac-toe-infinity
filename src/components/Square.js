import React, {useState} from 'react'

const Square = (props) => {

  const handleClick = () => {
    props.switchOpponent(props.index)
  }

  return (
    <>
      {
        props.winner ?
          <div className="square">
            {props.value}
          </div> :
          <div 
            className="square"
            onClick={handleClick}
          >
            {props.value}
          </div>
      }
    </>
  )
}
export default Square
