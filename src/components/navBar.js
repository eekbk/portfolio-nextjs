import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'

const navItems = ['Projects', 'Resume', 'b-b-b-Bonus!', 'Contact']
const pageNames = ['projects', 'resume', 'b-b-b-bonus', 'contact']

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  return (
    <header className="main-header">
      <div>
        <button className="hamburger-menu">
          <span class="hamburger-menu__bar"></span>
          <span class="hamburger-menu__bar"></span>
          <span class="hamburger-menu__bar"></span>
        </button>
      </div>
    </header>
  )
}

export default NavBar;
