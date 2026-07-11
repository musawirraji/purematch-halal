"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLenis } from "lenis/react";
import { contactSchema, type ContactValues } from "../domain/schema";

// Use-case hook for the contact form: RHF state + a UI-only submit (no network
// yet — shows the confirmation). Scroll is driven through Lenis, which owns it.
export function useContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const lenis = useLenis();

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", whatsapp: "", subject: "", message: "" },
  });

  const onSubmit = form.handleSubmit(() => {
    setSubmitted(true);
    const el = document.getElementById("contact-form");
    const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--pm-header-h")) || 80;
    if (el) {
      if (lenis) lenis.scrollTo(el, { offset: -(headerH + 16), duration: 0.8 });
      else el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  return { submitted, form, onSubmit };
}
