// Write your Character component here
import React from "react";
import CharacterContainer from './character.jsx'


const Characters = props => {
    const { characterList } = props
    return (
        <CharacterContainer className='characterContainer'>
            <h1 id={characterList.name}>{characterList.name}</h1>
            <h2>Height: {characterList.height}</h2>
            <h2>Mass: {characterList.mass}</h2>
            <h2>Hair Color: {characterList.hair_color}</h2>
            <h2>Skin Color: {characterList.skin_color}</h2>
            <h2>Eye Color: {characterList.eye_color}</h2>
            <h2>Birth Year: {characterList.birth_year}</h2>
        </CharacterContainer>
    )
}

export default Characters;