import React from 'react'

const Wrapper = (props) => {
  
  console.log(props);
  
  return (
    
    <ul>
      {
        props.children
      }
    </ul>
  )
}

export default Wrapper