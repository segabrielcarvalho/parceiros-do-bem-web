'use client'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels
} from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { ShareIcon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { Fragment, useState } from 'react'

const navigation = {
  categorias: [
    {
      id: 'mutirao',
      name: 'Mutirões',
      featured: [
        {
          name: 'Mutirão Limpeza',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
          imageAlt: 'Voluntários recolhendo lixo em praça pública.',
        },
        {
          name: 'Mutirão Escolar',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
          imageAlt: 'Voluntários ajudando crianças em escola.',
        },
      ],
      sections: [
        {
          id: 'ambiental',
          name: 'Ambiental',
          items: [
            { name: 'Praças', href: '#' },
            { name: 'Parques', href: '#' },
          ],
        },
        {
          id: 'educacao',
          name: 'Educação',
          items: [
            { name: 'Escolas', href: '#' },
            { name: 'Bibliotecas', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'campanhas',
      name: 'Campanhas',
      featured: [
        {
          name: 'Campanha do Agasalho',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1451481454041-104482d8e284?auto=format&fit=crop&w=400&q=80',
          imageAlt: 'Voluntários organizando doações de agasalhos.',
        },
      ],
      sections: [
        {
          id: 'solidariedade',
          name: 'Solidariedade',
          items: [
            { name: 'Alimentos', href: '#' },
            { name: 'Roupas', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Todos Projetos', href: '#' },
    { name: 'Como Funciona', href: '#' },
  ],
}

const projeto = {
  titulo: 'Mutirão de Limpeza Urbana',
  organizacao: 'Associação Amigos do Verde',
  cidade: 'Belo Horizonte, MG',
  imagem: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  imageAlt: 'Voluntários recolhendo lixo em praça pública.',
  data: '15 de junho de 2024',
  horario: '08:00 às 13:00',
  vagas: 25,
  vagasRestantes: 7,
  descricao:
    'Participe do nosso mutirão para deixar a cidade mais limpa! Será uma manhã de trabalho em equipe, diversão e muito impacto positivo para o meio ambiente.',
  atividades: [
    'Coleta de resíduos sólidos em praças e ruas',
    'Separação para reciclagem',
    'Orientação à população',
    'Registro fotográfico das ações',
  ],
  requisitos: [
    'Idade mínima: 16 anos',
    'Disposição para trabalho em equipe',
    'Uso obrigatório de máscara e luvas',
  ],
  beneficios: [
    'Certificado de participação',
    'Almoço e lanche incluídos',
    'Horas complementares para estudantes',
  ],
}

const depoimentos = [
  {
    id: 1,
    rating: 5,
    content: `
      <p>Foi uma experiência incrível, fiz amigos e senti que realmente contribuí com a comunidade!</p>
    `,
    date: '10 Jun, 2024',
    datetime: '2024-06-10',
    author: 'Ana Paula Souza',
    avatarSrc: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>Ótima organização, tudo bem seguro e divertido. Recomendo para quem quer ajudar!</p>
    `,
    date: '05 Jun, 2024',
    datetime: '2024-06-05',
    author: 'Carlos Mendes',
    avatarSrc: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
]

const faqs = [
  {
    question: 'Preciso levar algum material?',
    answer: 'Não, todo o material necessário será fornecido pela organização.',
  },
  {
    question: 'Posso participar sem experiência anterior?',
    answer: 'Sim, qualquer pessoa disposta a ajudar é bem-vinda!',
  },
]

export default function VolunteeringDetails() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white py-16">
      {/* Menu Mobile */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-black/25" />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Fechar menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categorias.map((categoria) => (
                    <Tab
                      key={categoria.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-rose-600 data-selected:text-rose-600"
                    >
                      {categoria.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categorias.map((categoria) => (
                  <TabPanel key={categoria.name} className="space-y-10 px-4 pt-10 pb-8">
                    <div className="grid grid-cols-2 gap-x-4">
                      {categoria.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Ver detalhes
                          </p>
                        </div>
                      ))}
                    </div>
                    {categoria.sections.map((section) => (
                      <div key={section.name}>
                        <p className="font-medium text-gray-900">{section.name}</p>
                        <ul className="mt-6 flex flex-col space-y-6">
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Conteúdo Principal */}
      <main className="mx-auto px-4 pt-9 pb-24 sm:px-6 sm:pt-16 sm:pb-32 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          {/* Imagem e resumo */}
          <div className="lg:col-span-4 lg:row-end-1">
            <img
              alt={projeto.imageAlt}
              src={projeto.imagem}
              className="aspect-4/3 w-full rounded-lg bg-gray-100 object-cover"
            />
          </div>

          {/* Detalhes principais */}
          <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{projeto.titulo}</h1>
              <div className="mt-2 text-sm text-gray-500">
                <span className="font-semibold">{projeto.organizacao}</span> — {projeto.cidade}
              </div>
              <div className="mt-2 text-sm text-gray-600">
                <span className="font-semibold">Data:</span> {projeto.data}
                <span className="ml-4 font-semibold">Horário:</span> {projeto.horario}
              </div>
              <div className="mt-2 text-sm text-gray-600">
                <span className="font-semibold">Vagas restantes:</span> {projeto.vagasRestantes} de {projeto.vagas}
              </div>
            </div>
            <p className="mt-6 text-gray-500">{projeto.descricao}</p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-zinc-100 px-8 py-3 text-base font-medium text-zinc-700 hover:bg-zinc-200 hover:text-zinc-600 focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
              >
                Compartilhar <ShareIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-600 px-8 py-3 text-base font-medium text-white hover:bg-rose-700 focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
              >
                Inscreva-se
              </button>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="text-sm font-medium text-gray-900">Atividades</h3>
              <ul className=" mt-2 list-disc space-y-2 pl-5 text-sm text-gray-600 marker:text-gray-400">
                {projeto.atividades.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Requisitos</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-600 marker:text-gray-400">
                {projeto.requisitos.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Benefícios</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-600 marker:text-gray-400">
                {projeto.beneficios.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tabs para Depoimentos, FAQ etc */}
          <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
            <TabGroup>
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8">
                  <Tab className="border-b-2 border-transparent py-6 text-sm font-medium whitespace-nowrap text-gray-700 hover:border-gray-300 hover:text-gray-800 data-selected:border-rose-600 data-selected:text-rose-600">
                    Perguntas Frequentes
                  </Tab>

                  <Tab className="border-b-2 border-transparent py-6 text-sm font-medium whitespace-nowrap text-gray-700 hover:border-gray-300 hover:text-gray-800 data-selected:border-rose-600 data-selected:text-rose-600">
                    Depoimentos
                  </Tab>

                </TabList>
              </div>
              <TabPanels as={Fragment}>
                <TabPanel className="text-sm text-gray-500">
                  <h3 className="sr-only">Perguntas Frequentes</h3>
                  <dl>
                    {faqs.map((faq) => (
                      <Fragment key={faq.question}>
                        <dt className="mt-10 font-medium text-gray-900">{faq.question}</dt>
                        <dd className="mt-2 text-sm/6 text-gray-500">
                          <p>{faq.answer}</p>
                        </dd>
                      </Fragment>
                    ))}
                  </dl>
                </TabPanel>

                <TabPanel className="-mb-10">
                  <h3 className="sr-only">Depoimentos</h3>
                  {depoimentos.map((review, reviewIdx) => (
                    <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
                      <div className="flex-none py-10">
                        <img alt="" src={review.avatarSrc} className="size-10 rounded-full bg-gray-100" />
                      </div>
                      <div className={clsx(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10')}>
                        <h3 className="font-medium text-gray-900">{review.author}</h3>
                        <p>
                          <time dateTime={review.datetime}>{review.date}</time>
                        </p>
                        <div className="mt-4 flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              aria-hidden="true"
                              className={clsx(
                                review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                'size-5 shrink-0',
                              )}
                            />
                          ))}
                        </div>
                        <p className="sr-only">{review.rating} de 5 estrelas</p>
                        <div
                          dangerouslySetInnerHTML={{ __html: review.content }}
                          className="mt-4 text-sm/6 text-gray-500"
                        />
                      </div>
                    </div>
                  ))}
                </TabPanel>

              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </main>
    </div>
  )
}
