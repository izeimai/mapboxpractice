import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import './style.css';
 
class Mapbox extends Component {
 
  state = {
    viewport: {
      width: 450,
      height: 450,
      latitude: 39.9526,
      longitude: -75.1652,
      zoom: 12
    },
    MAPBOX_PASS : `${process.env.REACT_APP_MAPBOX_PASS}`
  };

 
  render() {
    return (
      <ReactMapGL className="map"
        {...this.state.viewport}
        mapboxApiAccessToken={this.state.MAPBOX_PASS}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}

export default Mapbox;