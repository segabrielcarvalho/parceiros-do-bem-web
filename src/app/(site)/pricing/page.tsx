'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Radio,
  RadioGroup
} from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useState } from 'react'

const pricing = {
  frequencies: [
    { value: 'monthly', label: 'Mensal', priceSuffix: '/mês' },
    { value: 'annually', label: 'Anual', priceSuffix: '/ano' },
  ],
  tiers: [
    {
      name: 'Gratuito',
      id: 'tier-free',
      href: '#',
      price: { monthly: 'R$0', annually: 'R$0' },
      description: 'Para organizações que estão começando ou querem experimentar.',
      features: [
        'Cadastro de até 3 ações de voluntariado',
        'Aprovação manual de voluntários',
        'Comunicação interna via chat básico',
        'Certificados digitais automáticos',
      ],
      mostPopular: false,
    },
    {
      name: 'Essencial',
      id: 'tier-essencial',
      href: '#',
      price: { monthly: 'R$49', annually: 'R$490' },
      description: 'Recursos fundamentais para quem quer crescer no impacto social.',
      features: [
        'Ações ilimitadas',
        'Banco de voluntários por interesse e perfil',
        'Match inteligente voluntário-vaga',
        'Gestão de inscrições e confirmações',
        'Relatórios básicos de engajamento',
        'Suporte por e-mail',
      ],
      mostPopular: false,
    },
    {
      name: 'Profissional',
      id: 'tier-profissional',
      href: '#',
      price: { monthly: 'R$99', annually: 'R$990' },
      description: 'Ideal para ONGs e eventos que desejam profissionalizar a gestão.',
      features: [
        'Tudo do Essencial',
        'Gestão de equipes e papéis',
        'Agendamento e lembretes automáticos',
        'Relatórios avançados de impacto',
        'Exportação de dados',
        'Suporte prioritário',
      ],
      mostPopular: true,
    },
    {
      name: 'Institucional',
      id: 'tier-enterprise',
      href: '#',
      price: { monthly: 'Sob consulta', annually: 'Sob consulta' },
      description: 'Para grandes redes, federações ou projetos corporativos.',
      features: [
        'Tudo do Profissional',
        'API para integrações externas',
        'Ambiente customizado (marca e domínio)',
        'Consultoria de implementação',
        'Gestão multi-organização',
        'Treinamento dedicado',
        'Suporte exclusivo',
      ],
      mostPopular: false,
    },
  ],
}

const faqs = [
  {
    question: "Preciso pagar para ser voluntário pelo Parceiros do Bem?",
    answer: "Não. O cadastro e a participação como voluntário sempre serão gratuitos! Os planos são voltados para organizações que desejam recursos avançados de gestão e comunicação.",
  },
  {
    question: "Consigo experimentar os planos pagos antes?",
    answer: "Sim! Oferecemos período de teste gratuito no primeiro cadastro de ONG ou projeto.",
  },
  {
    question: "Minha ONG é pequena, vale a pena o plano Essencial?",
    answer: "Sim! Mesmo pequenas organizações se beneficiam do match inteligente, banco de voluntários e relatórios automáticos para ampliar seu impacto.",
  },
  {
    question: "O plano Institucional pode atender projetos de prefeituras ou grandes campanhas?",
    answer: "Sim! Ele é projetado para redes de ONGs, prefeituras, universidades ou eventos corporativos, com suporte e integrações sob medida.",
  },
]

export default function PricingParceirosDoBem() {
  const [frequency, setFrequency] = useState(pricing.frequencies[0])

  return (
    <div className="bg-white py-10">
      <main>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-base/7 font-semibold text-rose-600">Planos Parceiros do Bem</h1>
            <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
              Gestão social acessível para todos
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
            Escolha o plano ideal para sua organização e amplie seu impacto social com recursos inteligentes de gestão de voluntariado.
          </p>
          <div className="mt-16 flex justify-center">
            <fieldset aria-label="Frequência de pagamento">
              <RadioGroup
                value={frequency}
                onChange={setFrequency}
                className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-gray-200 ring-inset"
              >
                {pricing.frequencies.map((option) => (
                  <Radio
                    key={option.value}
                    value={option}
                    className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-checked:bg-rose-600 data-checked:text-white"
                  >
                    {option.label}
                  </Radio>
                ))}
              </RadioGroup>
            </fieldset>
          </div>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.id}
                className={clsx(
                  tier.mostPopular ? 'ring-2 ring-rose-600' : 'ring-1 ring-gray-200',
                  'rounded-3xl p-8',
                )}
              >
                <h2
                  id={tier.id}
                  className={clsx(
                    tier.mostPopular ? 'text-rose-600' : 'text-gray-900',
                    'text-lg/8 font-semibold',
                  )}
                >
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm/6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-gray-900">
                    {tier.price[frequency.value as keyof typeof tier.price]}
                  </span>
                  <span className="text-sm/6 font-semibold text-gray-600">{frequency.priceSuffix}</span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={clsx(
                    tier.mostPopular
                      ? 'bg-rose-600 text-white shadow-xs hover:bg-rose-500'
                      : 'text-rose-600 ring-1 ring-rose-200 ring-inset hover:ring-rose-300',
                    'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600',
                  )}
                >
                  {tier.price.monthly === 'R$0' ? 'Começar grátis' : 'Escolher plano'}
                </a>
                <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-rose-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto my-24 max-w-7xl px-6 sm:my-56 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Dúvidas frequentes
            </h2>
            <dl className="mt-16 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base/7 font-semibold">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                        <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <p className="text-base/7 text-gray-600">{faq.answer}</p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </main>
    </div>
  )
}
