"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck, UserPlus } from "lucide-react";
import { FormEvent, useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"sign-in" | "register">("sign-in");
  const [showPassword, setShowPassword] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/role-selection");
  }

  return (
    <section className="section page-section auth-section">
      <div className="container auth-layout">
        <div className="auth-story">
          <span className="eyebrow"><ShieldCheck aria-hidden="true" /> Account and privacy concept</span>
          <h1>Save progress and return when it works for you.</h1>
          <p>A production account would allow learners to resume across devices, access role-appropriate content, and retain completion records.</p>
          <div className="auth-benefits">
            <span><LockKeyhole aria-hidden="true" /><strong>Secure account access</strong><small>Managed authentication, password recovery, and role-based permissions.</small></span>
            <span><ShieldCheck aria-hidden="true" /><strong>Minimum necessary data</strong><small>Only information needed for access, progress, and certification.</small></span>
            <span><UserPlus aria-hidden="true" /><strong>Flexible enrollment</strong><small>Self-registration, invitation, or administrator-managed cohorts.</small></span>
          </div>
        </div>

        <div className="auth-card">
          <div className="segmented-control auth-tabs" aria-label="Choose account action">
            <button type="button" aria-pressed={mode === "sign-in"} onClick={() => setMode("sign-in")}>Sign in</button>
            <button type="button" aria-pressed={mode === "register"} onClick={() => setMode("register")}>Create account</button>
          </div>
          <div className="auth-card-heading">
            <span className="illustrative-label">No data is submitted</span>
            <h2>{mode === "sign-in" ? "Welcome back" : "Create your learning account"}</h2>
            <p>This is a functional form concept. Use any values to continue the demo.</p>
          </div>
          <form onSubmit={submit} className="auth-form">
            {mode === "register" ? (
              <label>
                <span>Full name</span>
                <div className="input-shell"><UserPlus aria-hidden="true" /><input required name="name" autoComplete="name" placeholder="Your name" /></div>
              </label>
            ) : null}
            <label>
              <span>Email address</span>
              <div className="input-shell"><Mail aria-hidden="true" /><input required type="email" name="email" autoComplete="email" placeholder="name@example.ca" defaultValue="demo@example.ca" /></div>
            </label>
            <label>
              <span>Password</span>
              <div className="input-shell"><LockKeyhole aria-hidden="true" /><input required minLength={8} type={showPassword ? "text" : "password"} name="password" autoComplete={mode === "sign-in" ? "current-password" : "new-password"} defaultValue="DemoPass1" /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}</button></div>
            </label>
            {mode === "register" ? <label className="consent-row"><input type="checkbox" required /><span>I understand how my account information and learning progress would be used.</span></label> : null}
            <button type="submit" className="button primary full-width">Continue to role selection <ArrowRight aria-hidden="true" /></button>
          </form>
          <p className="auth-privacy-note">Production privacy notices, consent language, retention rules, and account deletion processes will be confirmed with KOTC.</p>
        </div>
      </div>
    </section>
  );
}
