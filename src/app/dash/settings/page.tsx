import { Button } from '@/components/button'
import { Checkbox, CheckboxField } from '@/components/checkbox'
import { Divider } from '@/components/divider'
import { Label } from '@/components/fieldset'
import { Heading, Subheading } from '@/components/heading'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { Text } from '@/components/text'
import { Textarea } from '@/components/textarea'
import type { Metadata } from 'next'
import { Address } from './address'

export const metadata: Metadata = {
  title: 'Configurações',
}

export default function Settings() {
  return (
    <form method="post" className="mx-auto max-w-4xl">
      <Heading>Configurações</Heading>
      <Divider className="my-10 mt-6" />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Nome da Organização</Subheading>
          <Text>Isso será exibido no seu perfil público.</Text>
        </div>
        <div>
          <Input aria-label="Nome da Organização" name="name" defaultValue="UniEVANGÉLICA" />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Descrição da Organização</Subheading>
          <Text>Isso será exibido no seu perfil público. Máximo de 240 caracteres.</Text>
        </div>
        <div>
          <Textarea aria-label="Descrição da Organização" name="bio" />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Email da Organização</Subheading>
          <Text>É assim que os clientes podem entrar em contato para suporte.</Text>
        </div>
        <div className="space-y-4">
          <Input
            type="email"
            aria-label="Email da Organização"
            name="email"
            defaultValue="info@example.com"
          />
          <CheckboxField>
            <Checkbox name="email_is_public" defaultChecked />
            <Label>Exibir email no perfil público</Label>
          </CheckboxField>
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Endereço</Subheading>
          <Text>Este é o local onde sua organização está registrada.</Text>
        </div>
        <Address />
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Moeda</Subheading>
          <Text>Moeda que sua organização receberá.</Text>
        </div>
        <div>
          <Select aria-label="Moeda" name="currency" defaultValue="brl">
            <option value="brl">BRL – Real Brasileiro</option>
            <option value="cad">CAD – Dólar Canadense</option>
            <option value="usd">USD – Dólar Americano</option>
          </Select>
        </div>
      </section>

      <Divider className="my-10" soft />

      <div className="flex justify-end gap-4">
        <Button type="reset" plain>
          Limpar
        </Button>
        <Button type="submit">Salvar alterações</Button>
      </div>
    </form>
  )
}
