import React from 'react'
import './styles.css'

function Details({name,sign,data}) {
  return (
    <div className="details">
        <h1>Hi {name}</h1>
        <div className="sign"> <p>{sign}</p> <p>{data.current_date}</p></div>
        <h2> {data.description}</h2>
    </div>
  )
}

export default Details