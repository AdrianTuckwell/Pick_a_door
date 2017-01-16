import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import Door1 from './components/Door1.jsx';
import Door2 from './components/Door2.jsx';
import Door3 from './components/Door3.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

window.onload = () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component = {Main}>
        <Route path="door1" component={Door1}/>
        <Route path="door2" component={Door2}/>
        <Route path="door3" component={Door3}/>
      </Route>
    </Router>,
    document.getElementById('app')
  );
}