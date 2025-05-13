import { Stat } from '@/app/stat'
import { Avatar } from '@/components/avatar'
import { Heading, Subheading } from '@/components/heading'
import { Select } from '@/components/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table'
import { getRecentOrders } from '@/data'

export default async function Home() {
  const volunteers = await getRecentOrders()

  return (
    <>
      <Heading>Boa tarde, Érica</Heading>

      <div className="mt-8 flex items-end justify-between">
        <Subheading>Visão geral</Subheading>
        <div>
          <Select name="period">
            <option value="last_week">Última semana</option>
            <option value="last_two">Últimas duas semanas</option>
            <option value="last_month">Último mês</option>
            <option value="last_quarter">Último trimestre</option>
          </Select>
        </div>
      </div>

      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat title="Voluntários cadastrados" value="5.888" change="+4,5%" />
        <Stat title="Eventos ativos" value="12" change="+1,0%" />
        <Stat title="Vagas disponíveis" value="1.342" change="-2,1%" />
        <Stat title="Visualizações de página" value="823.067" change="+21,2%" />
      </div>

      <Subheading className="mt-14">Cadastros recentes</Subheading>
      <Table className="mt-4 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]">
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
            <TableRow
              key={volunteers.id}
              href={volunteers.url}
              title={`Cadastro #${volunteers.id}`}
            >
              <TableCell>{volunteers.id}</TableCell>
              <TableCell className="text-zinc-500">{volunteers.date}</TableCell>
              <TableCell>{volunteers.customer.name}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar src={volunteers.event.thumbUrl} className="size-6" />
                  <span>{volunteers.event.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                {volunteers.amount.usd} Horas
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
