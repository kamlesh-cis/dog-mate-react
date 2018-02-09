import React from 'react';
import AppBar from 'material-ui/AppBar';


const style = {
    title: {
      cursor: 'pointer',
    }
  }


class NavBar extends React.Component {
  render() {
   return (
    <div>
       <AppBar
        title={<span style={style.title}>DogMate</span>}
        onTitleTouchTap={this.handleTouchTap}
        style={{
          fontFamily: 'Pacifico',
          backgroundColor: '#347580'
        }}
       />
     </div>
   )
 }
}

export default NavBar



