import React from 'react'
import videoBG from '../assets/videoBG.MOV'

const MainBG = () => {
  return (
    <div  className='videoBG'>
      
        <video height={"250vh"} src={videoBG} autoPlay loop muted />

        
    </div>
  )
}

export default MainBG;