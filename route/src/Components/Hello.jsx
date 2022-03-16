import React from 'react'
import { useParams } from 'react-router-dom'

const Hello = () => {

    const { text } = useParams();
  return (
    <div>
        <p>The word is:{text}</p>
    </div>
  )
}

export default Hello