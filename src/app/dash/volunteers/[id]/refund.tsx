'use client'

import { Button } from '@/components/button'
import { Checkbox, CheckboxField } from '@/components/checkbox'
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from '@/components/dialog'
import { Description, Field, FieldGroup, Label } from '@/components/fieldset'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { useState } from 'react'

export function RefundOrder(
  { amount, ...props }: { amount: string } & React.ComponentPropsWithoutRef<typeof Button>,
) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)} {...props} />
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Reembolsar pagamento</DialogTitle>
        <DialogDescription>
          O reembolso será creditado na conta bancária do cliente em 2 a 3 dias úteis após o
          processamento.
        </DialogDescription>
        <DialogBody>
          <FieldGroup>
            <Field>
              <Label>Valor</Label>
              <Input name="amount" defaultValue={amount} placeholder="R$ 0,00" autoFocus />
            </Field>
            <Field>
              <Label>Motivo</Label>
              <Select name="reason" defaultValue="">
                <option value="" disabled>
                  Selecione um motivo…
                </option>
                <option value="duplicate">Duplicado</option>
                <option value="fraudulent">Fraudulento</option>
                <option value="requested_by_customer">Solicitado pelo cliente</option>
                <option value="other">Outro</option>
              </Select>
            </Field>
            <CheckboxField>
              <Checkbox name="notify" />
              <Label>Notificar cliente</Label>
              <Description>Um e-mail de notificação será enviado para este cliente.</Description>
            </CheckboxField>
          </FieldGroup>
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={() => setIsOpen(false)}>Reembolsar</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
