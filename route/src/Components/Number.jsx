import React from 'react'
import { useParams } from 'react-router-dom'

const Number = (props) => {

  const {id}= useParams()
  return (
    <div>
        <p>The number is: {id} </p>
    </div>
  )
}

export default Number