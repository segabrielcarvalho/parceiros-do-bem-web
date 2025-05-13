import { Logo } from '@/app/logo'
import { Button } from '@/components/button'
import { Checkbox, CheckboxField } from '@/components/checkbox'
import { Field, Label } from '@/components/fieldset'
import { Heading } from '@/components/heading'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { Strong, Text, TextLink } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cadastro',
}

export default function Login() {
  return (
    <form action="" method="POST" className="grid w-full max-w-sm grid-cols-1 gap-8">
      <Logo className="h-6 text-zinc-950 dark:text-white forced-colors:text-[CanvasText]" />
      <Heading>Crie sua conta</Heading>
      <Field>
        <Label>Email</Label>
        <Input type="email" name="email" />
      </Field>
      <Field>
        <Label>Nome completo</Label>
        <Input name="name" />
      </Field>
      <Field>
        <Label>Senha</Label>
        <Input type="password" name="password" autoComplete="new-password" />
      </Field>
      <Field>
        <Label>País</Label>
        <Select name="country">
          <option>Canadá</option>
          <option>México</option>
          <option>Estados Unidos</option>
        </Select>
      </Field>
      <CheckboxField>
        <Checkbox name="remember" />
        <Label>Receber e-mails sobre atualizações e novidades.</Label>
      </CheckboxField>
      <Button type="submit" className="w-full">
        Criar conta
      </Button>
      <Text>
        Já tem uma conta?{' '}
        <TextLink href="/login">
          <Strong>Entrar</Strong>
        </TextLink>
      </Text>
    </form>
  )
}
