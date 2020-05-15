import React, { useState, useEffect } from 'react';
import './App.css';
import Characters from './components/Character';
import axios from 'axios';

import CharactersAll from './CharactersAll';
import ImagesStyled from './Images.jsx';
import ImageDiv from './ImgDiv.jsx';


import skyWalker from './Luke_Skywalker.png'
import R2D2 from './r2d2.png'
import C3PO from './C-3PO.png'
import Leia from './Leia_Organa.png'
import Owen from './Owen.png'
import Beru from './Beru.jpg'
import R5D4 from './R5d4.jpg'
import Darth from './Darth_Vader.png'
import Obi from './ObiWan.jpg'
import Biggs from './Biggs.png'

const App = () => {
  const [character, setCharachter] = useState([])


  useEffect(() => {
    axios.get(`https://swapi.py4e.com/api/people/`)
      .then(res => {
        setCharachter(res.data.results)
      }).catch(err => {
        console.log(err)
      })
  }, [])



  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharactersAll>
        <ImageDiv>
          <ImagesStyled src={skyWalker} />
          <a href='#Luke Skywalker'>Luke Skywalker</a>
        </ImageDiv>
        <ImageDiv>
          <ImagesStyled src={R2D2} />
          <a href='#R2-D2'>R2-D2</a>
        </ImageDiv>
        <ImageDiv>
          <ImagesStyled src={C3PO} />
          <a href='#C-3PO'>C-3PO</a>
        </ImageDiv>
        <ImageDiv>
          <ImagesStyled src={Leia} />
          <a href='#Leia Organa'>Leia Organa</a>
        </ImageDiv>
        <ImageDiv>
          <ImagesStyled src={Owen} />
          <a href='#Owen Lars'>Owen Lars</a>
        </ImageDiv>
        <ImageDiv>
          <ImagesStyled src={Beru} />
          <a href='#Beru Whitesun lars'>Beru Whitesun lars</a>
        </ImageDiv>
        <ImageDiv>
          <ImagesStyled src={R5D4} />
          <a href='#R5-D4'>R5-D4</a>
        </ImageDiv>
        <ImageDiv>
          <ImagesStyled src={Darth} />
          <a href='#Darth Vader'>Darth Vader</a>
        </ImageDiv>
        <ImageDiv>
          <ImagesStyled src={Obi} />
          <a href='#Obi-Wan Kenobi'>Obi-Wan Kenobi</a>
        </ImageDiv>
        <ImageDiv>
          <ImagesStyled src={Biggs} />
          <a href='#Biggs Darklighter'>Biggs Darklighter</a>
        </ImageDiv>
      </CharactersAll>
      <CharactersAll>
        {character.map((character, index) => <Characters key={index} characterList={character} />)}
      </CharactersAll>
    </div>
  );
}

export default App;
