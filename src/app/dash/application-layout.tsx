'use client'

import { Avatar } from '@/components/avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/dropdown'
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '@/components/navbar'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '@/components/sidebar'
import { SidebarLayout } from '@/components/sidebar-layout'
import { getEvents } from '@/data'
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from '@heroicons/react/16/solid'
import {
  Cog6ToothIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  Square2StackIcon,
  TicketIcon
} from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'


function AccountDropdownMenu({ anchor }: { anchor: 'top start' | 'bottom end' }) {
  return (
    <DropdownMenu className="min-w-64" anchor={anchor}>
      <DropdownItem href="#">
        <UserCircleIcon />
        <DropdownLabel>Minha Conta</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="#">
        <ShieldCheckIcon />
        <DropdownLabel>Política de Privacidade</DropdownLabel>
      </DropdownItem>
      <DropdownItem href="#">
        <LightBulbIcon />
        <DropdownLabel>Compartilhar Feedback</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="/login">
        <ArrowRightStartOnRectangleIcon />
        <DropdownLabel>Sair</DropdownLabel>
      </DropdownItem>
    </DropdownMenu>
  )
}

function SidebarMainNav({ pathname }: { pathname: string }) {
  return (
    <SidebarSection>
      <SidebarItem href="/" current={pathname === '/'}>
        <HomeIcon />
        <SidebarLabel>Home</SidebarLabel>
      </SidebarItem>
      <SidebarItem href="/dash/events" current={pathname.startsWith('/dash/events')}>
        <Square2StackIcon />
        <SidebarLabel>Eventos</SidebarLabel>
      </SidebarItem>
      <SidebarItem href="/dash/volunteers" current={pathname.startsWith('/dash/volunteers')}>
        <TicketIcon />
        <SidebarLabel>Voluntários</SidebarLabel>
      </SidebarItem>
      <SidebarItem href="/dash/settings" current={pathname.startsWith('/dash/settings')}>
        <Cog6ToothIcon />
        <SidebarLabel>Configurações</SidebarLabel>
      </SidebarItem>
    </SidebarSection>
  )
}

function SidebarEventList({ events }: { events: Awaited<ReturnType<typeof getEvents>> }) {
  if (!events?.length) return null
  return (
    <SidebarSection className="max-lg:hidden">
      <SidebarHeading>Próximos Eventos</SidebarHeading>
      {events.map((event) => (
        <SidebarItem key={event.id} href={event.url}>
          {event.name}
        </SidebarItem>
      ))}
    </SidebarSection>
  )
}

function SidebarSupportSection() {
  return (
    <SidebarSection>
      <SidebarItem href="#">
        <QuestionMarkCircleIcon />
        <SidebarLabel>Suporte</SidebarLabel>
      </SidebarItem>
    </SidebarSection>
  )
}

function SidebarFooterAccount() {
  return (
    <Dropdown>
      <DropdownButton as={SidebarItem}>
        <span className="flex min-w-0 items-center gap-3">
          <Avatar src="/users/erica.jpg" className="size-10" square alt="" />
          <span className="min-w-0">
            <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">Erica</span>
            <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
              erica@example.com
            </span>
          </span>
        </span>
        <ChevronUpIcon />
      </DropdownButton>
      <AccountDropdownMenu anchor="top start" />
    </Dropdown>
  )
}

function SidebarHeaderTeamDropdown() {
  return (
    <Dropdown>
      <DropdownButton as={SidebarItem}>
        <Avatar src="/teams/parceiros-do-bem.png" />
        <SidebarLabel>Parceiros do Bem</SidebarLabel>
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
        <DropdownItem href="/settings">
          <Cog8ToothIcon />
          <DropdownLabel>Configurações</DropdownLabel>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem href="#">
          <PlusIcon />
          <DropdownLabel>Nova Campanha&hellip;</DropdownLabel>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

function NavbarUserMenu() {
  return (
    <Dropdown>
      <DropdownButton as={NavbarItem}>
        <Avatar src="/users/erica.jpg" square />
      </DropdownButton>
      <AccountDropdownMenu anchor="bottom end" />
    </Dropdown>
  )
}


export function ApplicationLayout({
  events,
  children,
}: {
  events: Awaited<ReturnType<typeof getEvents>>
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarUserMenu />
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <SidebarHeaderTeamDropdown />
          </SidebarHeader>
          <SidebarBody>
            <SidebarMainNav pathname={pathname} />
            <SidebarEventList events={events} />
            <SidebarSpacer />
            <SidebarSupportSection />
          </SidebarBody>
          <SidebarFooter className="max-lg:hidden">
            <SidebarFooterAccount />
          </SidebarFooter>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  )
}
