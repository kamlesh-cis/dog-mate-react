import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-flexbox-grid";
import CircularProgress from 'material-ui/CircularProgress';

import { fetchBreeds } from "../actions/index";

import DogBreed from "./dog_breeds/DogBreed";

const style = {
  box: {
    padding: "10px",
    textAlign: "center",
  }
};

class HomeContainer extends React.Component {
  componentWillMount() {
    this.props.fetchBreeds();
  }

  render() {
    const {dogsBreeds} = this.props;

    return (
      <Grid>
        <Row>
          <Col>
            <div style={style.box}>
              {dogsBreeds.length > 0 &&
                <DogBreed dogsBreeds={dogsBreeds} />}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  let breeds = [];

  if (state.breeds.message && state.breeds.message.length > 0) {
    breeds = state.breeds.message;
  }

  return {
    dogsBreeds: breeds
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBreeds: () => dispatch(fetchBreeds())
  };
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
export default componentCreator(HomeContainer);
