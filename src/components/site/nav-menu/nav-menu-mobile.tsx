import { Logo } from "@/components/logo"
import { Dialog, DialogPanel } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/16/solid"
import React from "react"
import { NavItem } from "./constants"
import { LoginButton } from "./login-button"

interface NavMenuMobileProps {
  open: boolean
  setOpen: (open: boolean) => void
  navigation: NavItem[]
}

export const NavMenuMobile: React.FC<NavMenuMobileProps> = ({ open, setOpen, navigation }) => (
  <Dialog open={open} onClose={setOpen} className="lg:hidden">
    <div className="fixed inset-0 z-50" />
    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <Logo />
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon aria-hidden="true" className="size-6" />
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="py-6">
            <LoginButton />
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
)
