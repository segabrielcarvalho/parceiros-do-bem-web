import { CheckIcon } from '@heroicons/react/20/solid'
import { features } from './constants'

export default function FeatureSection() {
  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="text-base/7 font-semibold text-rose-600">Parceiros do Bem</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Unindo pessoas, causas e impacto social
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
              Uma plataforma feita para centralizar oportunidades, conectar pessoas e transformar ações voluntárias em resultados concretos para a sociedade. Simples, inteligente e eficiente para quem faz o bem acontecer.
            </p>
          </div>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon aria-hidden="true" className="absolute top-1 left-0 size-5 text-rose-500" />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
