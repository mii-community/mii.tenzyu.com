import React from "react"
import '../utils/tailwind.css'
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)