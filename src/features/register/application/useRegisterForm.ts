"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLenis } from "lenis/react";
import { registerSchema, STEP_FIELDS, wordCount, type RegisterValues } from "../domain/schema";

const DEFAULTS: Partial<RegisterValues> = {
  firstName: "", lastName: "", email: "", whatsapp: "", country: "", dob: "",
  gender: "", marital: "", about: "", looking: "", preferences: "",
  membership: "", agree: false,
};

// Use-case hook for the 3-step application: RHF state, per-step validation, and
// a UI-only submit (no network yet — shows the success screen).
export function useRegisterForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const lenis = useLenis();

  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
    defaultValues: DEFAULTS as RegisterValues,
  });

  // Bring the FORM back into view on a step change — not the top of the page
  // (which would jump the user up past the intro/payment sections). Lenis owns
  // scroll, so drive it through the instance (native scrollIntoView is fought
  // by Lenis' rAF loop); fall back to native if Lenis isn't ready.
  const scrollToForm = () => {
    if (typeof document === "undefined") return;
    const el = document.getElementById("apply");
    if (!el) return;
    const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--pm-header-h")) || 80;
    if (lenis) lenis.scrollTo(el, { offset: -(headerH + 16), duration: 0.8 });
    else el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const next = async () => {
    const ok = await form.trigger(STEP_FIELDS[step]);
    if (ok) {
      setStep((s) => Math.min(STEP_FIELDS.length - 1, s + 1));
      scrollToForm();
    }
  };

  const back = () => {
    setStep((s) => Math.max(0, s - 1));
    scrollToForm();
  };

  const onSubmit = form.handleSubmit(() => {
    // UI-only for now: nothing is sent or stored. Show the confirmation.
    setSubmitted(true);
    scrollToForm();
  });

  const aboutWords = wordCount(form.watch("about") || "");
  const lookingWords = wordCount(form.watch("looking") || "");

  return { step, submitted, form, next, back, onSubmit, aboutWords, lookingWords };
}
