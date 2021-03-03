import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// import Flat from './flat';
// import FlatList from './flat_list';
import flats from '../../data/flats.js';
import FlatList from './flat_list';
import Marker from './marker';


// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      selectedFlatIndex: flats[0]
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlatIndex: flats[index] });
  }

  center() {
    return {
      lat: this.state.selectedFlatIndex.lat,
      lng: this.state.selectedFlatIndex.lng
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} selectedFlatIndex={this.state.selectedFlatIndex} selectFlat={this.selectFlat} />
        <div className="map-container">
          <GoogleMapReact
          defaultCenter={this.center()}
          center={this.center()}
          defaultZoom={12}
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_API_KEY,
            language: 'fr',
            region: 'fr',
          }}>
            <Marker lat={this.state.selectedFlatIndex.lat} lng={this.state.selectedFlatIndex.lng} />
          </GoogleMapReact>
        </div>
      </div>

    );
  }
}

export default App;
