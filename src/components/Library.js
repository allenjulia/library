import React, {Component} from 'react'
import axios from 'axios'
import ShowBook from './ShowBook'
import PropTypes from 'prop-types'


export default class Library extends Component {
  
  render () {
    return this.props.library.map((library) => (
      <ShowBook key={library.id} library={library} chooseFavorite={this.props.chooseFavorite} delLibrary={this.props.delLibrary} />
    ))
  } 
}


// PropTypes
Library.propTypes = {
  library: PropTypes.array.isRequired
}