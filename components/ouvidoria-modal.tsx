'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { useToast } from '@/hooks/use-toast'
import { sendOuvidoriaEmail } from '@/app/actions/ouvidoria'
import { Loader2 } from 'lucide-react'

const formSchema = z.object({
  identify: z.boolean().default(false),
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(5, 'A mensagem deve ter pelo menos 5 caracteres'),
}).refine((data) => {
  if (data.identify) {
    return !!data.name && data.name.length > 0;
  }
  return true;
}, {
  message: "Nome é obrigatório",
  path: ["name"],
}).refine((data) => {
  if (data.identify) {
    return !!data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  }
  return true;
}, {
  message: "E-mail inválido",
  path: ["email"],
}).refine((data) => {
  if (data.identify) {
    return !!data.phone && data.phone.length > 0;
  }
  return true;
}, {
  message: "Telefone é obrigatório",
  path: ["phone"],
});

type FormValues = z.infer<typeof formSchema>;

interface OuvidoriaModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OuvidoriaModal({ open, onOpenChange }: OuvidoriaModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      identify: false,
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const watchIdentify = form.watch('identify')

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    setSubmitError(null)
    try {
      const result = await sendOuvidoriaEmail(values)
      if (result.success) {
        toast({
          title: "Mensagem enviada!",
          description: "Agradecemos o seu contato. Sua mensagem foi enviada com sucesso.",
        })
        form.reset()
        onOpenChange(false)
      } else {
        setSubmitError(result.error || "Erro ao enviar")
        toast({
          variant: "destructive",
          title: "Erro ao enviar",
          description: result.error,
        })
      }
    } catch (error) {
      setSubmitError("Erro inesperado")
      toast({
        variant: "destructive",
        title: "Erro inesperado",
        description: "Ocorreu um erro ao processar sua solicitação.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center sm:text-center">
          <DialogTitle className="text-2xl font-bold text-primary text-center">Queremos te ouvir!</DialogTitle>
          <DialogDescription className="text-base text-center">
            Sua opinião é fundamental para nós. O relato é <strong>anônimo</strong>, a identificação é opcional.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
            {/* ... (existing form fields remain the same) */}
            <FormField
              control={form.control}
              name="identify"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Deseja se identificar?</FormLabel>
                    <FormDescription>
                      Seus dados serão tratados com total sigilo.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="cursor-pointer"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {watchIdentify && (
              <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input placeholder="(00) 00000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sua Mensagem / Reclamação</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Descreva aqui o ocorrido ou sua sugestão..." 
                      className="min-h-[120px] resize-none"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-4">
              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end sm:gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="w-full sm:w-auto cursor-pointer"
                >
                  Cancelar
                </Button>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white border-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar Relato'
                  )}
                </Button>
              </div>
              
              {submitError && (
                <p className="text-sm text-destructive text-center animate-in fade-in duration-300">
                  Erro desconhecido ao receber sua mensagem / reclamação. 
                  Por favor tente novamente mais tarde ou envie um e-mail com a sua mensagem para {' '}
                  <a href="mailto:gerencia@grupoprojetarmed.com.br" className="underline font-medium">
                    gerencia@grupoprojetarmed.com.br
                  </a>
                </p>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
