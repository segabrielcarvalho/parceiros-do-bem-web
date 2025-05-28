'use client'

import { HeroOurTeamSection } from './_context/sections/Hero'
import { ImpactNumbersOurTeamSection } from './_context/sections/ImpactNumbers'
import { LogoCloudOurTeamSection } from './_context/sections/LogoCloud'
import { OurPeopleOurTeamSection } from './_context/sections/OurPeaple'
import { TimeLineOurTeamSection } from './_context/sections/Timeline'

export default function OurPageTeam() {
  return (
    <div className="bg-white">

      <main className="isolate">
        <HeroOurTeamSection />
        <TimeLineOurTeamSection />
        <LogoCloudOurTeamSection />
        <OurPeopleOurTeamSection />
        <ImpactNumbersOurTeamSection />
      </main>
    </div>
  )
}
