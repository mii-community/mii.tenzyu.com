import React from "react"
import { Link } from "gatsby"

const navs = [
  {
    name: "Credits",
    link: "/credits/",
  }
]
export default () => (
  <header class="h-16 mb-4 flex justify-around sticky top-0 left-0 z-50 opacity-90 bg-white border-b">
    <h1 class="my-auto text-xl">
      <Link to={"/"}>HOME</Link>
    </h1>
    <nav class="my-auto w-1/3">
      <ul class="flex justify-around">
      {navs.map(nav => (
        <li><Link to={nav.link}>{nav.name}</Link></li>
          ))}
      </ul>
    </nav>
  </header>
)