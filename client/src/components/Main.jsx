import React from 'react'
import Door1 from './Door1.jsx'
import Door2 from './Door2.jsx'
import Door3 from './Door3.jsx'
import {Link} from 'react-router'

class Main extends React.Component{

  render(){
    return(
      <div>
      <h4>Pick a Door</h4>

      <ul>
        <Link to='/door1'>
          <img src="http://www.clipartkid.com/images/140/door-clipart-black-and-white-clipart-panda-free-clipart-images-MdvRUG-clipart.gif" alt="door1"/></Link>
        

        <Link to='/door2'>
          <img src="http://www.clipartkid.com/images/140/door-clipart-black-and-white-clipart-panda-free-clipart-images-MdvRUG-clipart.gif" alt="door2"/></Link>
        

        <Link to='/door3'>
        <img src="http://www.clipartkid.com/images/140/door-clipart-black-and-white-clipart-panda-free-clipart-images-MdvRUG-clipart.gif" alt="door3"
        /></Link>
        
      </ul>
      {this.props.children}
      </div>
      )
  }
}
export default Main
