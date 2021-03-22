import React from "react"
import { Link } from "gatsby"
import { allCity } from "../components/const"

export default function Layout({ children }) {
  return (
    <div>
      {Object.keys(allCity).map((page) =>(
        <Link to={`/scenicSpot/${page === "All" ? "" : page}`}>
          <h3>{allCity[page]}</h3>
        </Link>
        ))}
      <hr/>
      {children}
    </div>
  )
}