import { Stat } from '@/app/stat'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Heading, Subheading } from '@/components/heading'
import { Link } from '@/components/link'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table'
import { getEvent, getEventOrders } from '@/data'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const event = await getEvent(params.id)
  return { title: event?.name }
}

export default async function Event({ params }: { params: { id: string } }) {
  const event = await getEvent(params.id)
  const volunteers = await getEventOrders(params.id)

  if (!event) {
    notFound()
  }

  return (
    <>
      <div className="max-lg:hidden">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400"
        >
          <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
          Eventos
        </Link>
      </div>

      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap items-center gap-6">
          <div className="w-32 shrink-0">
            <img
              className="aspect-3/2 rounded-lg shadow-sm"
              src={event.imgUrl}
              alt=""
            />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Heading>{event.name}</Heading>
              <Badge color={event.status === 'On Sale' ? 'lime' : 'zinc'}>
                {event.status === 'On Sale' ? 'À venda' : 'Encerrado'}
              </Badge>
            </div>
            <div className="mt-2 text-sm/6 text-zinc-500">
              {event.date} às {event.time}{' '}
              <span aria-hidden="true">·</span> {event.location}
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Button outline>Editar</Button>
          <Button>Ver</Button>
        </div>
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        <Stat
          title="Voluntários cadastrados"
          value={`${event.ticketsSold}`}
          change={event.ticketsSoldChange}
        />
        <Stat title="Capacidade do evento" value={`${event.ticketsAvailable}`} change="" />
        <Stat
          title="Visualizações de página"
          value={event.pageViews}
          change={event.pageViewsChange}
        />
      </div>

      <Subheading className="mt-12">Cadastros recentes</Subheading>
      <Table className="mt-4 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Número do cadastro</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Voluntário</TableHeader>
            <TableHeader className="text-right">Horas Trabalhadas</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {volunteers.map((volunteers) => (
            <TableRow
              key={volunteers.id}
              href={volunteers.url}
              title={`Cadastro #${volunteers.id}`}
            >
              <TableCell>{volunteers.id}</TableCell>
              <TableCell className="text-zinc-500">{volunteers.date}</TableCell>
              <TableCell>{volunteers.customer.name}</TableCell>
              <TableCell className="text-right">
                {volunteers.amount.usd} horas
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
