"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  return (
    <section className="v5-page auth-section">
      <div className="container narrow-container">
        <Link href="/sign-in" className="v5-text-link"><ArrowLeft aria-hidden="true" /> Back to sign in</Link>
        <div className="auth-card v5-standalone-auth">
          <div className="auth-card-heading"><span className="v5-kicker">Account recovery concept</span><h1>Reset your password.</h1><p>Enter the email connected to your learning account. Production authentication will send a time-limited recovery link.</p></div>
          {sent ? <div className="save-notice" role="status"><Send aria-hidden="true" /> Demo recovery message prepared. No email was sent.</div> : <form onSubmit={submit} className="auth-form"><label><span>Email address</span><div className="input-shell"><Mail aria-hidden="true" /><input required type="email" autoComplete="email" placeholder="name@example.ca" /></div></label><button type="submit" className="button primary full-width">Send recovery link</button></form>}
          <p className="auth-privacy-note">The production flow will avoid confirming whether an email address exists and will apply rate limits and expiry controls.</p>
        </div>
      </div>
    </section>
  );
}
