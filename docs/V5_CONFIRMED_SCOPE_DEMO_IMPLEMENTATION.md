# KOTC Learning Commons V5 — Confirmed-Scope Demo

## Purpose

This branch rebuilds the proposal demo around the client-confirmed product scope rather than the earlier module/interior-house assumptions.

## Confirmed baseline

- One account-based course
- Six chapters and no modules
- Maximum learner duration: 235 minutes in the demonstration, below the four-hour limit
- Five shared chapters and one employee/employer pathway-specific chapter
- Exterior-only interactive house
- Exactly 16 data-driven clickable topics
- Four controlled exterior views: front, left, rear and right
- Equivalent structured topic list
- Progress saved in browser for the proposal demonstration
- No grades, assessments, scores or prerequisites
- Passed/Completed status after required content is completed
- Certificate-of-completion concept
- Pilot reporting against 150 learners
- English-only active demonstration
- KOTC supplies curriculum, videos, voiceovers, illustrations, transcripts, captions, imagery, brand guidance and language protocols
- WCAG 2.2 AA used as the implementation and test baseline

## Main implementation

- `content/mock-program.ts` — one course, six chapters and sixteen house topics
- `lib/types.ts` — confirmed chapter, pathway, hotspot and completion data structures
- `app/page.tsx` — rebuilt public product introduction
- `app/dashboard/page.tsx` — six-chapter learner trail and resume state
- `components/house-navigator.tsx` — exterior house, controlled views, sixteen hotspots and equivalent list
- `app/admin/page.tsx` — KOTC operational control, pilot reporting, chapters, supplied media, hotspots, learners and certificates
- `styles/12-learning-commons-v5.css` — V5 visual and responsive layer

## Content boundary

All chapter names, topic names, durations, descriptions, pilot values and learner records are illustrative placeholders for proposal demonstration. They do not claim to be KOTC-approved curriculum.

## Logo boundary

The supplied low-resolution logo reference is used without redrawing or changing its internal artwork. It must be replaced with an official transparent production master before launch.

## Demo completion definition

The demo is acceptable when:

1. Exactly six chapters are visible.
2. No learner-facing module terminology remains on primary V5 screens.
3. The course duration remains below four hours.
4. Employee and employer pathway selection is represented.
5. One chapter is identified as pathway-specific.
6. Exactly sixteen exterior-house topics are available.
7. House and list modes expose equivalent destinations.
8. No scores, grades, assessments or prerequisites appear in the confirmed flow.
9. Completion produces a certificate concept rather than a grade.
10. Admin screens demonstrate chapter, hotspot, supplied-media, learner, completion, certificate and analytics control.
11. Desktop, tablet and mobile layouts remain usable.
12. Automated build, test and accessibility checks pass before Vercel deployment.

## Deployment rule

Do not promote this branch to the stable client-demo URL until GitHub checks pass and the protected Vercel preview receives explicit visual approval.
