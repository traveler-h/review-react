import React from 'react'
import { useLocation, useParams } from "react-router-dom";

export default function FilmDetail() {
  const params = useParams()
  const location =useLocation()
  console.log(params)
  console.log(location)
  return (
    <div>FilmDetail</div>
  )
}
