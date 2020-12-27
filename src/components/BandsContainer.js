import React, { Component } from 'react'
import BandInput from './BandInput';
import { connect } from 'react-redux'
import Bands from './Bands'
class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput dispatch={this.props.dispatch}/>
        <Bands dispatch={this.props.dispatch} bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

// const mapDispatchToProps = dispatch => ({
//   addBand: name => dispatch({ type: "ADD_BAND", name })
// })

export default connect(mapStateToProps)(BandsContainer)
