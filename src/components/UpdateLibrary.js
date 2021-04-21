import React, {Component} from 'react'
import axios from 'axios';
//import Library from './Library'

export default class UpdateLibrary extends Component {
  constructor(title, author, favorite, notes){
    super(title, author, favorite, notes);
    let newBook = axios.post('http://localhost:3001/Library.js', {
        bookNumber : 1,
        title : '',
        author : '',
        favorite : undefined,
        notes : '',
      } )     
    let UpdateBook = (title, author, favorite, notes) => {
      this.bookNumber = 1;
      this.title = title;
      this.author = author;
      this.favorite = favorite;
      this.notes = notes
    }      
  }
  render(){
    return(
      <div>  
        <newBook/>
      </div>  
    )
  }
}


//figuring out put requests, and event handlers