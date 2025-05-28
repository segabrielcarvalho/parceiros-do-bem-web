"use client"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import { useState } from "react"
import FilterIndex from "../filter"

const sortOptions = [
  { name: 'Mais populares', href: '#', current: true },
  { name: 'Melhor avaliados', href: '#', current: false },
  { name: 'Mais recentes', href: '#', current: false },
]

const filters = [
  {
    id: 'category',
    name: 'Categoria',
    options: [
      { value: 'social', label: 'Social', checked: false },
      { value: 'meio-ambiente', label: 'Meio Ambiente', checked: false },
      { value: 'educacao', label: 'Educação', checked: false },
      { value: 'saude', label: 'Saúde', checked: false },
    ],
  },
  {
    id: 'location',
    name: 'Localização',
    options: [
      { value: 'sp', label: 'São Paulo', checked: false },
      { value: 'mg', label: 'Minas Gerais', checked: false },
      { value: 'pe', label: 'Pernambuco', checked: false },
      { value: 'rs', label: 'Rio Grande do Sul', checked: false },
    ],
  },
]
const activeFilters = [{ value: 'meio-ambiente', label: 'Meio Ambiente' }]

export const FilterVolunteeringSection = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <section aria-labelledby="filter-heading">
      <h2 id="filter-heading" className="sr-only">
        Filtros
      </h2>

      <div className="border-b border-gray-200 bg-white pb-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Ordenar
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                />
              </MenuButton>
            </div>
            <MenuItems className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none">
              <div className="py-1">
                {sortOptions.map((option) => (
                  <MenuItem key={option.name}>
                    <a
                      href={option.href}
                      className={clsx(
                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                        'block px-4 py-2 text-sm hover:bg-gray-100',
                      )}
                    >
                      {option.name}
                    </a>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>

          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
          >
            Filtros
          </button>

          <FilterIndex
            filters={filters}
            activeFilters={activeFilters}
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
          />
        </div>
      </div>
    </section>
  )
}