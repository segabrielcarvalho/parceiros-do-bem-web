import Image from "next/image";

export default function CTASection() {
  return (
    <div className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Junte-se ao Parceiros do Bem</h2>
            <p className="mt-6 text-xl/8 text-gray-600">
              Seja parte da transformação social conectando causas importantes com voluntários engajados.
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
              Contribua com suas habilidades, tempo e paixão para ajudar iniciativas que fazem a diferença. Cadastre-se agora e descubra como você pode gerar impacto positivo.
            </p>
            <div className="mt-10 flex">
              <a
                href="#"
                className="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
              >
                Faça parte dessa missão <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                alt="Voluntários em ação"
                src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1152&q=80"
                className="aspect-7/5 w-148 max-w-none rounded-2xl bg-gray-50 object-cover"
                height={528}
                width={396}
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  alt="Equipe de voluntários"
                  src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&h=604&q=80"
                  className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  height={604}
                  width={768}
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  alt="Evento comunitário"
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=1152&h=842&q=80"
                  className="aspect-7/5 w-148 max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  height={842}
                  width={1152}
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  alt="Projeto social"
                  src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&h=604&q=80"
                  className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  height={604}
                  width={768}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
