import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Syringe, HardHat, Ambulance } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servicos',
  description: 'Conheca os servicos da Projetarmed em medicina do trabalho, engenharia de seguranca e locacao de veiculos.',
}

const medicineServices = {
  icon: Syringe,
  title: 'Medicina do Trabalho',
  description: 'Atendimento rapido e eficiente a demandas de mobilizacao e segmento da saude do trabalho, com realizacao de exames clinicos e complementares em nossa clinica ou na sua empresa.',
  details: [
    'PCMSO - Programa de Controle Medico e Saude Ocupacional',
    'EEG - Eletroencefalograma',
    'ECG - Eletrocardiograma',
    'Espirometria',
    'Audiometria',
    'Avaliacao Psicologica',
    'Exame Toxicologico (Em conformidade lei 13.103)',
    'ASO - Atestado de saude ocupacional',
    'Exames laboratoriais',
  ],
}

const engineeringServices = {
  icon: HardHat,
  title: 'Engenharia de Seguranca',
  description: 'Infraestrutura completa e profissionais habilitados com grande experiencia em engenharia e seguranca do trabalho, de forma a atender plenamente as necessidades da sua empresa.',
  details: [
    'PPRA - Programa de Prevencao de Risco Ambientais',
    'CIPA - Comissao Interna de Prevencao de Acidentes - Implantacao e Treinamento',
    'EPI - Catalogo de EPI, elaboracao, Treinamento e implantacao',
    'PPP - Perfil Profissiografico Previdenciario',
    'Projeto de Prevencao e Combate a Incendio',
    'AVCB - Auto de vistoria do corpo de bombeiros (Obtencao e renovacao)',
    'Visitas Tecnicas',
    'Laudos',
    'PCMAT',
    'LTCAT',
    'Avaliacoes ambientais (Ruido, vibracao, temperatura e etc.)',
  ],
}

const vehicleServices = {
  icon: Ambulance,
  title: 'Veiculos disponiveis para locacao',
  vehicles: [
    'Ambulancia Tipo A (simples remocao)',
    'Ambulancia Tipo B (Unidade de Suporte Basico)',
    'Viatura Tipo C (Unidade de Resgate e Salvamento)',
    'Ambulancia Tipo D (Unidade de Suporte Avancado)',
    'Dimensionamos e montamos o servico conforme as especificacoes do cliente',
  ],
}

export default function ServicosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[url('/images/hero-workers.png')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            Nossos Servicos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Solucoes completas em medicina e seguranca do trabalho
          </p>
        </div>
      </section>

      {/* Medicina Section */}
      <section className="py-16 lg:py-24" id="medicina">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:sticky lg:top-24">
              <Image
                src="/images/worker-notes.jpeg"
                alt="Profissional de saude"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <medicineServices.icon className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{medicineServices.title}</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {medicineServices.description}
              </p>
              <div className="mt-8">
                <Accordion type="single" collapsible defaultValue="item-0">
                  <AccordionItem value="item-0">
                    <AccordionTrigger className="hover:no-underline">
                      <span className="font-medium">Ver todos os servicos de medicina</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {medicineServices.details.map((detail, index) => (
                          <li
                            key={index}
                            className="text-muted-foreground before:mr-2 before:content-['\2022'] before:text-accent"
                          >
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engenharia Section */}
      <section className="bg-secondary py-16 lg:py-24" id="engenharia">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="lg:order-2">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <engineeringServices.icon className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{engineeringServices.title}</h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {engineeringServices.description}
              </p>
              <div className="mt-8">
                <Accordion type="single" collapsible defaultValue="item-0">
                  <AccordionItem value="item-0">
                    <AccordionTrigger className="hover:no-underline">
                      <span className="font-medium">Ver todos os servicos de engenharia</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {engineeringServices.details.map((detail, index) => (
                          <li
                            key={index}
                            className="text-muted-foreground before:mr-2 before:content-['\2022'] before:text-accent"
                          >
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:sticky lg:top-24 lg:order-1">
              <Image
                src="/images/firefighters.png"
                alt="Equipe de seguranca"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Veiculos Section */}
      <section className="py-16 lg:py-24" id="veiculos">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/worker-landscape.jpg"
                alt="Ambulancia"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <vehicleServices.icon className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{vehicleServices.title}</h2>
              </div>
              <ul className="mt-8 space-y-3">
                {vehicleServices.vehicles.map((vehicle, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    {vehicle}
                  </li>
                ))}
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=5531997679401"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block"
              >
                <Button className="bg-accent hover:bg-accent/90">
                  Solicitar Orcamento
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
            Precisa de algum servico?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Entre em contato conosco e solicite um orcamento personalizado para sua empresa.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://api.whatsapp.com/send?phone=5531997679401"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary">
                Fale pelo WhatsApp
              </Button>
            </a>
            <Link href="/contato">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Ver Contatos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
