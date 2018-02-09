import React from "react";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";

import Avatar from "material-ui/Avatar";
import { List, ListItem } from "material-ui/List";

const style = {
  width: 1000,
  textAlign: "left",
  display: "inline-block"
};

const avatarStyle = {
  backgroundColor: "#b3dae0"
};

export default class DogBreed extends React.Component {
  render() {
    const {dogsBreeds} = this.props;
    return (
      <div>
        <Paper style={style} zDepth={3}>
          <AppBar title="Dog Breeds" style={{ backgroundColor: "#68B6C2" }} />
          <List>
            {dogsBreeds.map((breed, index) => 
              <ListItem
                key={index}
                primaryText={breed}
                leftAvatar={<Avatar style={avatarStyle}><i className="material-icons">&#xE91D;</i></Avatar>}
                initiallyOpen={true}
              />)}
          </List>
        </Paper>
      </div>
    );
  }
}
