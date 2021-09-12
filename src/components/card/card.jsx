import React from "react"
import "./card.css"

export const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${monster.id}?set=set2`} alt="" />
      <h1>{monster.name}</h1>
    </div>
  )
}
