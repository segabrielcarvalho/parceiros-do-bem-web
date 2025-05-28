import { routes } from "@/routes"

export interface NavItem {
  name: string
  href: string
}

export const navigation: NavItem[] = [
  { name: routes.home.name, href: routes.home.path },
  { name: routes.features.name, href: routes.features.path },
  { name: routes.ourTeam.name, href: routes.ourTeam.path },
  { name: routes.pricing.name, href: routes.pricing.path },
  { name: routes.campaigns.name, href: routes.campaigns.path },
]
