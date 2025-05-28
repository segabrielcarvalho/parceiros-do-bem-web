import { Footer } from '@/components/site/footer'
import { NavMenu } from '@/components/site/nav-menu'

export default async function SiteLayout({ children }: { children: React.ReactNode }) {

  return <>
    <NavMenu />
    {children}
    <Footer />
  </>
}
