import { escapeHtml } from '../components.js';

export function renderProfilePage(profile, { toast, onBack } = {}) {
  const page = document.getElementById('page-profile-detail');
  if (!page) return;
  page.innerHTML = `
    <div class="profile-detail">
      <button class="back-link" type="button" id="profileBack">← Back to matches</button>
      <section class="profile-hero">
        <div class="profile-hero-avatar">${escapeHtml(profile.initials || profile.name?.slice(0,1) || 'S')}</div>
        <div><div class="profile-title-row"><h1>${escapeHtml(profile.name)}</h1>${profile.verified ? '<span class="verified">✓</span>' : ''}</div><p>${escapeHtml(profile.age)} · ${escapeHtml(profile.location)}</p></div>
      </section>
      <section class="form-card detail-section"><h2>About</h2><p>${escapeHtml(profile.about || 'This candidate has not added an introduction yet.')}</p></section>
      <section class="form-card detail-section"><h2>Details</h2><div class="detail-grid">
        ${detail('Education', profile.education)}${detail('Profession', profile.profession)}${detail('Family', profile.family)}${detail('Community', profile.community)}
      </div></section>
      <section class="form-card detail-section"><h2>Preferences</h2><div class="profile-tags">${(profile.preferences || profile.tags || []).map(x => `<span>${escapeHtml(x)}</span>`).join('')}</div></section>
      <section class="form-card safety-box"><h2>Privacy & Safety</h2><p>Contact details and protected photos should only be revealed through authorized connection flows.</p><button type="button" class="link-btn" id="reportProfile">Report profile</button></section>
      <div class="profile-sticky-actions"><button type="button" class="btn btn-secondary" id="saveProfile">♡ Save</button><button type="button" class="btn btn-primary" id="interestProfile">Send interest</button></div>
    </div>`;
  page.querySelector('#profileBack').addEventListener('click', onBack);
  page.querySelector('#saveProfile').addEventListener('click', () => toast(`${profile.name} saved`));
  page.querySelector('#interestProfile').addEventListener('click', () => toast(`Interest sent to ${profile.name}`));
  page.querySelector('#reportProfile').addEventListener('click', () => toast('Report flow will connect to moderation later'));
}

function detail(label, value) {
  return `<div class="detail-item"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value || 'Not provided')}</strong></div>`;
}
