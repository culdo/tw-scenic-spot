import React from "react"
import { Link } from "gatsby"
const { allCity } = require("../../gatsby-node")

export default function Layout({ children }) {
  return (
    <div>
      <Link to={`/ScenicSpot`}>
        <h3>
          全部景點列表
        </h3>
      </Link>

      {allCity.map((city) =>(
        <Link to={`/ScenicSpot/${city}`}>
          <h3>{city}</h3>
        </Link>
        ))}
      <hr/>
      {children}
    </div>
  )
}