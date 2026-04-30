'use server'

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  identify: z.boolean(),
  name: z.string().optional().or(z.literal('')),
  email: z.string().optional().or(z.literal('')),
  phone: z.string().optional().or(z.literal('')),
  message: z.string().min(1, 'A mensagem é obrigatória'),
}).refine((data) => {
  if (data.identify) {
    // Se identificar for true, os campos devem ter conteúdo
    return !!data.name && data.name.length > 0 && 
           !!data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && 
           !!data.phone && data.phone.length > 0;
  }
  return true;
}, {
  message: "Dados de identificação incompletos ou inválidos",
  path: ["identify"],
});

export async function sendOuvidoriaEmail(formData: z.infer<typeof schema>) {
  try {
    const validatedData = schema.parse(formData);

    const { identify, name, email, phone, message } = validatedData;

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #0055b8;">Nova Mensagem de Ouvidoria</h2>
        <p style="color: #666; font-size: 14px;">Origem: <strong>Site Projetarmed</strong></p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        
        <p><strong>Identificação:</strong> ${identify ? 'Sim' : 'Anônima'}</p>
        ${identify ? `
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
        ` : ''}
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: 'Ouvidoria Site Projetarmed <onboarding@resend.dev>',
      to: 'gerencia@grupoprojetarmed.com.br',
      replyTo: identify ? email : undefined,
      subject: `Ouvidoria [Site]: ${identify ? name : 'Relato Anônimo'}`,
      html: htmlContent,
    });

    return { success: true };
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return { success: false, error: 'Falha ao enviar a mensagem. Tente novamente mais tarde.' };
  }
}
