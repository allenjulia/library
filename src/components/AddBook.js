import { findByDisplayValue } from '@testing-library/dom';
import React, {Component} from 'react'
import uuid from 'uuid'

export default class AddBook extends Component {
  state = {
    title: '',
    author: '',
    favorite: false,
    notes: ''
  }

  onSubmit = (e) => {
    e.preventDefault ();
    this.props.addBook([this.state.title], [this.state.author], [this.state.notes]);
    this.setState(
      {title: '',
      author: '',
      notes: ''
    } )

  }
  onChange = (e) => this.setState({[e.target.name]: e.target.value})

  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <input 
        type="text" 
        name="title" 
        placeholder="Title"
        value={this.state.title}
        onChange={this.onChange}
        />
        <input 
        type="text" 
        name="author" 
        placeholder="Author"
        value={this.state.author}
        onChange={this.onChange}
        />
        <input 
        type="text" 
        name="notes" 
        placeholder="Notes"
        value={this.state.notes}
        onChange={this.onChange}
        />
        <input 
        type ="submit" 
        value="Add Book" 
        className="btn" 
        />
      </form>
    )
  }
}