import Link from "next/link"
import React from "react"
import { NavItem } from "./constants"

interface NavMenuWebProps {
  navigation: NavItem[]
}

export const NavMenuWeb: React.FC<NavMenuWebProps> = ({ navigation }) => (
  <div className="hidden lg:flex lg:gap-x-12">
    {navigation.map((item) => (
      <Link key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
        {item.name}
      </Link>
    ))}
  </div>
)
