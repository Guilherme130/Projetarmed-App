import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Projetarmed - localização, telefones e horário de funcionamento.',
}

const contactInfo = {
  address: {
    street: 'Rua Emereciana Pedro da Silva, 210',
    neighborhood: 'Jardim Teresópolis - Betim/MG',
    cep: '32681-350',
    mapsUrl: 'https://maps.app.goo.gl/KM122xS4uGU2gqyz5',
  },
  hours: 'Segunda à Sexta - 7:00 às 17:00',
  phones: [
    { number: '(31) 9 9767-9401', type: 'WhatsApp' },
    { number: '(31) 3594-8278', type: 'Telefone' },
    { number: '(31) 3665-5002', type: 'Telefone' },
  ],
  email: 'projetar@projetarmed.com.br',
}

export default function ContatoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[url('/images/hero-workers.png')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            Nossos Contatos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Estamos prontos para atender você
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/firefighters.png"
                alt="Equipe Projetarmed"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              {/* Localização */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Localização</h3>
                      <p className="mt-2 text-muted-foreground">
                        {contactInfo.address.street}<br />
                        {contactInfo.address.neighborhood}<br />
                        {contactInfo.address.cep}
                      </p>
                      <a
                        href={contactInfo.address.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm text-accent hover:underline"
                      >
                        Ver no Google Maps
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Horário */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Horário de Funcionamento</h3>
                      <p className="mt-2 text-muted-foreground">
                        {contactInfo.hours}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Telefones */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Telefones</h3>
                      <div className="mt-2 space-y-1">
                        {contactInfo.phones.map((phone) => (
                          <a
                            key={phone.number}
                            href={`tel:${phone.number.replace(/\D/g, '')}`}
                            className="block text-muted-foreground hover:text-accent"
                          >
                            {phone.number} <span className="text-xs text-muted-foreground/70">({phone.type})</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">E-mail</h3>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="mt-2 block text-muted-foreground hover:text-accent"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-accent-foreground sm:text-4xl">
            Prefere falar pelo WhatsApp?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-accent-foreground/90">
            Envie uma mensagem agora mesmo e nossa equipe responderá o mais rápido possível.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5531997679401"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block"
          >
            <Button size="lg" variant="secondary">
              Iniciar Conversa no WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Nossa Localização</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Estamos localizados em Betim, Minas Gerais. Venha nos visitar!
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.8847752661375!2d-44.18849!3d-19.9438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6905a57b7d957%3A0x5ef2d5de9b0c1e8a!2sR.%20Emereciana%20Pedro%20da%20Silva%2C%20210%20-%20Jardim%20Teres%C3%B3polis%2C%20Betim%20-%20MG%2C%2032681-350!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Projetarmed"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>
    </>
  )
}
