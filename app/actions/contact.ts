"use server"

import { db } from "@/lib/db"
import { contactMessages } from "@/lib/db/schema"

export type ContactState = {
  success: boolean
  message: string
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const phone = String(formData.get("phone") || "").trim()
  const company = String(formData.get("company") || "").trim()
  const subject = String(formData.get("subject") || "").trim()
  const message = String(formData.get("message") || "").trim()

  if (!name || !email || !message) {
    return { success: false, message: "Veuillez remplir le nom, l'email et le message." }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, message: "Veuillez saisir une adresse email valide." }
  }

  try {
    await db.insert(contactMessages).values({
      name,
      email,
      phone: phone || null,
      company: company || null,
      subject: subject || null,
      message,
    })
    return {
      success: true,
      message: "Merci ! Votre message a bien été envoyé. Notre équipe vous répondra rapidement.",
    }
  } catch (error) {
    console.log("[v0] Contact submission error:", error)
    return {
      success: false,
      message: "Une erreur est survenue. Veuillez réessayer plus tard.",
    }
  }
}
