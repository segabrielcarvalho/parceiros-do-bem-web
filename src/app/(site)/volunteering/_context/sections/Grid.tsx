const projects = [
  {
    id: 1,
    name: 'Campanha do Agasalho 2024',
    href: '/volunteering/1',
    info: 'São Paulo - SP',
    imageSrc: 'https://images.unsplash.com/photo-1451481454041-104482d8e284?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Voluntários organizando doações de agasalhos.',
  },
  {
    id: 2,
    name: 'Mutirão de Limpeza Urbana',
    href: '/volunteering/2',
    info: 'Belo Horizonte - MG',
    imageSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Grupo recolhendo lixo em praça pública.',
  },
  {
    id: 3,
    name: 'Ação Solidária em Escolas',
    href: '/volunteering/3',
    info: 'Recife - PE',
    imageSrc: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Crianças recebendo apoio escolar e recreativo.',
  },
  {
    id: 4,
    name: 'Distribuição de Alimentos',
    href: '/volunteering/4',
    info: 'Porto Alegre - RS',
    imageSrc: 'https://images.unsplash.com/photo-1451481454041-104482d8e284?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Voluntários distribuindo refeições para famílias.',
  },
]

export const GridVolunteeringSection = () => {

  return (
    <section
      aria-labelledby="products-heading"
      className="mx-auto max-w-2xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:max-w-7xl lg:px-8"
    >
      <h2 id="products-heading" className="sr-only">
        Projetos para voluntariar
      </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {projects.map((project) => (
          <a key={project.id} href={project.href} className="group">
            <img
              alt={project.imageAlt}
              src={project.imageSrc}
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
            />
            <h3 className="mt-4 text-sm text-gray-700">{project.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{project.info}</p>
          </a>
        ))}
      </div>
    </section>
  )
}