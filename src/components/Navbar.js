import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <div className="nav_wrapper">
        <h1>
          <Link to="/">Strapi-Mongo</Link>
        </h1>
        <ul className="nav_list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
