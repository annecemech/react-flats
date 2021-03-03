import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="flat-list" flats={this.props.flats}>
      {this.props.flats.map((flat, index) => {
        return <Flat key={flat.lat} lat={flat.lat} img={flat.imageUrl} price={flat.price} description={flat.name} index={index} selectFlat={this.props.selectFlat} selectedFlatIndex={this.props.selectedFlatIndex}/>
      })}
    </div>
    );
  }
}

export default FlatList;





