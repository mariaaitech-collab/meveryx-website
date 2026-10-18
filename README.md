# Meveryx Website
> The company website for Meveryx, a software and digital-marketing studio in Pakistan.

![language](https://img.shields.io/badge/language-TypeScript-4338CA?style=flat-square&logo=typescript&logoColor=white) ![framework](https://img.shields.io/badge/framework-Next.js_16-4338CA?style=flat-square&logo=nextdotjs&logoColor=white) ![license](https://img.shields.io/badge/license-MIT-6366F1?style=flat-square) ![status](https://img.shields.io/badge/status-live-818CF8?style=flat-square)

## Overview
This is the public website for Meveryx. It explains the studio's services, shows pricing, and turns visitors into leads through a contact form and a consultation-booking form. It was built to rank in search, so every page ships with proper metadata, a sitemap and structured data.

**Live:** https://meveryx-frontend.vercel.app

## Features
- 12 service pages from one template: web, mobile, UI/UX, SEO, Google & Meta Ads, AI automation and more
- Consultation booking form with date, time, timezone and meeting preference, validated with Zod
- Contact form that sends email through Resend, Web3Forms or Formspree, whichever is configured
- Pricing, About (team and values), FAQ, Privacy and Terms pages
- Built-in SEO: sitemap, robots.txt, web manifest and schema.org structured data
- Floating WhatsApp button and animated sections (Framer Motion)

## Tech Stack
| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2 |
| UI | React | 19.2 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS | 4 |
| Animation | Framer Motion | 12.43 |
| Validation | Zod | 4.4 |
| Icons | lucide-react | 1.28 |
| Utilities | clsx + tailwind-merge | 2.1 / 3.6 |

## Screenshots
<!-- Maria: add screenshots here -->

## Getting Started
**Prerequisites:** Node.js 20+

```bash
git clone https://github.com/mariaaitech-collab/meveryx-website.git
cd meveryx-website
npm install
npm run dev        # http://localhost:3000
```

To make the forms deliver email, set one of these in `.env.local`: `RESEND_API_KEY` (with `RESEND_FROM` and `RESEND_TO`), `WEB3FORMS_ACCESS_KEY`, or `FORMSPREE_ID`.

Production build: `npm run build && npm start`

## Status
**Complete and live** at https://meveryx-frontend.vercel.app.

---
Built by Maria Shafqat · [Linktree](https://linktr.ee/mariashafqat_)
