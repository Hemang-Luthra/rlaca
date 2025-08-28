Ruchi Luthra & Associates - Static Website (Formspree-ready)
Files included:
- index.html (Home)
- services.html
- pricing.html
- process.html
- team.html
- resources.html
- faqs.html
- contact.html (contains Formspree placeholder endpoint)
- style.css
- script.js

Setup instructions:
1. Sign up at https://formspree.io and create a form. Verify office@rlaca.com.
2. Copy your Formspree form URL (e.g. https://formspree.io/f/xyz123) and replace the placeholder in contact.html form action:
   <form id="contact-form" action="https://formspree.io/f/your-form-id" method="POST">

3. Unzip and upload files to any static host (Netlify, Vercel, GitHub Pages) or open index.html locally.
4. Test the contact form; submissions will email to office@rlaca.com after verification in Formspree.

