import React from 'react';
import {Link} from 'react-router'

class Door1 extends React.Component {
  render(){
    return(
      <div>
        <h4> Door1 </h4>
        <p> Heres Johnny <Link to='/'>back to start</Link></p>
        
        <img className='johnny-img' src="http://natashaleitedemoura.com/wp-content/uploads/sites/10/2014/11/horror_2382351b.jpg" alt="door1"/>
      </div>
    )
  }
}

export default Door1
