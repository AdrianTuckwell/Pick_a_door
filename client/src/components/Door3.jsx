import React from 'react';
import {Link} from 'react-router'

class Door3 extends React.Component{
  
  render(){
    return(
      <div>
        <h4> Door3 </h4>
        <p>  vroooom <Link to='/'>back to start</Link></p>

        <img className='fast-car-img' src="http://www.clipartkid.com/images/79/race-car-clipart-for-kids-clipart-panda-free-clipart-images-3xuaiV-clipart.jpg" alt="door1"/>

      </div>
    )
  }
  
}

export default Door3;

