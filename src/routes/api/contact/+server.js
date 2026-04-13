import {createClient} from '@sanity/client'
import {env} from '$env/dynamic/private'
import { Resend } from 'resend'

const resend = new Resend(env.RESEND_API_KEY)

export async function POST({ request }) {
  try {
    const formData = await request.formData()
    const email = formData.get('email')
    const message = formData.get('message')
    const { data, error } = await resend.emails.send({
      from: 'Website Contact <onboarding@resend.dev>',
      to: ['paolagtzsal@gmail.com'],
      subject: `New message from Portfolio`,
      html: `
            <div style="font-family: Arial, sans-serif; background-color: #f9f5e9; padding: 20px; border-radius: 8px;">
              <h2 margin-bottom: 10px;">Nuevo mensaje de tu portafolio</h2>
              
              <div style="background-color: #f1e68a; padding: 15px; border-radius: 6px; margin-bottom: 10px;">
                <p style="margin: 0; color: #333;">${message}</p>
              </div>

              <div style="background-color: #f081bf; padding: 10px; border-radius: 6px;">
                <strong style="color: #333;">Responder a:</strong> 
                <a href="mailto:${email}" style="color: #863d65; text-decoration: none;">${email}</a>
              </div>
            </div>
          `
    })

    if(data) return new Response(JSON.stringify({ success: true}), { status: 200 })
    if(error) return new Response(JSON.stringify({ error: error.error}), { status: 500 })

  } catch (err) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 })
  }
}