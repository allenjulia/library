import React, {Component} from 'react'
import axios from 'axios';
import Library from './Library'

export default class UpdateLibrary extends Component {
  constructor(title, author, favorite, notes){
    super(title, author, favorite, notes);
    AddBook = (title, author, favorite, notes) => {
        this.bookNumber = numberTheBook();
        this.title = title;
        this.author = author;
        this.favorite = favorite;
        this.notes = notes
      }      
    UpdateBook = (title, author, favorite, notes) => {
      this.bookNumber = numberTheBook();
      this.title = title;
      this.author = author;
      this.favorite = favorite;
      this.notes = notes
    }      
  }
  render(){
    return(
      <div>  
        <Library showBooks={this.state.bookList}/>
      </div>  
    )
  }
}


//figuring out put requests, and event handlers