# AutoSubmit — AI Career Copilot

An AI-powered job application copilot built with **Next.js 16** (App Router), featuring serverless form automation via [MyFormConnect](https://myformconnect.io) and interactive appointment scheduling via [MyFormCapture](https://myformcapture.com).

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in your browser
http://localhost:3000
```

---

## Configuration (`.env.local`)

All forms work out of the box with default endpoints. To connect your own MyFormConnect / MyFormCapture forms, create a `.env.local` file:

```env
# Demo & Booking Widget
NEXT_PUBLIC_MFC_DEMO_URL="https://staging.myformcapture.com/f/af081980-b7c4-4d97-a99d-e3e00c3473dc"

# Career Profile Ingestion
NEXT_PUBLIC_MFC_PROFILE_URL="https://myformcapture.com/f/your-profile-form-uuid"

# Waitlist Portal
NEXT_PUBLIC_MFC_WAITLIST_URL="https://myformcapture.com/f/your-waitlist-form-uuid"

# Contact Form
NEXT_PUBLIC_MFC_CONTACT_URL="https://myformcapture.com/f/your-contact-form-uuid"

# Newsletter Signup
NEXT_PUBLIC_MFC_NEWSLETTER_URL="https://myformcapture.com/f/your-newsletter-form-uuid"
```

---

## Customizing the Booking Widget Theme

The booking widget styles and colors are located in:
- `public/booking-widget.css`

Change the CSS variables at the top of the file to customize colors:

```css
:root {
  --theme-color: #38BDF8;                /* Primary button, active dates, highlights */
  --theme-hover: #7DD3FC;                /* Hover state */
  --widget-bg: #0c0f17;                  /* Card background */
  --widget-text-main: #ffffff;           /* Main text color */
}
```

---

## Project Structure

```
├── public/
│   └── booking-widget.css    # Customizable widget stylesheet
├── src/
│   ├── app/
│   │   ├── page.tsx          # Homepage with interactive copilot preview
│   │   ├── demo/page.tsx     # Live booking widget & demo request
│   │   ├── waitlist/page.tsx # Early access waitlist
│   │   └── contact/page.tsx  # Contact & support
│   ├── components/
│   │   ├── BookingWidget.tsx # MyFormCapture booking widget component
│   │   ├── forms/            # Working MyFormConnect intake forms
│   │   └── ...
│   └── styles/
```

---

## Build & Production

```bash
# Production build
npm run build

# Start production server
npm run start
```
