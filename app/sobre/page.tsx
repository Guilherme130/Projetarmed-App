import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a Projetarmed - mais de 15 anos de experiência em medicina e segurança do trabalho.',
}

const values = [
  'Satisfação do cliente',
  'Qualidade nos serviços',
  'Confiabilidade',
  'Agilidade no atendimento',
  'Profissionalismo',
  'Inovação contínua',
]

export default function SobrePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[url('/images/hero-workers.png')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            Sobre Nós
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Conheça nossa história e compromisso com a excelência
          </p>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Quem Somos</h2>
              <p className="mt-2 text-lg text-accent">Com mais de 15 anos no mercado</p>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Projetarmed se destaca por sua expertise em tecnologias inovadoras, o que a torna 
                  altamente eficiente na prestação de serviços de <strong className="text-foreground">segurança, 
                  saúde e engenharia do trabalho.</strong>
                </p>
                <p>
                  Nosso compromisso é oferecer um atendimento premium aos clientes, caracterizado pela 
                  agilidade e qualidade em cada projeto realizado.
                </p>
                <p>
                  Líder em qualidade e Engenharia de Segurança do Trabalho, Medicina Ocupacional e 
                  Consultoria Ambiental, a ProjetarMed tem construído, desde 2007, uma história de 
                  ótimos resultados e grandes parcerias.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/firefighters.png"
                alt="Equipe de profissionais"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Valores Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:order-1">
              <Image
                src="/images/worker-landscape.jpg"
                alt="Profissional de segurança do trabalho"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:order-2">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Nossa Missão</h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Satisfação, qualidade, confiabilidade e agilidade no atendimento aos nossos clientes. 
                  Buscamos sempre superar as expectativas e entregar resultados que fazem a diferença 
                  na segurança e saúde dos trabalhadores.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Nossa Visão</h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Ser excelência em promoção da engenharia e medicina do trabalho, sendo referência 
                  no mercado pela qualidade dos serviços e satisfação dos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Nossos Valores</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Princípios que guiam todas as nossas ações e decisões
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
              >
                <CheckCircle className="h-6 w-6 shrink-0 text-accent" />
                <span className="font-medium text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-accent-foreground sm:text-4xl">
            Quer conhecer nossos serviços?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-accent-foreground/90">
            Descubra como podemos ajudar sua empresa a manter seus colaboradores seguros e saudáveis.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/servicos">
              <Button size="lg" variant="secondary">
                Ver Serviços
              </Button>
            </Link>
            <Link href="/contato">
              <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20">
                Entre em Contato
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
