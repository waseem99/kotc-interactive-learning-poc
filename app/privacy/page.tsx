import Link from "next/link";
import { ArrowLeft, CheckCircle2, LockKeyhole, ShieldCheck, Trash2 } from "lucide-react";

export default function PrivacyPage() {
  return (
    <section className="v5-page">
      <div className="container narrow-container">
        <Link href="/sign-in" className="v5-text-link"><ArrowLeft aria-hidden="true" /> Back to account access</Link>
        <header className="page-intro"><span className="v5-kicker"><ShieldCheck aria-hidden="true" /> Privacy concept</span><h1>Use only the data needed to run the course.</h1><p>This proposal-stage screen demonstrates the intended privacy approach. Final legal wording, retention periods, consent requirements and deletion procedures will be approved by KOTC before launch.</p></header>
        <div className="v5-privacy-grid">
          <article><LockKeyhole aria-hidden="true" /><h2>Information required</h2><ul><li>Name and email for account access</li><li>Employee or employer pathway</li><li>Chapter and topic progress</li><li>Completion and certificate record</li></ul></article>
          <article><CheckCircle2 aria-hidden="true" /><h2>Information not required</h2><ul><li>Advertising profiles</li><li>Cross-site tracking</li><li>Unnecessary demographic details</li><li>Sale or sharing of learner information</li></ul></article>
          <article><Trash2 aria-hidden="true" /><h2>Learner control</h2><ul><li>Access and correct account information</li><li>Request an export of learning records</li><li>Use an approved account-deletion process</li><li>Understand how long records are retained</li></ul></article>
        </div>
        <div className="v5-proposal-card"><strong>Demo limitation</strong><p>No information entered in this proof of concept is submitted to a production learner database. The current demo uses local browser storage only for pathway, display and progress states.</p></div>
      </div>
    </section>
  );
}
