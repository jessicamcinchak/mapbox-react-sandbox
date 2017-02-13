import React, { Component } from 'react';

import WrappedMap from './components/WrappedMap';
import VanillaMap from './components/VanillaMap';

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      recCenterPts: [],
      parkShapes: [],
      fetchedPoints: false,
      fetchedShapes: false,
    };
  }

  // Sample point layer
  fetchRecCenters() {
    const recCentersUrl = "https://data.detroitmi.gov/resource/a4d6-kq8h.json";

    fetch(recCentersUrl)
      .then(response => response.json())
      .then(json => {
        console.log('Fetched ' + json.length + ' rec centers');
        this.setState({
          recCenterPts: json,
          fetchedPoints: true
        });
      })
      .catch(error => {
        console.log('Error fetching rec centers: ' + error.message);
      });
  }

  // Sample geojson shape layer
  fetchParks() {
    const parksUrl = "https://data.detroitmi.gov/resource/pizv-bpt2.geojson";

    fetch(parksUrl)
      .then(response => response.json())
      .then(json => {
        console.log('Fetched parks');
        this.setState({
          parkShapes: json,
          fetchedShapes: true
        });
      })
      .catch(error => {
        console.log('Error fetching parks: ' + error.message);
      });
  }

  componentDidMount() {
    this.fetchRecCenters();
    this.fetchParks();
  }

  // Currently rendering a single map at a time, just swap component name below
  render() {
    return (
      <div className="App">
        { this.state.fetchedPoints && this.state.fetchedShapes ? <VanillaMap points={this.state.recCenterPts} shapes={this.state.parkShapes} /> : <p>Loading...</p> }
      </div>
    );
  }
}

export default App;
