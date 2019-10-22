import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar' ;
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/BackDrop/Backdrop';

class App extends Component {


  
  render(){
    return (
      <div style={{height: '100%'}}>
        <Toolbar/>
        <SideDrawer/>
        <Backdrop/>
        {/* //js object */}
        <main style={{marginTop:'64px'}}>
        <p>This is a page w/ content </p>
        </main>
      </div>
    );
  }
};
export default App;