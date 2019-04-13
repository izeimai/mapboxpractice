import React, { Component } from 'react';
import ReactMapGL, { Marker, GeolocateControl } from 'react-map-gl';
import './style.css';
import yogaStudio from '../../yoga-studio.json';

const MAPBOX_PASS = `${process.env.REACT_APP_MAPBOX_PASS}`;

class Mapbox extends Component {

  state = {
    viewport: {
      width: 450,
      height: 450,
      latitude: 39.9526,
      longitude: -75.1652,
      zoom: 12,
      maxZoom: 15
    }
  };

  _onViewportChange = viewport => this.setState({ viewport });

  _onInteractionStateChange = interactionState => this.setState({ interactionState });

  _onSettingChange = (name, value) => this.setState({
    settings: { ...this.state.settings, [name]: value }
  });

  _renderMarker(studio, i) {
    const { name, coordinates, url } = studio;
    return (
      <Marker key={i} longitude={coordinates[0]} latitude={coordinates[1]}
        captureDrag={false} captureDoubleClick={false}>
        <a href={url}>
          <div className="studio">
            <span>{name}</span>
          </div>
        </a>
      </Marker>
    );
  }

  render() {
    return (
      <ReactMapGL className="map"
        {...this.state.viewport}
        mapboxApiAccessToken={MAPBOX_PASS}
        onViewportChange={(viewport) => this.setState({ viewport })}
      >
        <GeolocateControl
          onViewportChange={this._onViewportChange}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        {yogaStudio.map(this._renderMarker)}
      </ReactMapGL>
    );
  }
}

export default Mapbox;