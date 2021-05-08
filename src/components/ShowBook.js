import React, {Component} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

export default class ShowBook extends Component {
  getStyle = () => {
    return {
      backgroundColor: this.props.library.favorite ?
      '#c4ff79' : '#d3d3d3',
      width: 200,
      textAlign: 'center',
      display: 'inline-block'
    }
  }

  
  render () {
    const {id, title, author, favorite, notes} = this.props.library
    return (
      <div style={this.getStyle()}>
        <p>
          <h3> 
             { title }
          </h3>
          <h4> by   { author }</h4>
          <h5>
            Notes: <h5> {notes}
            </h5>
          </h5>
          <h5>
            Favorite?
            <input type='checkbox' onChange={this.props.chooseFavorite.bind(this, id)}/>
             <button onClick={this.props.delLibrary.bind(this, id)}style={btnStyle}>x</button>
          </h5>  
        </p>
      </div>
    )
  } 
}

// PropTypes
ShowBook.propTypes = {
  library: PropTypes.object.isRequired
}


const btnStyle = {
  backgroundColor: 'ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  cursor: 'pointer',
  float: 'right'
}