# nextjs

Next.js frontend showcase for an operations dashboard interface, focused on layout structure, data presentation, filtering, and maintainable UI composition.

## Overview

This repository is a frontend-only Next.js application that demonstrates how I approach dashboard-style product UI in a structured way.

Instead of using Next.js as a tutorial sandbox, this project is intentionally shaped like a real internal tool:

- information-dense screens
- clear navigation
- strong visual hierarchy
- reusable dashboard components
- loading and empty states
- route-based structure with the App Router

## Why This Repo Exists

I wanted one public repo that shows I can work comfortably in a modern Next.js codebase without pretending it is a backend-heavy Laravel project.

The goal here is to show:

- App Router structure
- server-first page composition
- reusable dashboard UI primitives
- maintainable layout and styling decisions
- product-oriented frontend work rather than tutorial code

## Product Direction

The app is framed as an operations UI for monitoring jobs, webhook deliveries, and system health.

That gives the frontend a realistic purpose:

- summary cards
- queue and delivery tables
- status badges
- route-level dashboards
- search and filtering

## Stack

- Next.js App Router
- React
- TypeScript-ready project structure
- CSS modules-free global styling for fast iteration

## Routes

- `/` dashboard overview
- `/deliveries` webhook delivery monitoring
- `/insights` operational snapshots and implementation notes

## UI Principles

- keep the layout dense but readable
- make status visible at a glance
- prefer composable primitives over giant page files
- use restrained motion and strong spacing
- avoid generic SaaS-template aesthetics

## Folder Structure

```text
app/
  deliveries/
  insights/
  layout.tsx
  page.tsx
  globals.css
components/
  dashboard/
  layout/
lib/
```

## What This Repo Demonstrates

- route-driven UI structure
- reusable dashboard cards and tables
- filtering and search interaction patterns
- practical information architecture for internal tools

## Future Improvements

- real API integration
- loading skeletons
- route handlers for mocked data
- accessibility pass
- screenshots and demo recording
