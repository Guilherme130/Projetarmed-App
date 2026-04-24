import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react'

const contactInfo = {
  address: 'Rua Emereciana Pedro da Silva, 210, Jardim Teresópolis - Betim/MG, 32681-350',
  mapsUrl: 'https://maps.app.goo.gl/KM122xS4uGU2gqyz5',
  hours: 'Segunda à Sexta – 7:00 às 17:00',
  phones: ['(31) 9 9767-9401', '(31) 3594-8278', '(31) 3665-5002'],
  email: 'projetar@projetarmed.com.br',
}

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre Nós' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/contato', label: 'Contato' },
  { href: 'https://sistema.soc.com.br/WebSoc/', label: 'Exames', external: true },
]

const groupCompanies = [
  {
    name: 'Bravotech',
    description: 'Cursos e Serviços',
    logo: '/images/bravotech-logo.png',
    url: 'https://www.instagram.com/bravotechcursos/',
  },
  {
    name: 'Projetar Coletas',
    description: 'Soluções em Resíduos',
    logo: '/images/projetar-coletas-logo.png',
    url: 'https://www.instagram.com/projetar.coletas/',
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Localização */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <MapPin className="h-5 w-5" />
              Localização
            </h3>
            <a
              href={contactInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm leading-relaxed text-primary-foreground/80 transition-colors hover:text-primary-foreground hover:underline"
            >
              {contactInfo.address}
            </a>
          </div>

          {/* Horário */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Clock className="h-5 w-5" />
              Horário de Atendimento
            </h3>
            <p className="text-sm text-primary-foreground/80">{contactInfo.hours}</p>
          </div>

          {/* Contatos */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Phone className="h-5 w-5" />
              Contatos
            </h3>
            <div className="flex flex-col gap-2">
              {contactInfo.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\D/g, '')}`}
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {phone}
                </a>
              ))}
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-1 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4" />
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Links Rápidos</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>

        {/* Empresas do Grupo */}
        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <h3 className="mb-6 text-center text-lg font-semibold">Outras Empresas do Grupo</h3>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {groupCompanies.map((company) => (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 transition-transform hover:scale-105"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={180}
                  height={100}
                  className="h-auto max-h-24 w-auto object-contain brightness-0 invert transition-opacity group-hover:opacity-80"
                />
                <span className="text-sm text-primary-foreground/70">{company.description}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Social e Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/20 pt-8 sm:flex-row">
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/projetarmed.betim/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/projetarmed"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
          <p className="text-center text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Projetarmed. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
