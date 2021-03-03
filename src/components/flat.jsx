import React, { Component } from 'react';

class Flat extends Component {

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.selectFlat(this.props.index);
  }

  render() {
    return (
      <div className={this.props.selectedFlatIndex.lat === this.props.lat ? "card active" : "card"} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.img}')` }}>
        <div className="card-category">{this.props.price} €</div>
        <div className="card-description">
          <h2>{this.props.description}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    );
  }
}

export default Flat;
