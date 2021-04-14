import React, {Component} from 'react'
import axios from 'axios'


export default class Library extends Component {
  constructor(){
    super();
    this.state = {
      bookList: []
    }

    let numberTheBook = bookList.map((element, index) =>
      <div>{bookNumber = index + 1}</div>
    );
    // numberTheBook = () => {
    //   for (let i = 0; i < bookList.length; i++){
    //     if(bookList[i] === bookList[i]){
    //       return this.bookNumber = (bookList[i] + 1)
    //     }
    //   }
    // }
  }
  render () {
    return (
      <h1>These are your books</h1>
    )
  } 
}