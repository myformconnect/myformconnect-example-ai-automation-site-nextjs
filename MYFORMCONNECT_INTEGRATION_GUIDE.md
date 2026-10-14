# MyFormConnect (MFC) — Developer Integration Guide

> A concise guide on how **MyFormConnect** works and how to integrate it across different form types (Contact, Career / File Uploads, Newsletter) and frameworks (**React**, **Next.js**, **Angular**, **Vue**, **Vanilla JS**).

---

## 1. How It Works

MyFormConnect provides a serverless endpoint for your front-end forms. You don't need a backend, database, or email service.

```
Front-end Form (React, Next.js, Angular, etc.)
  │
  │  POST request with FormData
  │  Headers: Accept: application/json, X-Requested-With: XMLHttpRequest
  ▼
MyFormConnect Endpoint (https://myformconnect.io/f/YOUR_FORM_UUID)
  │
  ├── Checks domain whitelist & honeypot spam filter
  ├── Saves submission data & file uploads
  └── Sends instant email notification to you
```

---

## 2. Quick Setup in Dashboard

1. **Add Your Domain**: Go to [MyFormConnect Dashboard](https://myformconnect.io/account/) → **Domains** → **Add New Domain**.
   - Add your live URL (`https://yourdomain.com`).
   - For local development, add your local dev URL (e.g. `http://localhost:5173`, `http://localhost:3000`, or `http://localhost:4200`).
2. **Create Form**: Click **Add New Form**, enter a name, and copy your **Form Action URL**:
   ```text
   https://myformconnect.io/f/YOUR_FORM_UUID
   ```
3. **Enable Email Alerts**: In form settings, turn on **Notify on Email** to receive submission notifications.

---

## 3. The 4 Golden Rules

| Rule | Correct ✅ | Incorrect ❌ |
| :--- | :--- | :--- |
| **1. Input Names** | `<input name="email" />` | `<input id="email" />` *(Missing `name` means no data is sent!)* |
| **2. Body Format** | `body: new FormData(form)` | `body: JSON.stringify(data)` *(Causes 422 error & breaks file uploads)* |
| **3. Content-Type Header** | Omit `Content-Type` *(Browser sets boundary automatically)* | `headers: { 'Content-Type': 'multipart/form-data' }` *(Corrupts payload)* |
| **4. AJAX Headers** | `Accept: 'application/json'`<br>`'X-Requested-With': 'XMLHttpRequest'` | Omitted *(Causes 302 redirect & CORS error in SPAs)* |

---

## 4. How to Use for Different Form Types

### A. Standard Contact Form
Send text inputs, selects, and textareas.

```html
<form id="contactForm">
  <!-- Anti-spam honeypot (hidden from real users) -->
  <input type="text" name="_gotcha" style="display:none;" tabindex="-1" autocomplete="off" />

  <input type="text" name="name" placeholder="Name" required />
  <input type="email" name="email" placeholder="Email" required />
  <select name="subject">
    <option value="General">General Inquiry</option>
    <option value="Sales">Sales</option>
  </select>
  <textarea name="message" placeholder="Message" required></textarea>
  <button type="submit">Send</button>
</form>
```

### B. Career / Job Application Form (File Upload / Resume)
MyFormConnect automatically accepts binary file attachments (PDF, DOCX, etc., up to 100MB). Simply add an `<input type="file" />`.

```html
<form id="careerForm">
  <input type="text" name="applicant_name" placeholder="Full Name" required />
  <input type="email" name="email" placeholder="Email" required />
  <input type="text" name="position" value="Senior Engineer" />

  <!-- File Upload: Handled automatically by FormData -->
  <input type="file" name="resume" accept=".pdf,.doc,.docx" required />

  <textarea name="cover_letter" placeholder="Cover letter / notes"></textarea>
  <button type="submit">Submit Application</button>
</form>
```

> 💡 **Multiple Files:** Use `<input type="file" name="attachments[]" multiple />` if candidates need to attach multiple documents.

### C. Newsletter & Quick Lead Form
Single input inline form:

```html
<form id="newsletterForm">
  <input type="hidden" name="form_type" value="newsletter_signup" />
  <input type="email" name="email" placeholder="Enter your email" required />
  <button type="submit">Subscribe</button>
</form>
```

---

## 5. Technology Quick-Start Guides

### Vanilla JavaScript
```javascript
const form = document.querySelector('#myForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const response = await fetch('https://myformconnect.io/f/YOUR_FORM_UUID', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    body: new FormData(form), // Automatically captures text fields and files
  });

  if (response.ok) {
    alert('Submitted successfully!');
    form.reset();
  } else {
    alert('Submission failed. Check network tab.');
  }
});
```

---

### React
```jsx
import { useState } from 'react';

const MFC_URL = 'https://myformconnect.io/f/YOUR_FORM_UUID';

export default function SimpleForm() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch(MFC_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: new FormData(e.currentTarget), // Captures all inputs including files
      });

      if (!res.ok) throw new Error();
      setStatus('success');
      e.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') return <p>Thank you! Your message was sent.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" required placeholder="Name" />
      <input type="email" name="email" required placeholder="Email" />
      <input type="file" name="resume" accept=".pdf,.docx" />
      <textarea name="message" required placeholder="Message" />
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Submit'}
      </button>
      {status === 'error' && <p>Error submitting. Please try again.</p>}
    </form>
  );
}
```

---

### Next.js (App Router)

#### Client Component (`'use client'`)
```tsx
'use client';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const res = await fetch(process.env.NEXT_PUBLIC_MFC_URL!, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: new FormData(e.currentTarget),
    });

    if (res.ok) {
      setStatus('success');
      e.currentTarget.reset();
    } else {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="name" required placeholder="Name" />
      <input name="email" type="email" required placeholder="Email" />
      <input name="resume" type="file" accept=".pdf" />
      <button type="submit" disabled={status === 'loading'}>Send</button>
      {status === 'success' && <p>Sent successfully!</p>}
      {status === 'error' && <p>Failed to send.</p>}
    </form>
  );
}
```

---

### Angular (HttpClient)

```typescript
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  template: `
    <form (ngSubmit)="onSubmit(form)" #form="ngForm">
      <input name="name" ngModel required placeholder="Name" />
      <input name="email" ngModel required placeholder="Email" />
      <input type="file" (change)="onFile($event)" name="resume" />
      <button type="submit" [disabled]="loading">Submit</button>
      <p *ngIf="success">Submitted successfully!</p>
    </form>
  `
})
export class ContactFormComponent {
  private url = 'https://myformconnect.io/f/YOUR_FORM_UUID';
  selectedFile: File | null = null;
  loading = false;
  success = false;

  constructor(private http: HttpClient) {}

  onFile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) this.selectedFile = input.files[0];
  }

  onSubmit(form: any) {
    this.loading = true;
    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('email', form.value.email);
    if (this.selectedFile) formData.append('resume', this.selectedFile);

    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });

    this.http.post(this.url, formData, { headers }).subscribe({
      next: () => { this.success = true; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
```

---

### Vue 3 / Nuxt 3

```vue
<script setup>
import { ref } from 'vue';

const status = ref('idle');
const formRef = ref(null);

const submit = async () => {
  status.value = 'loading';
  try {
    const res = await fetch('https://myformconnect.io/f/YOUR_FORM_UUID', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: new FormData(formRef.value),
    });

    if (!res.ok) throw new Error();
    status.value = 'success';
    formRef.value.reset();
  } catch {
    status.value = 'error';
  }
};
</script>

<template>
  <form ref="formRef" @submit.prevent="submit">
    <input name="name" placeholder="Name" required />
    <input name="email" type="email" placeholder="Email" required />
    <input name="resume" type="file" accept=".pdf" />
    <button type="submit" :disabled="status === 'loading'">Send</button>
    <p v-if="status === 'success'">Message sent!</p>
    <p v-if="status === 'error'">Submission failed.</p>
  </form>
</template>
```

---

## 6. Troubleshooting Common Issues

| Issue / HTTP Code | Cause | Fix |
| :--- | :--- | :--- |
| **`403 Forbidden`** | Domain is restricted | In MyFormConnect dashboard, add your current domain (or `http://localhost:5173` / `http://localhost:3000`) to **Allowed Domains**, or disable domain restriction. |
| **`404 Not Found`** | Invalid Form UUID | Double-check that your URL is `https://myformconnect.io/f/<UUID>` with your real UUID from the dashboard. |
| **`422 Unprocessable`** | JSON payload used | Do not use `JSON.stringify()`. Send `new FormData(form)`. |
| **`302 Found` / CORS Error** | Missing AJAX headers | Add `'Accept': 'application/json'` and `'X-Requested-With': 'XMLHttpRequest'` to the request headers. |
| **Submission empty in dashboard** | Inputs lack `name` attributes | Ensure each `<input>`, `<select>`, `<textarea>` has a `name="..."` attribute (e.g. `name="email"`). |
| **Page reloads on submit** | Missing `preventDefault` | Call `e.preventDefault()` at the beginning of your submit handler. |

---

## 7. Cheatsheet Summary

```javascript
// Universal Fetch Request for MyFormConnect:
const response = await fetch('https://myformconnect.io/f/YOUR_FORM_UUID', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  body: new FormData(formElement) // Handles text fields + file attachments
});
```
