"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Eye,
  FileText,
  Image as ImageIcon,
  ListChecks,
  Save,
  Upload,
  Users,
} from "lucide-react";
import { useState } from "react";

export default function ContentEditorPage() {
  const [status, setStatus] = useState("Draft");
  const [saved, setSaved] = useState(false);

  function saveDraft() {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  }

  return (
    <section className="section page-section editor-page">
      <div className="container">
        <div className="editor-topbar">
          <Link href="/admin" className="text-link"><ArrowLeft aria-hidden="true" /> Back to dashboard</Link>
          <div className="editor-actions">
            <button type="button" className="button secondary"><Eye aria-hidden="true" /> Preview</button>
            <button type="button" className="button primary" onClick={saveDraft}><Save aria-hidden="true" /> Save draft</button>
          </div>
        </div>

        <div className="editor-heading">
          <div><span className="eyebrow"><FileText aria-hidden="true" /> CMS editing concept</span><h1>Lower-impact materials</h1><p>Illustrative structured content editor showing how KOTC staff could manage lessons without developer intervention.</p></div>
          <span className="illustrative-label">No changes are submitted</span>
        </div>

        {saved ? <div className="save-notice" role="status"><CheckCircle2 aria-hidden="true" /> Draft saved locally for this demonstration.</div> : null}

        <div className="editor-layout">
          <div className="editor-main">
            <section className="editor-card">
              <div className="editor-card-heading"><span className="icon-tile"><FileText aria-hidden="true" /></span><div><h2>Lesson details</h2><p>Core metadata used throughout the learner experience.</p></div></div>
              <div className="form-grid">
                <label className="full-span"><span>Lesson title</span><input defaultValue="Choosing lower-impact materials" /></label>
                <label><span>Estimated duration</span><input defaultValue="12 minutes" /></label>
                <label><span>Learner pathway</span><select defaultValue="all"><option value="all">All learners</option><option value="learner">Trades learners</option><option value="employer">Employers and unions</option></select></label>
                <label className="full-span"><span>Summary</span><textarea rows={3} defaultValue="Use a balanced set of questions to compare health, durability, sourcing, installation, and end-of-life considerations." /></label>
              </div>
            </section>

            <section className="editor-card">
              <div className="editor-card-heading"><span className="icon-tile"><ImageIcon aria-hidden="true" /></span><div><h2>Media, captions, and transcript</h2><p>Upload media and maintain accessible alternatives together.</p></div></div>
              <div className="upload-zone"><Upload aria-hidden="true" /><strong>Video file or hosted media URL</strong><span>Illustrative upload control — MP4, WebM, or approved provider</span><button type="button" className="button secondary">Choose media</button></div>
              <div className="form-grid top-gap">
                <label><span>Caption file</span><input defaultValue="lower-impact-materials.en.vtt" /></label>
                <label><span>Transcript status</span><select defaultValue="ready"><option value="draft">Draft</option><option value="review">Ready for review</option><option value="ready">Approved</option></select></label>
              </div>
            </section>

            <section className="editor-card">
              <div className="editor-card-heading"><span className="icon-tile"><ListChecks aria-hidden="true" /></span><div><h2>Interactive activity</h2><p>Choose a reusable activity type and configure its content.</p></div></div>
              <div className="form-grid">
                <label><span>Activity type</span><select defaultValue="categorize"><option value="categorize">Categorize / drag and place</option><option value="flip">Flip cards</option><option value="reveal">Reveal panels</option><option value="sequence">Sequence steps</option></select></label>
                <label><span>House hotspot</span><select defaultValue="materials"><option value="materials">Lower-impact materials</option><option value="air">Indoor air quality</option><option value="water">Water and moisture</option></select></label>
                <label className="full-span"><span>Activity instructions</span><textarea rows={3} defaultValue="Sort each material choice into the most appropriate category. Drag a card or use the select-and-place controls." /></label>
              </div>
            </section>
          </div>

          <aside className="editor-sidebar">
            <section className="editor-card publish-card">
              <span className="eyebrow">Publishing workflow</span>
              <h2>Review and approval</h2>
              <label><span>Current status</span><select value={status} onChange={(event) => setStatus(event.target.value)}><option>Draft</option><option>Content review</option><option>Cultural review</option><option>Accessibility review</option><option>Approved</option></select></label>
              <div className="workflow-list">
                <span className="done"><CheckCircle2 aria-hidden="true" /> Content owner assigned</span>
                <span className={status === "Approved" ? "done" : ""}><Users aria-hidden="true" /> Cultural review recorded</span>
                <span className={status === "Approved" ? "done" : ""}><ListChecks aria-hidden="true" /> Accessibility checklist complete</span>
              </div>
              <button type="button" className="button primary full-width" disabled={status !== "Approved"}>Publish lesson</button>
            </section>
            <section className="editor-card">
              <span className="eyebrow">Accessibility checklist</span>
              <div className="check-list editor-checks">
                <span><CheckCircle2 aria-hidden="true" /> Heading order reviewed</span>
                <span><CheckCircle2 aria-hidden="true" /> Captions attached</span>
                <span><CheckCircle2 aria-hidden="true" /> Transcript available</span>
                <span><CheckCircle2 aria-hidden="true" /> Non-drag alternative enabled</span>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}
