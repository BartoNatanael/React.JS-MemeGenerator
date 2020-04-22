import React, { Component } from 'react';
import './css/index.css';
import Header from './components/header';
import MemeChoser from './components/imageChooser';

//images import:
import black from './images/memes/black.jpg';
import fist from './images/memes/fist.jpg';
import ginger from './images/memes/ginger.jpg';
import kermit from './images/memes/kermit.jpg';
import kid from './images/memes/kid.jpg';
import oooo from './images/memes/oooo.jpg';
import pepe from './images/memes/pepe.jpg';

let memesList = [
  {meme: black, id:'0'},
  {meme: fist, id:'1'},
  {meme: ginger, id:'2'},
  {meme: kermit, id:'3'},
  {meme: kid, id:'4'},
  {meme: oooo, id:'5'},
  {meme: pepe, id: '6'},
]


class App extends Component {
  
  state={
    topText: '',
    bottomText: '',
    id: "",
    chosed: false,
  }
  
  handleClickOnMeme = (id) => {
    console.log(id)
    this.setState({
      id,
      chosed: true
    })
  }

  render(){
    return(
      <div className="wrapper">
        <Header/>
        <MemeChoser list={memesList} click={this.handleClickOnMeme}/>
        
      </div>
    )
  };
}

export default App;
