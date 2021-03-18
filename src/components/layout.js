import React from "react"
import { Link } from "gatsby"
import { allCity } from "../components/const"

export default function Layout({ children }) {
  return (
    <div>
      <Link to={`/scenicSpot`}>
        <h3>
          全部景點列表
        </h3>
      </Link>

      {allCity.map((city) =>(
        <Link to={`/scenicSpot/${city}`}>
          <h3>{city}</h3>
        </Link>
        ))}
      <hr/>
      {children}
    </div>
  )
}