import React, {Component} from 'react'
import axios from 'axios'
import UpdateLibrary from './UpdateLibrary'


export default class Library extends Component {
  
  constructor(){
    super();
    let bookList = [{
      bookNumber : 1,
      title : 'Redwall',
      author : 'Brian Jacques',
      favorite : true,
      notes : '',
    }, {
      bookNumber : 2,
      title : 'Martin the Warrior',
      author : 'Brian Jacques',
      favorite : true,
      notes : '',
    }];
    this.state = {
      bookList
    }

    // let numberTheBook = bookList.map((element, index) =>
    //   <div>{bookNumber = index + 1}</div>
    // );
    let numberTheBook = () => {
      for (let i = 0; i < bookList.length; i++){
        if(bookList[i] === bookList[i]){
          return this.bookNumber = (bookList[i] + 1)
        }
      }
    }
  }
  render () {
    return (
      <div>
        <h1>These are your books</h1>
        <UpdateLibrary/>
        <numberTheBook/>
      </div>  
    )
  } 
}