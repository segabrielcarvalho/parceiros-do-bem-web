import { Avatar } from '@/components/avatar'
import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { getOrders } from '@/data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Voluntários',
}

export default async function Volunteers() {
  let volunteers = await getOrders()

  return (
    <>
      <div className="flex items-end justify-between gap-4">
        <Heading>Voluntários</Heading>
        <Button className="-my-0.5">Criar voluntários</Button>
      </div>
      <Table className="mt-8 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Número do cadastro</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Voluntário</TableHeader>
            <TableHeader>Evento</TableHeader>
            <TableHeader className="text-right">Horas Trabalhadas</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {volunteers.map((volunteers) => (
            <TableRow key={volunteers.id} href={volunteers.url} title={`Order #${volunteers.id}`}>
              <TableCell>{volunteers.id}</TableCell>
              <TableCell className="text-zinc-500">{volunteers.date}</TableCell>
              <TableCell>{volunteers.customer.name}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar src={volunteers.event.thumbUrl} className="size-6" />
                  <span>{volunteers.event.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">{volunteers.amount.usd} Horas</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
