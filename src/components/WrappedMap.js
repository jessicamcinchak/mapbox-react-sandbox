import React, { Component } from 'react';
import ReactMapboxGL, { Layer, Feature, GeoJSONLayer } from 'react-mapbox-gl';

const MAPBOX_TOKEN = "pk.eyJ1IjoiamVzc2ljYW1jaW5jaGFrIiwiYSI6ImNpcTB4Y2h2ODAwa3BmaG5uYW0xOHBlOGoifQ.VSD_IOgj6S1oVmrSamgZvw";

class WrappedMap extends Component {
  state = {
    center: [-83.0458, 42.3314],
    zoom: [10]
  }

  // Special ReactMapboxGL wrapper component
  render() {
    return(
      <div className="wrapped-map">
        <ReactMapboxGL
          accessToken={MAPBOX_TOKEN}
          style="mapbox://styles/mapbox/streets-v8" // docs note this can be a string or object, but throws warning as string
          zoom={this.state.zoom}
          minZoom={8}
          maxZoom={16}
          center={this.state.center}
          containerStyle={{
            height: "90vh",
            width: "90vw"
          }}>
          <Layer 
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}>
            { 
              this.props.points.map((point, i) => (
                <Feature
                  key={i}
                  coordinates={point.the_geom.coordinates} />
              ))
            }
          </Layer>
          <GeoJSONLayer
            data={this.props.shapes} />
        </ReactMapboxGL>
      </div>
    );
  }
}

export default WrappedMap;
