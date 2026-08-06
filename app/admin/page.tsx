import Link from "next/link";
import { Activity, Award, BarChart3, BookOpenCheck, ChevronRight, FileText, FolderKanban, House, PlaySquare, Settings2, Users } from "lucide-react";
import { contentRows, pathwayData } from "@/content/mock-analytics";

const metrics = [
  { label: "Pilot learners", value: "96 / 150", change: "64% enrolled", icon: Users },
  { label: "Active learners", value: "73", change: "Past 30 days", icon: Activity },
  { label: "Course completions", value: "41", change: "Passed/Completed", icon: Award },
  { label: "Certificates issued", value: "39", change: "2 awaiting review", icon: BarChart3 },
];

const quickActions = [
  { icon: BookOpenCheck, title: "Manage six chapters", text: "Edit, reorder, preview and publish approved KOTC content.", href: "/admin/content-editor" },
  { icon: House, title: "Manage 16 house hotspots", text: "Update labels, views, positions and linked topics.", href: "/house" },
  { icon: PlaySquare, title: "Manage supplied media", text: "Replace video, captions, transcripts, illustrations and resources.", href: "/admin/content-editor" },
  { icon: Users, title: "Manage learners", text: "Review pathway, progress, completion and certificate records.", href: null },
];

export default function AdminPage() {
  return (
    <section className="section page-section admin-page">
      <div className="container">
        <div className="dashboard-heading admin-heading">
          <div><span className="eyebrow"><Settings2 aria-hidden="true" /> KOTC administration concept</span><h1>Operate the course independently.</h1><p>KOTC controls chapters, pathway variants, supplied media, the 16 exterior-house topics, learners, completion records, certificates and privacy-conscious reporting.</p></div>
          <span className="illustrative-label prominent">Illustrative pilot data</span>
        </div>

        <div className="metric-grid">{metrics.map(({label,value,change,icon:Icon})=><article className="metric-card" key={label}><span className="metric-icon"><Icon aria-hidden="true" /></span><span>{label}</span><strong>{value}</strong><small>{change}</small></article>)}</div>

        <div className="admin-grid">
          <article className="admin-panel participation-panel"><div className="panel-heading"><div><span className="eyebrow">Participation</span><h2>Employee and employer pathways</h2></div><button type="button" className="text-button">Export aggregate report</button></div><div className="pathway-chart" role="img" aria-label="Illustrative participation by pathway">{pathwayData.map((item,index)=><div className="pathway-row" key={item.label}><div><span>{item.label}</span><strong>{item.value}%</strong></div><div className="bar-track"><span className={`bar-fill bar-${index+1}`} style={{width:`${item.value}%`}} /></div></div>)}</div><div className="chart-note">The production event list and retention period will be approved during discovery. No advertising or cross-site tracking is proposed.</div></article>
          <article className="admin-panel engagement-panel"><div className="panel-heading"><div><span className="eyebrow">Course progress</span><h2>Chapter completion</h2></div><span className="illustrative-label">Pilot cohort</span></div><div className="vertical-chart" role="img" aria-label="Illustrative completion values for six chapters">{[92,81,73,66,58,41].map((value,index)=><div className="chart-column" key={index}><span style={{height:`${value}%`}} /><small>Ch {index+1}</small><b>{value}%</b></div>)}</div></article>
        </div>

        <div className="admin-grid lower-grid">
          <article className="admin-panel content-panel"><div className="panel-heading"><div><span className="eyebrow">Publishing workflow</span><h2>Content requiring attention</h2></div><Link href="/admin/content-editor" className="text-button">Open content workspace</Link></div><div className="table-wrap"><table><caption className="sr-only">Illustrative content status list</caption><thead><tr><th>Content</th><th>Type</th><th>Status</th><th>Owner</th><th><span className="sr-only">Action</span></th></tr></thead><tbody>{contentRows.map((row)=><tr key={row.item}><td><strong>{row.item.replace("Module","Chapter")}</strong></td><td>{row.type.replace("Module","Chapter")}</td><td><span className={`table-status status-${row.status.toLowerCase().replaceAll(" ","-")}`}>{row.status}</span></td><td>{row.owner}</td><td><button type="button" className="icon-button" aria-label={`Open ${row.item}`}><ChevronRight aria-hidden="true" /></button></td></tr>)}</tbody></table></div></article>
          <aside className="admin-panel system-panel"><span className="side-icon"><FolderKanban aria-hidden="true" /></span><span className="eyebrow">Full administrative control</span><h2>Structured content without vendor dependence</h2><p>One course, six chapters, one pathway-specific chapter, topics, interactions, resources, captions, transcripts, certificates and public pages are managed as reusable content.</p><ul className="plain-list"><li><FileText aria-hidden="true" /> Draft, review, approve, publish and archive</li><li><Users aria-hidden="true" /> Role-based administration and account control</li><li><House aria-hidden="true" /> All 16 hotspots managed from the CMS</li></ul></aside>
        </div>

        <section className="quick-actions-section"><div className="section-title-row"><div><span className="eyebrow">Common tasks</span><h2>Administrative quick actions</h2></div></div><div className="quick-action-grid">{quickActions.map(({icon:Icon,title,text,href})=>{const content=<><span className="icon-tile"><Icon aria-hidden="true" /></span><span><strong>{title}</strong><small>{text}</small></span><ChevronRight aria-hidden="true" /></>;return href?<Link href={href} className="quick-action-card" key={title}>{content}</Link>:<button type="button" className="quick-action-card" key={title}>{content}</button>})}</div></section>
      </div>
    </section>
  );
}
