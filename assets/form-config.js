/* ---------------------------------------------------------------------------
   Contact form destination. This is the ONLY file to edit to make the forms
   on index.html and planvio.html send somewhere.

   Paste a URL that accepts a JSON POST. Two that work with a static site:

     Power Automate  Create a flow with a "When an HTTP request is received"
                     trigger, add a Send an email step, copy the HTTP POST URL.
     Formspree       https://formspree.io -> new form -> copy the endpoint.

   Leave it empty and both forms fall back to opening the visitor's email
   client addressed to FALLBACK_EMAIL. That works, but it loses anyone who
   reads mail in a browser tab, so wire this up before running any ads.
--------------------------------------------------------------------------- */
window.HALVYN_FORM_ENDPOINT = '';
