export function Logo({
  className = '',
  ...rest
}: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      {...rest}
      className={`inline-block text-xl font-semibold tracking-tight text-zinc-900 ${className}`}
    >
      Parceiros&nbsp;do&nbsp;Bem
    </span>
  )
}
