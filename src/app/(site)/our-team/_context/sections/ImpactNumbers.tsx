export const ImpactNumbersOurTeamSection = () => {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Nosso trabalho é conectar pessoas para construir um mundo melhor
        </h2>
        <p className="mt-6 text-base/7 text-gray-600">
          Acreditamos que a união de pessoas, organizações e iniciativas transforma comunidades. Estamos aqui para facilitar esse impacto positivo por meio da tecnologia e do engajamento social.
        </p>
      </div>
      <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
          <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">12.500+</p>
          <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p className="text-lg font-semibold tracking-tight text-gray-900">Voluntários cadastrados</p>
            <p className="mt-2 text-base/7 text-gray-600">
              Pessoas engajadas que querem fazer a diferença e apoiar diversas causas sociais.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
          <p className="flex-none text-3xl font-bold tracking-tight text-white">150+</p>
          <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p className="text-lg font-semibold tracking-tight text-white">
              Organizações e empresas parceiras
            </p>
            <p className="mt-2 text-base/7 text-gray-400">
              ONGs, institutos e empresas engajadas promovendo o impacto social por todo o país.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-rose-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
          <p className="flex-none text-3xl font-bold tracking-tight text-white">6.300</p>
          <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <p className="text-lg font-semibold tracking-tight text-white">
              Ações e eventos promovidos
            </p>
            <p className="mt-2 text-base/7 text-rose-200">
              Campanhas, mutirões e eventos comunitários realizados com o apoio da nossa plataforma.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
