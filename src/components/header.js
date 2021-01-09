import React from "react"
import { Link } from "gatsby"

export default () => (
  <header class="font-logo flex justify-around sticky top-0 left-0 z-50 h-16 border-b opacity-90 bg-white mb-5">
    <h1 class="my-auto ml-5 text-xl">
      <Link to={"/"}>HOME</Link>
    </h1>
    <nav class="my-auto mr-5 w-1/3">
      <ul class="flex justify-around">
      {/* {navs.map(nav => (
        <li><Link to={nav.link}>{nav.name}</Link></li>
          ))} */}
      </ul>
    </nav>
  </header>
)