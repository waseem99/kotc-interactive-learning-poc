# KOTC Interactive Learning Platform — Proof of Concept

A lightweight, accessible Next.js proof of concept for the Keepers of the Circle Interactive Educational Website proposal.

## Purpose

This repository demonstrates the proposed learner journey, interactive-house navigation, accessible learning interactions, progress states, and administrator experience for the RFP response.

It is a functional concept only. It is not the final cultural or visual design. Final imagery, terminology, symbolism, curriculum, and brand treatment must be developed through KOTC-led co-design, cultural review, and formal approval.

## Proposed demo flow

Role selection → Learner dashboard → Interactive house → Sample lesson → Accessible activity → Completion state

A separate administrator dashboard demonstrates content and engagement management concepts.

## Delivery principles

- WCAG 2.2 Level AA target
- Mobile-first responsive design
- No culturally specific imagery or symbolism without KOTC approval
- Accessible alternatives for every interactive activity
- Front-end-only POC using mock data and local state
- Production architecture remains AWS Canada; Vercel is only for bid-stage preview hosting
- AI-assisted delivery with mandatory human review gates

## Planning documents

- [AI-first implementation plan](docs/AI_FIRST_IMPLEMENTATION_PLAN.md)
- [Design system v0.1](docs/DESIGN_SYSTEM.md)
- [Complete design process](docs/DESIGN_PROCESS.md)
- [Demo scope and acceptance matrix](docs/DEMO_SCOPE_AND_ACCEPTANCE.md)
- [Contribution and AI-review workflow](CONTRIBUTING.md)

## Implementation backlog

The repository issues define the execution sequence:

1. Bootstrap application, quality tooling, and CI
2. Implement design system and accessibility preferences
3. Build role selection and learner dashboard
4. Build accessible interactive house
5. Build sample lesson
6. Build accessible activity and completion state
7. Build administrator dashboard
8. Run final QA, deploy, and capture proposal evidence

## Status

Planning package prepared on `planning/ai-first-implementation` for review before implementation begins.
