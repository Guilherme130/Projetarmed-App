'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Instagram, Facebook, ExternalLink, Headphones } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { OuvidoriaModal } from './ouvidoria-modal'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre Nós' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/contato', label: 'Contato' },
]

const socialLinks = [
  { 
    href: 'https://www.instagram.com/projetarmed.betim/', 
    label: 'Instagram', 
    icon: Instagram 
  },
  { 
    href: 'https://www.facebook.com/projetarmed', 
    label: 'Facebook', 
    icon: Facebook 
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOuvidoriaOpen, setIsOuvidoriaOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Logotipo_vetor_Projetarmed_saude_page-0001_page-0001.png"
            alt="Projetarmed"
            width={160}
            height={60}
            className="h-14 w-auto lg:h-16 lg:w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="cursor-pointer px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://sistema.soc.com.br/WebSoc/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            SOCNET
            <ExternalLink className="h-3 w-3" />
          </a>
        </nav>

        {/* Desktop Social Links */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOuvidoriaOpen(true)}
            className="mr-2 cursor-pointer border-muted-foreground/20 text-muted-foreground hover:text-primary hover:border-primary"
          >
            Ouvidoria
          </Button>
          {socialLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="cursor-pointer flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=5531988189401"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Button size="sm" className="ml-2 cursor-pointer bg-accent hover:bg-accent/90">
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Exames Button and Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="https://sistema.soc.com.br/WebSoc/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            SOCNET
            <ExternalLink className="h-4 w-4" />
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            className="cursor-pointer"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border/40 bg-background transition-all duration-300 lg:hidden',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <nav className="container mx-auto flex flex-col px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer py-3 text-base font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsOpen(false)
              setIsOuvidoriaOpen(true)
            }}
            className="cursor-pointer py-3 text-left text-base font-medium text-foreground transition-colors hover:text-primary"
          >
            Ouvidoria
          </button>
          <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:text-primary"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send?phone=5531988189401"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer ml-auto"
            >
              <Button className="cursor-pointer bg-accent hover:bg-accent/90">
                WhatsApp
              </Button>
            </a>
          </div>
        </nav>
      </div>
      <OuvidoriaModal open={isOuvidoriaOpen} onOpenChange={setIsOuvidoriaOpen} />
    </header>
  )
}
