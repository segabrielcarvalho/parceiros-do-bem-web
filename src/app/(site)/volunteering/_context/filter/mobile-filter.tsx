import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react'
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface FilterSection {
  id: string
  name: string
  options: { value: string; label: string; checked: boolean }[]
}

interface MobileFiltersProps {
  filters: FilterSection[]
  open: boolean
  setOpen: (open: boolean) => void
  onChangeFilter?: (id: string, value: string, checked: boolean) => void
}

export default function MobileFilters({
  filters,
  open,
  setOpen,
  onChangeFilter
}: MobileFiltersProps) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-40 sm:hidden">
      <DialogBackdrop className="fixed inset-0 bg-black/25" />
      <div className="fixed inset-0 z-40 flex">
        <DialogPanel className="relative ml-auto flex size-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
            >
              <span className="sr-only">Fechar</span>
              <XMarkIcon className="size-6" />
            </button>
          </div>
          <form className="mt-4">
            {filters.map((section) => (
              <Disclosure key={section.name} as="div" className="border-t border-gray-200 px-4 py-6">
                <h3>
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                    <span className="font-medium text-gray-900">{section.name}</span>
                    <ChevronDownIcon className="size-5" />
                  </DisclosureButton>
                </h3>
                <DisclosurePanel className="pt-6">
                  <div className="space-y-6">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex gap-3">
                        <input
                          id={`filter-mobile-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          type="checkbox"
                          defaultChecked={option.checked}
                          onChange={e => onChangeFilter?.(section.id, option.value, e.target.checked)}
                          className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor={`filter-mobile-${section.id}-${optionIdx}`} className="text-sm text-gray-500">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
