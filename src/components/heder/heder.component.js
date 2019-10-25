import React, { useState } from "react"
import Navbar from "../navbar/Navbar"
import Headroom from "react-headroom"

const Heder = ({ langs }) => {
  const [navbarOpen, setOpen] = useState(false)

  const handleNavbar = () => {
    setOpen(!navbarOpen)
  }
  return (
    <Headroom>
      <Navbar
        navbarState={navbarOpen}
        handleNavbar={handleNavbar}
        langs={langs}
      />
    </Headroom>
  )
}

export default Heder
