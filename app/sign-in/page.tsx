"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck, UserPlus } from "lucide-react";
import { FormEvent, useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"sign-in" | "register">("sign-in");
  const [showPassword, setShowPassword] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(mode === "register" ? "/role-selection" : "/dashboard");
  }

  return (
    <section className="v5-page auth-section">
      <div className="container auth-layout">
        <div className="auth-story">
          <span className="v5-kicker"><ShieldCheck aria-hidden="true" /> Account and privacy concept</span>
          <h1>Save progress and return when it works for you.</h1>
          <p>A production learner account allows people to complete the course over multiple sessions, resume across devices and retain an auditable completion record.</p>
          <div className="auth-benefits"><span><LockKeyhole aria-hidden="true" /><strong>Secure account access</strong><small>Managed authentication, password recovery and role-based permissions.</small></span><span><ShieldCheck aria-hidden="true" /><strong>Minimum necessary data</strong><small>Only information required for access, progress and certification.</small></span><span><UserPlus aria-hidden="true" /><strong>One course pathway</strong><small>Five shared chapters and one employee or employer chapter.</small></span></div>
        </div>

        <div className="auth-card">
          <div className="segmented-control auth-tabs" aria-label="Choose account action"><button type="button" aria-pressed={mode === "sign-in"} onClick={() => setMode("sign-in")}>Sign in</button><button type="button" aria-pressed={mode === "register"} onClick={() => setMode("register")}>Create account</button></div>
          <div className="auth-card-heading"><span className="illustrative-label">No account data is submitted</span><h2>{mode === "sign-in" ? "Welcome back" : "Create your learning account"}</h2><p>Use any valid-looking values to continue through this functional proposal demo.</p></div>
          <form onSubmit={submit} className="auth-form">
            {mode === "register" ? <><label><span>First name</span><div className="input-shell"><UserPlus aria-hidden="true" /><input required name="firstName" autoComplete="given-name" placeholder="First name" /></div></label><label><span>Last name</span><div className="input-shell"><UserPlus aria-hidden="true" /><input required name="lastName" autoComplete="family-name" placeholder="Last name" /></div></label></> : null}
            <label><span>Email address</span><div className="input-shell"><Mail aria-hidden="true" /><input required type="email" name="email" autoComplete="email" placeholder="name@example.ca" defaultValue="demo@example.ca" /></div></label>
            <label><span>Password</span><div className="input-shell"><LockKeyhole aria-hidden="true" /><input required minLength={8} type={showPassword ? "text" : "password"} name="password" autoComplete={mode === "sign-in" ? "current-password" : "new-password"} defaultValue="DemoPass1" /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}</button></div></label>
            {mode === "register" ? <label className="consent-row"><input type="checkbox" required /><span>I have reviewed the <Link href="/privacy">proposal-stage privacy notice</Link> and understand how account and progress information would be used.</span></label> : <div className="v5-auth-helper"><Link href="/forgot-password">Forgot password?</Link><Link href="/privacy">Privacy approach</Link></div>}
            <button type="submit" className="button primary full-width">{mode === "sign-in" ? "Sign in and resume" : "Create account and choose pathway"} <ArrowRight aria-hidden="true" /></button>
          </form>
          <p className="auth-privacy-note">Production privacy notices, consent wording, retention rules and deletion procedures will be approved with KOTC before launch.</p>
        </div>
      </div>
    </section>
  );
}
