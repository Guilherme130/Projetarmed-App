import Image from 'next/image'
import Link from 'next/link'
import { 
  Shield, 
  Stethoscope, 
  Cog, 
  FileCheck, 
  Leaf, 
  Recycle,
  Syringe,
  HardHat,
  Ambulance,
  GraduationCap,
  HeartPulse,
  Flame,
  Users,
  TreeDeciduous,
  MessageSquare
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const services = [
  {
    icon: Shield,
    title: 'Seguranca do Trabalho',
  },
  {
    icon: Stethoscope,
    title: 'Medicina do Trabalho',
  },
  {
    icon: Cog,
    title: 'Engenharia de Seguranca',
  },
  {
    icon: FileCheck,
    title: 'Exame Toxicologico',
  },
  {
    icon: Leaf,
    title: 'Licenciamento Ambiental',
  },
  {
    icon: Recycle,
    title: 'Projetar Coletas',
  },
]

const specialties = [
  {
    icon: Syringe,
    title: 'Medicina do Trabalho',
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
  },
  {
    icon: HardHat,
    title: 'Engenharia de Seguranca',
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
  },
  {
    icon: Ambulance,
    title: 'Veiculo disponivel para locacao',
    details: [
      'Ambulancia Tipo A (simples remocao)',
      'Ambulancia Tipo B (Unidade de Suporte Basico)',
      'Viatura Tipo C (Unidade de Resgate e Salvamento)',
      'Ambulancia Tipo D (Unidade de Suporte Avancado)',
      'Dimensionamos e montamos o servico conforme as especificacoes do cliente',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Cursos, Palestras e Treinamentos',
    details: [
      'Primeiro Socorros',
      'Brigada de Emergencia',
      'DEA Desfribilador Externo Automatico',
      'Cipa',
      'EPIs',
      'Normas Regulamentadoras (NRs) 05,07,09,10,12,13,15,16,17,18,20,22,23,32,33,35.',
      'Palestras ou Treinamento de Saude, Meio Ambiente, Seguranca do Trabalho',
      'SASSMAQ',
      'Formacao de auditores internos norma ISO9001',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Atendimento pre-hospitalar',
    details: [
      'O Servico de atendimento pre-hospitalar (APH) e um tipo de assistencia a vitimas de traumas ou que necessitem de qualquer atendimento clinico emergencial.',
      'Os profissionais se deslocam, em viaturas preparadas, para o local onde o paciente necessita de cuidados considerados urgentes.',
      'Disponibilizamos todos materiais, equipamentos, profissionais capacitados e viaturas, necessarios para formatacao ideal do servico.',
      'Curso de Bombeiro Profissional Civil',
      'Socorrista/Resgatista',
      'Cuidador de idoso',
    ],
  },
  {
    icon: Flame,
    title: 'Brigadas de incendio',
    details: [
      'Fornecemos equipes treinadas e capacitadas para realizar atendimentos em situacoes de emergencia, atuando na prevencao e combate a incendios, prestacao de primeiros socorros e evacuacao de ambientes',
    ],
  },
  {
    icon: Users,
    title: 'Mao-de-obra disponivel / Eventos',
    details: [
      'Temos uma Equipe completa composta por Medico, Enfermeiro, Tecnico em Enfermagem, Socorristas, Condutor de Veiculo de Emergencia, Bombeiro Civil e Brigadista, devidamente treinados e qualificados para atendimento em cobertura de eventos.',
    ],
  },
  {
    icon: TreeDeciduous,
    title: 'Meio Ambiente',
    details: [
      'Alvara ambiental',
      'Licenciamento Ambiental',
      'AAF Autorizacao Ambiental de Funcionamento',
      'RADA',
      'EIA',
      'RIMA',
      'Laudo e avaliacoes ambientais',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Outros servicos',
    details: [
      'Cobertura de Festas e Eventos',
      'Transporte e Remocao de Pacientes',
      'Exames Medicos e Laboratoriais',
      'Clinica Medica',
    ],
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-workers.png"
          alt="Trabalhadores da industria olhando para o horizonte"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            PROJETARMED
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 sm:text-xl md:text-2xl">
            Seu Colaborador Merece Ter Tratamento de Qualidade
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contato">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Entre em Contato
              </Button>
            </Link>
            <Link href="/servicos">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Nossos Servicos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group cursor-pointer border-border/50 transition-all hover:border-accent hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Sobre Nos</h2>
              <p className="mt-2 text-lg text-accent">Medicina, Engenharia e Seguranca do Trabalho</p>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Lider em qualidade e Engenharia de Seguranca do Trabalho, Medicina Ocupacional e 
                  Consultoria Ambiental, a ProjetarMed tem construido, desde 2007, uma historia de 
                  otimos resultados e grandes parcerias. Com centenas de clientes atendidos, a 
                  ProjetarMed mantem o seu compromisso de ser melhor a cada dia.
                </p>
                <p>
                  Neste periodo, atraves do seu empenho e dedicacao, a ProjetarMed conseguiu colocar 
                  ao dispor dos seus clientes um corpo clinico com elevado nivel de profissionalismo 
                  e equipamentos de vanguarda que permitem um atendimento de excelencia.
                </p>
                <p>
                  Com diversas especialidades medicas, entre outros servicos, e com a perspectiva de 
                  continuo investimento, e para nos uma prioridade cuidar com a maxima qualidade os 
                  clientes que nos procuram.
                </p>
              </div>
              <Link href="/sobre" className="mt-6 inline-block">
                <Button className="bg-primary hover:bg-primary/90">Saiba Mais</Button>
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/worker-landscape.jpg"
                alt="Profissional de seguranca do trabalho"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl lg:sticky lg:top-24">
              <Image
                src="/images/worker-notes.jpeg"
                alt="Profissional fazendo anotacoes"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Nossas Especialidades</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Veja o que podemos fazer por voce ou sua empresa
              </p>
              <div className="mt-8">
                <Accordion type="single" collapsible className="w-full">
                  {specialties.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-3 text-left">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <span className="font-medium">{item.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="ml-13 space-y-2 pl-13">
                          {item.details.map((detail, detailIndex) => (
                            <li
                              key={detailIndex}
                              className="text-muted-foreground before:mr-2 before:content-['\2022'] before:text-accent"
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <Link href="/servicos" className="ml-13 mt-4 inline-block pl-13">
                          <Button variant="outline" size="sm" className="text-accent hover:text-accent">
                            Saiba Mais
                          </Button>
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-accent-foreground sm:text-4xl">
            Pronto para comecar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-accent-foreground/90">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a manter 
            seus colaboradores seguros e saudaveis.
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
              <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
                Ver Contatos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
