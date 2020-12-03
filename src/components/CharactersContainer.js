import React from 'react'
import Card from './Card'

export default function CharactersContainer({characters}) {

  const createCards = () => characters
    .map(character => <Card key={character.id} {...character} />)

  return (
    <div className="character-container">
      {createCards()}
    </div>
  )
}
