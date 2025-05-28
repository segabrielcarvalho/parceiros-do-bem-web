import { Gradient } from "@/components/gradient"

export const HeroVolunteeringSection = () => {

  return (
    <div className="bg-white">
      <Gradient opacity={0.2} zIndex={-10} />
      <div className="mx-auto max-w-7xl px-4 py-24 sm:py-36 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Oportunidades de <span className="text-rose-600">Voluntariado</span>
        </h1>
        <p className="mt-4 max-w-xl text-md text-gray-700">
          Confira campanhas, projetos e eventos sociais que estão em busca de pessoas engajadas como você. Escolha uma causa, inscreva-se e faça a diferença na vida de quem precisa!
        </p>
      </div>
    </div>
  )
}