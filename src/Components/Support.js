import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {
    let navigate= useNavigate();

    function clickHandler(){
        navigate('/Contact');
    }

  return (
    <div>
      Support Page
      <br/>
      <button onClick={clickHandler}>Navigate to Contact Page</button>
    </div>
  )
}

export default Support
