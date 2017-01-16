import React from 'react';
import {Link} from 'react-router'

class Door2 extends React.Component{
  render(){
    return(
      <div>
        <h4> Door 2 </h4>
        <p> Fluffy Bunny <Link to='/'>back to start</Link></p>
        
        <img className='fluffy-bunny-img' src="http://justcuteanimals.com/wp-content/uploads/2015/02/BUNNY-rabbits-cute-animals-bunnies-pictures-pics.jpg" alt="door1"/>

      </div>
    )
  }
}

export default Door2