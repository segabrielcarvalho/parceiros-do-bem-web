import { Avatar } from '@/components/avatar'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from '@/components/description-list'
import { Divider } from '@/components/divider'
import { Heading, Subheading } from '@/components/heading'
import { Link } from '@/components/link'
import { getOrder } from '@/data'
import {
  CalendarIcon,
  ChevronLeftIcon,
} from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const volunteer = await getOrder(params.id)

  return {
    title: volunteer && `Cadastro #${volunteer.id}`,
  }
}

export default async function Order({ params }: { params: { id: string } }) {
  const volunteer = await getOrder(params.id)

  if (!volunteer) {
    notFound()
  }

  return (
    <>
      {/* Navegação */}
      <div className="max-lg:hidden">
        <Link
          href="/volunteers"
          className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400"
        >
          <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
          Voluntários
        </Link>
      </div>

      {/* Cabeçalho */}
      <div className="mt-4 lg:mt-8">
        <div className="flex items-center gap-4">
          <Heading>Cadastro #{volunteer.id}</Heading>
          <Badge color="lime">Concluído</Badge>
        </div>
        <div className="isolate mt-2.5 flex flex-wrap justify-between gap-x-6 gap-y-4">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 py-1.5">
            <span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
              <CalendarIcon className="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500" />
              <span>{volunteer.date}</span>
            </span>
          </div>
          <div className="flex gap-4">
            <Button outline>Editar cadastro</Button>
            <Button>Enviar confirmação</Button>
          </div>
        </div>
      </div>

      {/* Resumo */}
      <div className="mt-12">
        <Subheading>Resumo</Subheading>
        <Divider className="mt-4" />
        <DescriptionList>
          <DescriptionTerm>Voluntário</DescriptionTerm>
          <DescriptionDetails>{volunteer.customer.name}</DescriptionDetails>

          <DescriptionTerm>Evento</DescriptionTerm>
          <DescriptionDetails>
            <Link href={volunteer.event.url} className="flex items-center gap-2">
              <Avatar src={volunteer.event.thumbUrl} className="size-6" />
              <span>{volunteer.event.name}</span>
            </Link>
          </DescriptionDetails>

          <DescriptionTerm>Email</DescriptionTerm>
          <DescriptionDetails>{volunteer.customer.email}</DescriptionDetails>

          <DescriptionTerm>Endereço</DescriptionTerm>
          <DescriptionDetails>{volunteer.customer.address}</DescriptionDetails>

          <DescriptionTerm>País</DescriptionTerm>
          <DescriptionDetails>
            <span className="inline-flex gap-3">
              <img src={volunteer.customer.countryFlagUrl} alt={volunteer.customer.country} />
              {volunteer.customer.country}
            </span>
          </DescriptionDetails>
        </DescriptionList>
      </div>
    </>
  )
}
