import React, { Component } from 'react';
import './css/index.css';
import Header from './components/header';
import MemeChoser from './components/imageChooser';
import Modal from './components/Modal';

//images import:
import black from './images/memes/black.jpg';
import fist from './images/memes/fist.jpg';
import ginger from './images/memes/ginger.jpg';
import kermit from './images/memes/kermit.jpg';
import kid from './images/memes/kid.jpg';
import oooo from './images/memes/oooo.jpg';
import pepe from './images/memes/pepe.jpg';
import nosacz from './images/memes/noszacz.jpg';
import papiez from './images/memes/papiez.jpg';
import rex from './images/memes/rex.jpg';
import whatif from './images/memes/whatif.jpg';
import pikachu from './images/memes/pikachu.jpg';
import butter from './images/memes/butter.jpg';
import guys from './images/memes/guys.png';
import death from './images/memes/death.jpg';
import money from './images/memes/money.png';
import blackkid from './images/memes/blackkid.jpg';
import funnykid from './images/memes/funnykid.jpg';
import doge from './images/memes/doge.jpg';
import saddoge from './images/memes/saddoge.jpg';
import killerdoge from './images/memes/killerdoge.jpg';
import cat from './images/memes/cat.jpg';
import tablecat from './images/memes/tablecat.png';
import bob from './images/memes/bob.jpg';
import smilebob from './images/memes/smilebob.jpg';

let memesList = [
  {meme: black, id:'0'},
  {meme: fist, id:'1'},
  {meme: ginger, id:'2'},
  {meme: kermit, id:'3'},
  {meme: kid, id:'4'},
  {meme: oooo, id:'5'},
  {meme: pepe, id: '6'},
  {meme: nosacz, id: '7'},
  {meme: papiez, id: '8'},
  {meme: rex, id: '9'},
  {meme: whatif, id: '10'},
  {meme: pikachu, id: '11'},
  {meme: butter, id: '12'},
  {meme: guys, id: '13'},
  {meme: death, id: '14'},
  {meme: money, id: '15'},
  {meme: blackkid, id: '16'},
  {meme: funnykid, id: '17'},
  {meme: doge, id: '18'},
  {meme: saddoge, id: '19'},
  {meme: killerdoge, id: '20'},
  {meme: cat, id: '21'},
  {meme: tablecat, id: '22'},
  {meme: bob, id: '23'},
  {meme: smilebob, id: '24'},
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

  handleClose = () => {
    this.setState({
      id: '',
      chosed: false,
      topText: '',
      bottomText: ''
    })
  }

  handleTextChange = (e) =>{
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  render(){
    return(
      <div className="wrapper">
        <Header/>
        <MemeChoser list={memesList} click={this.handleClickOnMeme}/>
        {this.state.chosed 
          ? <Modal close={this.handleClose} changeText={this.handleTextChange} state={this.state} memesList={memesList}/> 
          : null}
      </div>
    )
  };
}

export default App;
