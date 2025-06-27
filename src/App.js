import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import NavBar from './components/NavBar';

export default class App extends Component {

  render() {
    return (
      <div> 
        <NavBar/>
        <News pageSize={5} country="us" category="sports"/>
      </div>
    )
  }
}



// 23d863dfc03d4e5cbec6dfea11281e21 - API KEY