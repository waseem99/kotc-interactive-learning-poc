import Link from "next/link";
import {
  Activity,
  Award,
  BarChart3,
  BookOpenCheck,
  ChevronRight,
  FileText,
  FolderKanban,
  PlaySquare,
  Settings2,
  ShieldCheck,
  Users,
} from "lucide-react";
import { contentRows, metrics, pathwayData } from "@/content/mock-analytics";

const adminNav = ["Overview", "Curriculum", "Media", "Activities", "Reviews", "Learners", "Certificates", "Reports"];

const quickActions = [
  { icon: BookOpenCheck, title: "Create a module", text: "Build reusable lessons and activities.", href: "/admin/content-editor" },
  { icon: PlaySquare, title: "Add learning media", text: "Prepare captions, transcripts, and resources.", href: null },
  { icon: Users, title: "Review learner access", text: "Manage pathways, cohorts, and permissions.", href: null },
];

export default function AdminPage() {
  return (
    <section className="section page-section admin-page">
      <div className="container">
        <div className="dashboard-heading admin-heading">
          <div>
            <span className="eyebrow"><Settings2 aria-hidden="true" /> KOTC administration concept</span>
            <h1>A calm operational workspace for learning content and review.</h1>
            <p>Illustrative data demonstrates how curriculum, accessibility review, cultural review, learner progress, and completion evidence can be managed without decorative overload.</p>
          </div>
          <span className="illustrative-label prominent">Illustrative data only</span>
        </div>

        <div className="lc-admin-workspace">
          <aside className="lc-admin-sidebar" aria-label="Administration sections">
            <strong>KOTC workspace</strong>
            <nav>
              {adminNav.map((item, index) => <a href={index === 0 ? "#overview" : `#${item.toLowerCase()}`} className={index === 0 ? "active" : undefined} key={item}>{item}</a>)}
            </nav>
            <div className="lc-admin-sidebar-note"><ShieldCheck aria-hidden="true" /><span>Role-based access and approval responsibilities are configured in production.</span></div>
          </aside>

          <div className="lc-admin-main" id="overview">
            <div className="metric-grid">
              {metrics.map((metric, index) => {
                const Icon = [Users, Activity, Award, BarChart3][index];
                return (
                  <article className="metric-card" key={metric.label}>
                    <span className="metric-icon"><Icon aria-hidden="true" /></span>
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                    <small>{metric.change}</small>
                  </article>
                );
              })}
            </div>

            <div className="admin-grid">
              <article className="admin-panel participation-panel">
                <div className="panel-heading"><div><span className="eyebrow">Participation</span><h2>Learning pathways</h2></div><button type="button" className="text-button">View report</button></div>
                <div className="pathway-chart" role="img" aria-label="Illustrative participation by pathway: 72 percent trades learners and 28 percent employers and unions">
                  {pathwayData.map((item, index) => (
                    <div className="pathway-row" key={item.label}>
                      <div><span>{item.label}</span><strong>{item.value}%</strong></div>
                      <div className="bar-track"><span className={`bar-fill bar-${index + 1}`} style={{ width: `${item.value}%` }} /></div>
                    </div>
                  ))}
                </div>
                <div className="chart-note">Every visual value is available as text; colour is not the only source of meaning.</div>
              </article>

              <article className="admin-panel engagement-panel">
                <div className="panel-heading"><div><span className="eyebrow">Engagement</span><h2>Module completion</h2></div><span className="illustrative-label">Last 30 days</span></div>
                <div className="vertical-chart" role="img" aria-label="Illustrative weekly completion values: 64, 82, 48, 71, 56, and 89 percent">
                  {[64, 82, 48, 71, 56, 89].map((value, index) => (
                    <div className="chart-column" key={value + index}><span style={{ height: `${value}%` }} /><small>W{index + 1}</small><b>{value}%</b></div>
                  ))}
                </div>
              </article>
            </div>

            <div className="admin-grid lower-grid">
              <article className="admin-panel content-panel">
                <div className="panel-heading"><div><span className="eyebrow">Publishing workflow</span><h2>Content requiring attention</h2></div><Link href="/admin/content-editor" className="text-link">Open content editor</Link></div>
                <div className="table-wrap">
                  <table>
                    <caption className="sr-only">Illustrative content status list</caption>
                    <thead><tr><th>Content</th><th>Type</th><th>Status</th><th>Owner</th><th><span className="sr-only">Action</span></th></tr></thead>
                    <tbody>
                      {contentRows.map((row) => (
                        <tr key={row.item}>
                          <td><strong>{row.item}</strong></td><td>{row.type}</td><td><span className={`table-status status-${row.status.toLowerCase().replaceAll(" ", "-")}`}>{row.status}</span></td><td>{row.owner}</td><td><button type="button" className="icon-button" aria-label={`Open ${row.item}`}><ChevronRight aria-hidden="true" /></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>

              <aside className="admin-panel system-panel">
                <span className="side-icon"><FolderKanban aria-hidden="true" /></span>
                <span className="eyebrow">Structured content</span>
                <h2>Review responsibilities stay visible.</h2>
                <p>Programs, lessons, activities, transcripts, resources, certificates, and public pages move through explicit workflow states.</p>
                <ul className="plain-list">
                  <li><FileText aria-hidden="true" /> Draft and content-owner review</li>
                  <li><ShieldCheck aria-hidden="true" /> Accessibility and cultural review</li>
                  <li><BookOpenCheck aria-hidden="true" /> Approval, publishing, and version history</li>
                </ul>
              </aside>
            </div>

            <section className="quick-actions-section">
              <div className="section-title-row"><div><span className="eyebrow">Common tasks</span><h2>Administrative actions</h2></div></div>
              <div className="quick-action-grid">
                {quickActions.map(({ icon: Icon, title, text, href }) => {
                  const content = <><span className="icon-tile"><Icon aria-hidden="true" /></span><span><strong>{title}</strong><small>{text}</small></span><ChevronRight aria-hidden="true" /></>;
                  return href ? <Link href={href} className="quick-action-card" key={title}>{content}</Link> : <button type="button" className="quick-action-card" key={title}>{content}</button>;
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
