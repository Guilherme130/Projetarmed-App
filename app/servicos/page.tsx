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
  title: 'Serviços',
  description: 'Conheça os serviços da Projetarmed em medicina do trabalho, engenharia de segurança e locação de veículos.',
}

const medicineServices = {
  icon: Syringe,
  title: 'Medicina do Trabalho',
  description: 'Atendimento rápido e eficiente a demandas de mobilização e segmento da saúde do trabalho, com realização de exames clínicos e complementares em nossa clínica ou na sua empresa.',
  details: [
    'PCMSO - Programa de Controle Médico e Saúde Ocupacional',
    'EEG - Eletroencefalograma',
    'ECG - Eletrocardiograma',
    'Espirometria',
    'Audiometria',
    'Avaliação Psicológica',
    'Exame Toxicológico (Em conformidade lei 13.103)',
    'ASO - Atestado de saúde ocupacional',
    'Exames laboratoriais',
  ],
}

const engineeringServices = {
  icon: HardHat,
  title: 'Engenharia de Segurança',
  description: 'Infraestrutura completa e profissionais habilitados com grande experiência em engenharia e segurança do trabalho, de forma a atender plenamente as necessidades da sua empresa.',
  details: [
    'PPRA - Programa de Prevenção de Riscos Ambientais',
    'CIPA - Comissão Interna de Prevenção de Acidentes - Implantação e Treinamento',
    'EPI - Catálogo de EPI, elaboração, Treinamento e implantação',
    'PPP - Perfil Profissiográfico Previdenciário',
    'Projeto de Prevenção e Combate a Incêndio',
    'AVCB - Auto de vistoria do corpo de bombeiros (Obtenção e renovação)',
    'Visitas Técnicas',
    'Laudos',
    'PCMAT',
    'LTCAT',
    'Avaliações ambientais (Ruído, vibração, temperatura e etc.)',
  ],
}

const vehicleServices = {
  icon: Ambulance,
  title: 'Veículos disponíveis para locação',
  vehicles: [
    'Ambulância Tipo A (simples remoção)',
    'Ambulância Tipo B (Unidade de Suporte Básico)',
    'Viatura Tipo C (Unidade de Resgate e Salvamento)',
    'Ambulância Tipo D (Unidade de Suporte Avançado)',
    'Dimensionamos e montamos o serviço conforme as especificações do cliente',
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
            Nossos Serviços
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Soluções completas em medicina e segurança do trabalho
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
                alt="Profissional de saúde"
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
                      <span className="font-medium">Ver todos os serviços de medicina</span>
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
                      <span className="font-medium">Ver todos os serviços de engenharia</span>
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
                alt="Equipe de segurança"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Veículos Section */}
      <section className="py-16 lg:py-24" id="veiculos">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/worker-landscape.jpg"
                alt="Ambulância"
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
                  Solicitar Orçamento
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
            Precisa de algum serviço?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Entre em contato conosco e solicite um orçamento personalizado para sua empresa.
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
              <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20">
                Ver Contatos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
