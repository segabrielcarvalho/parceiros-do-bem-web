import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface FilterSection {
  id: string
  name: string
  options: { value: string; label: string; checked: boolean }[]
}

interface WebFiltersProps {
  filters: FilterSection[]
  activeFilters: { value: string; label: string }[]
  onChangeFilter?: (id: string, value: string, checked: boolean) => void
  setMobileFiltersOpen: (open: boolean) => void
}

export default function WebFilters({
  filters,
  activeFilters,
  onChangeFilter,
  setMobileFiltersOpen
}: WebFiltersProps) {
  return (
    <div className="hidden sm:block">
      <div className="flow-root">
        <PopoverGroup className="-mx-4 flex items-center divide-x divide-gray-200">
          {filters.map((section) => (
            <Popover key={section.name} className="relative inline-block px-4 text-left">
              <PopoverButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                <span>{section.name}</span>
                <ChevronDownIcon className="-mr-1 ml-1 size-5 text-gray-400 group-hover:text-gray-500" />
              </PopoverButton>
              <PopoverPanel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black/5">
                <form className="space-y-4">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex gap-3">
                      <input
                        id={`filter-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        type="checkbox"
                        defaultChecked={option.checked}
                        onChange={e => onChangeFilter?.(section.id, option.value, e.target.checked)}
                        className="rounded border-gray-300 accent-rose-500 focus:ring-rose-400"
                      />

                      <label
                        htmlFor={`filter-${section.id}-${optionIdx}`}
                        className="pr-6 text-sm font-medium whitespace-nowrap text-gray-900"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </form>
              </PopoverPanel>
            </Popover>
          ))}
        </PopoverGroup>
      </div>
    </div>
  )
}
