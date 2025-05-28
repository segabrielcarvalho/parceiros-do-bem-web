'use client'

import MobileFilters from "./mobile-filter";
import WebFilters from "./web-filter";


interface FilterSection {
  id: string
  name: string
  options: { value: string; label: string; checked: boolean }[]
}

interface FilterIndexProps {
  filters: FilterSection[]
  activeFilters: { value: string; label: string }[]
  onChangeFilter?: (id: string, value: string, checked: boolean) => void
  setMobileFiltersOpen: (value: boolean) => void
  mobileFiltersOpen: boolean
}

export default function FilterIndex({
  filters,
  activeFilters,
  onChangeFilter,
  setMobileFiltersOpen,
  mobileFiltersOpen,
}: FilterIndexProps) {
  return (
    <>
      <MobileFilters
        filters={filters}
        onChangeFilter={onChangeFilter}
        open={mobileFiltersOpen}
        setOpen={setMobileFiltersOpen}
      />

      <WebFilters
        filters={filters}
        activeFilters={activeFilters}
        onChangeFilter={onChangeFilter}
        setMobileFiltersOpen={setMobileFiltersOpen}
      />
    </>
  )
}
