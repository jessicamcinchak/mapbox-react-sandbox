import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

class VanillaMap extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      drewMap: false,
      map: {}
    };
  }
  
  // Just vanilla js per the mapbox gl api docs
  drawMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamVzc2ljYW1jaW5jaGFrIiwiYSI6ImNpcTB4Y2h2ODAwa3BmaG5uYW0xOHBlOGoifQ.VSD_IOgj6S1oVmrSamgZvw';

    const map = new mapboxgl.Map({
      'container': 'map',
      'style': 'mapbox://styles/mapbox/streets-v9',
      'center': [-83.0458, 42.3314],
      'zoom': 10
    });

    map.on('load', function () {
      map.addSource('parkShapes', {
        'type': 'geojson',
        'data': 'https://data.detroitmi.gov/resource/pizv-bpt2.geojson' // how to populate from {this.props.shapes} instead??
      });

      map.addLayer({
        'id': 'park-fill',
        'source': 'parkShapes',
        'type': 'fill',
        'paint': {
          'fill-color': 'purple',
          'fill-opacity': 0.4
        }
      });
    });

    this.setState({
      drewMap: true,
      map: map
    });
  }

  componentDidMount() {
    this.drawMap();
  }

  render() {
    return (
      <div id="map" style={{width: 600, height: 500}}>
      </div>
    );
  }
}

export default VanillaMap;
