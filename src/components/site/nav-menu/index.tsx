"use client"
import { Logo } from "@/app/logo"
import { Bars3Icon } from "@heroicons/react/16/solid"
import React, { useState } from "react"
import { navigation } from "./constants"
import { LoginButton } from "./login-button"
import { NavMenuMobile } from "./nav-menu-mobile"
import { NavMenuWeb } from "./nav-menu-web"

export const NavMenu: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Logo />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <NavMenuWeb navigation={navigation} />
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <LoginButton />
          </div>
        </nav>
      </div>


      <NavMenuMobile open={mobileMenuOpen} setOpen={setMobileMenuOpen} navigation={navigation} />
    </header>
  )
}
