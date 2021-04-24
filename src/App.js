import React, {Component} from 'react'
import Header from './components/Header'
import Library from './components/Library'
import AddBook from './components/AddBook'


import './App.css';

class App extends Component {
  state = {
    library: [
      {
        id: 1,//findID(),
        title : 'Redwall',
        author : 'Brian Jacques',
        favorite : false,
        notes: 'first one'
      }, {
        id: 2, //findID(),
        title : 'Mossflower',
        author : 'Brian Jacques',
        favorite : false,
        notes: 'martin flashback'
      },
      {
        id: 3,//findID(),
        title : "The Sorcerer's Stone",
        author : 'J.K, Rowling',
        favorite : false,
        notes: 'Harry is straight up not having a good time right now'
      }
    ]
  }
  

  // Toggle Favorite
  chooseFavorite = (id) => {
    this.setState({ library: this.state.library.map(library => {
      if(library.id === id){
        library.favorite = !library.favorite
      }
      return library
    })})
  }


  //find ID
  // findID = () => {
  //  for(let i= 0; i< this.state.library.length; i++){
  //    return this.setState.library.id({library: (this.state.library[i] + 1)})
  //  }
  // }


  //Delete Library
  delLibrary = (id) => {
    this.setState({library: [...this.state.library.filter(
      library => library.id !== id
    )]})
  }

//AddBook
  addBook = (title, author, notes) => {
    let newBook = {
      id: 0,
      title: title,
      author: author,
      favorite: false,
      notes: notes
    }
    const nextID = () =>{
      return this.id++
    }
    this.setState({library: [...this.state.library, newBook]})
    return nextID
  }


  render() {
    return (
      <div className='App'>
        <div className="container">
          <Header/>
          <AddBook addBook={this.addBook} findID={this.findID}/>
          <Library library={this.state.library} chooseFavorite={this.chooseFavorite} chooseFavorite={this.chooseFavorite} delLibrary={this.delLibrary}/>
        </div>
      </div>
    )
  }
}

export default App;
