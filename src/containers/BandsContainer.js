import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = () => {
    return this.props.bands.map((band, idx) => <li key={idx}>{band.name}</li>)
  }

  addBand = (band) => {
    this.props.dispatch({
      type: 'ADD_BAND',
      band: band
    })
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.addBand}/>
        <ul>{this.renderBands()}</ul>
      </div>
    )
  }
    
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer)
