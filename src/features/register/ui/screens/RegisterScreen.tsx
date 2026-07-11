import { PageIntro } from "@shared/components/PageIntro";
import { RegisterBefore } from "../components/RegisterBefore";
import { RegisterPay } from "../components/RegisterPay";
import { RegisterForm } from "../components/RegisterForm";
import { REGISTER_PAGE } from "../../domain/content";

// Register — page header, before-you-begin, payment details, and the 3-step
// application form (UI-only submission for now).
export function RegisterScreen() {
  const { intro } = REGISTER_PAGE;
  return (
    <>
      <PageIntro kicker={intro.kicker} title={intro.title} dek={intro.dek} />
      <RegisterBefore />
      <RegisterPay />
      <RegisterForm />
    </>
  );
}
