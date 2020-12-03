import React from 'react'

export default function Card({name, status, image, origin, species}) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <div className="card-inner">
        <p>Species: {species}</p>
        <p>Status: {status}</p>
        <p>Origin: {origin.name}</p>
      </div>
    </div>
  )
}
