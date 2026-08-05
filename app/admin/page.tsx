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
  Users,
} from "lucide-react";
import { contentRows, metrics, pathwayData } from "@/content/mock-analytics";

const quickActions = [
  { icon: BookOpenCheck, title: "Create a module", text: "Build curriculum from reusable lesson and activity types.", href: "/admin/content-editor" },
  { icon: PlaySquare, title: "Upload media", text: "Add video, captions, transcripts, audio, and resources.", href: null },
  { icon: Users, title: "Manage learners", text: "Review roles, progress, organizations, and support needs.", href: null },
  { icon: BarChart3, title: "Export reporting", text: "Prepare aggregate engagement and completion reports.", href: null },
];

export default function AdminPage() {
  return (
    <section className="section page-section admin-page">
      <div className="container">
        <div className="dashboard-heading admin-heading">
          <div>
            <span className="eyebrow"><Settings2 aria-hidden="true" /> KOTC administration concept</span>
            <h1>Manage learning, people, and insight from one workspace.</h1>
            <p>All values shown below are illustrative. The production dashboard would be configured around KOTC’s roles, reporting needs, privacy requirements, and approval workflow.</p>
          </div>
          <span className="illustrative-label prominent">Illustrative data only</span>
        </div>

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
            <div className="chart-note">Text values are provided with every visual indicator; colour is not the only source of meaning.</div>
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
            <div className="panel-heading"><div><span className="eyebrow">Publishing workflow</span><h2>Content requiring attention</h2></div><button type="button" className="text-button">Open content workspace</button></div>
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
            <span className="eyebrow">Future CMS control</span>
            <h2>Structured and reusable content</h2>
            <p>Programs, chapters, lessons, activities, resources, captions, transcripts, certificates, and public pages can be managed as reusable content types.</p>
            <ul className="plain-list">
              <li><FileText aria-hidden="true" /> Draft, review, approve, and publish states</li>
              <li><Users aria-hidden="true" /> Role-based administration permissions</li>
              <li><BookOpenCheck aria-hidden="true" /> Version history and archive controls</li>
            </ul>
          </aside>
        </div>

        <section className="quick-actions-section">
          <div className="section-title-row"><div><span className="eyebrow">Common tasks</span><h2>Administrative quick actions</h2></div></div>
          <div className="quick-action-grid">
            {quickActions.map(({ icon: Icon, title, text, href }) => {
              const content = (<>
                <span className="icon-tile"><Icon aria-hidden="true" /></span>
                <span><strong>{title}</strong><small>{text}</small></span>
                <ChevronRight aria-hidden="true" />
              </>);
              return href ? <Link href={href} className="quick-action-card" key={title}>{content}</Link> : <button type="button" className="quick-action-card" key={title}>{content}</button>;
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
