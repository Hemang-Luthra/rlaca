document.addEventListener('DOMContentLoaded', function(){
  // Basic active nav highlight
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
  const href = a.getAttribute('href').split('/').pop();
  if (href === path) {
    if (a.classList.contains('cta')) {
      a.style.background = 'var(--emerald-dark)';  // darker green for active Contact
      a.style.color = '#fff';
    } else {
      a.style.color = 'var(--emerald)';  // normal links stay green text
    }
  }
});


  // Contact form AJAX submit (works with Formspree endpoint)
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = document.getElementById('form-status');
      status.innerHTML = '';
      const action = form.getAttribute('action') || '';
      if(!action || action.includes('your-form-id')){
        status.innerHTML = '<div class="error">Replace the placeholder Formspree endpoint in the form action with your Formspree form URL (see README).</div>';
        return;
      }
      const data = new FormData(form);
      try{
        const res = await fetch(action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' }});
        const json = await res.json();
        if(res.ok){ 
          status.innerHTML = '<div class="success">Thanks — your message was sent. We will contact you soon.</div>';
          form.reset();
        } else {
          status.innerHTML = '<div class="error">There was an error submitting the form. Please try again.</div>';
        }
      }catch(err){
        status.innerHTML = '<div class="error">Network error. Please try again later.</div>';
      }
    });
  }
});
