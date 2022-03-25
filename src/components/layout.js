import React, {useState} from "react"
import { Link } from "gatsby"
import { allCity } from "../components/const"
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Helmet } from "react-helmet"

export default function Layout({ children, cityName }) {
  const [wid, setWid] = useState('15%');
  const openSidenav = () => {
    setWid('15%')
  }
  const closeSidenav = () => {
    setWid('0%')
  }
  return (
    <div style={{marginTop: "5rem"}}>
      <div className="application">
          <Helmet>
          <meta charSet="utf-8" />
          <title>旅遊景點APP：{cityName}</title>
          <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
      </div>

      <div className="mytop-nav-bar border-bottom border-primary">
        <button className="btn btn-primary m-2" onClick={openSidenav}>景點列表</button>
        <h1 className="text-primary" style={{margin: "0 auto"}}>{cityName} 旅遊景點</h1>
        <hr/>
      </div>
      <div className="sidenav" style={{width: wid}}>
        <button className="btn btn-light myclose-bt" onClick={closeSidenav}>X</button>
        {Object.keys(allCity).map((page, i) =>(
        <Link key={i} to={`/scenicSpot/${page === "All" ? "" : page}`} className={`btn btn-primary btn-sm m-1`}  role="button">
          <h4>{allCity[page]}</h4>
        </Link>
        ))}
      </div>
      {children}
    </div>
  )
}