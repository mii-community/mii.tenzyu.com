import React from "react"
import { Link } from "gatsby"

export default () => (
  <header class="font-logo text-xl h-16 mb-4 flex justify-around sticky top-0 left-0 z-50 opacity-90 bg-white border-b">
    <h1 class="my-auto">
      <Link to={"/"}>HOME</Link>
    </h1>
    <nav class="my-auto w-1/2">
      {/* <ul class="flex justify-around">
      {navs.map(nav => (
        <li><Link to={nav.link}>{nav.name}</Link></li>
          ))}
      </ul> */}
    </nav>
  </header>
)