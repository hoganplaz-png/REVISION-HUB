/* Privacy notice and terms of use: what the site stores, where AI features send work, and the IB disclaimer. */
IB.page = function () {
  const app = IB.qs("#app");
  app.innerHTML = `<h1 style="margin-bottom:.2em">Privacy &amp; terms</h1>
    <p class="muted" style="margin-top:0">Last updated 21 October 2026. Plain-English summary of what this site does with your information and the rules for using it.</p>

    <section class="card">
      <h2 style="margin-top:0">What we store</h2>
      <ul>
        <li><strong>As a guest</strong> (not signed in): your answers, progress, mistakes and settings are saved only in this browser on this device. Nothing is sent to us.</li>
        <li><strong>If you sign in with Google</strong>: Google tells the site your name, email address and profile picture. Your progress is saved to our database (Google Firebase) so it follows you between devices. Only you can read your answers, essays and papers.</li>
        <li><strong>Friends</strong>: if you add friends, they can see your display name, picture, level, XP, streak and (unless you turn them off) your badges and subject percentages. They never see your answers or uploaded work.</li>
        <li>We do not sell your information, show adverts, or use tracking cookies. The site loads fonts from Google Fonts and maths fonts from jsDelivr, which see your IP address like any website you visit.</li>
      </ul>
    </section>

    <section class="card">
      <h2 style="margin-top:0">AI marking, the AI tutor and the IA/EE coach</h2>
      <p>When you use an AI feature, the question, your answer, and any photos, PDFs or drafts you upload are sent through our server to <strong>Google's Gemini AI</strong> to be marked. They are not stored by this site after marking, but Google processes them under its own terms and may keep them for a time and use them to improve its services.</p>
      <p><strong>Do not put personal information</strong> (your full name, school, candidate number, address, photos of people) in answers or uploads. Crop photos to just your work.</p>
      <p>AI marks, levels and predicted grades are estimates to help you revise. They can be wrong and are not official IB marks. Your teacher and the IB decide your real marks.</p>
    </section>

    <section class="card">
      <h2 style="margin-top:0">Your choices</h2>
      <ul>
        <li>Use the site as a guest to keep everything on your own device.</li>
        <li>Turn off sharing of badges or subject percentages on the Friends page, or remove friends at any time.</li>
        <li>To get a copy of your data or have your account and progress deleted, contact the site owner (details below) and we will do it within 30 days.</li>
        <li>If you are under the age of digital consent where you live, ask a parent or guardian before signing in or using the AI features.</li>
      </ul>
    </section>

    <section class="card">
      <h2 style="margin-top:0">Terms of use</h2>
      <ul>
        <li>This site is free revision help, provided as it is. We try hard to be accurate but cannot promise every note, answer or mark is correct.</li>
        <li>All notes and questions are original IB-style material. They are not official IB past-paper questions or markschemes. Get those from your school or the IB.</li>
        <li>International Baccalaureate® and IB® are registered trademarks of the International Baccalaureate Organization. This site is not affiliated with, endorsed by or connected to the IB.</li>
        <li>Follow your school's and the IB's academic integrity rules. Do not submit AI-written text as your own coursework.</li>
        <li>Do not upload anything you do not have the right to share, including copies of official IB papers or other people's work.</li>
        <li>Do not misuse the site, try to break it, or use the AI features for anything other than your own revision.</li>
      </ul>
    </section>

    <section class="card">
      <h2 style="margin-top:0">Contact</h2>
      <p>Questions, data requests or a concern about content (including copyright): <strong>[site owner to add contact email]</strong>. We will reply and remove anything that should not be here.</p>
    </section>`;
};
