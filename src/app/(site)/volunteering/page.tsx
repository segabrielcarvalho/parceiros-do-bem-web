import { FilterVolunteeringSection } from './_context/sections/Filter'
import { GridVolunteeringSection } from './_context/sections/Grid'
import { HeroVolunteeringSection } from './_context/sections/Hero'

export default function VolunteeringPage() {
  return (
    <div className="bg-gray-50">
      <div>
        <main>
          <HeroVolunteeringSection />
          <FilterVolunteeringSection />
          <GridVolunteeringSection />
        </main>
      </div>
    </div>
  )
}
