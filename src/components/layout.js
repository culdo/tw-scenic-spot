import React from "react"
import { Link } from "gatsby"
import { allCity } from "../components/const"
import * as containerStyles from "./container.module.css"

export default function Layout({ children }) {
  return (
    <div>
      <div className={containerStyles.container}>
        {Object.keys(allCity).map((page, i) =>(
        <Link key={i} to={`/scenicSpot/${page === "All" ? "" : page}`} className={containerStyles.link}>
          <h3>{allCity[page]}</h3>
        </Link>
        ))}
      </div>
      <hr/>
      {children}
    </div>
  )
}