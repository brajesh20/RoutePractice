import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  let navigate = useNavigate()

  function clickHandler () {
    navigate('/Gallery')
  }

  const backHandler=()=>{
    navigate(-1);
  }

  return (
    <div>
      <div>Contact Page</div>
      <br />
      <button onClick={clickHandler}>Navigate to Gallery Page</button>
      <br/>
      <button onClick={backHandler}>Back</button>
    </div>
  )
}

export default Contact
