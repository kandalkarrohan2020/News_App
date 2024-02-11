import React from 'react'
import './App.css'
export default function Card ({title,description,src,url}) {
  return (
  <div className="card" style={{maxWidth: "300px",minHeight: "400px"}}>
     <img src={src?src:"https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"} className="card-img-top" alt="..." style={{height:"220px"}}/>
     <div className="card-body">
       <h5 className="card-title">{title.slice(0,40)}</h5>
       <p className="card-text">{description?description.slice(0,100):"Some quick example text to build on the card title and make up the bulk of the card's content."}</p>
       <a href={url} className="btn btn-outline-primary">Read_More</a>
     </div>
   </div>
  )
}
