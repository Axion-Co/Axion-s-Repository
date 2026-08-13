export function profileCard(profile, { onInterest, onView } = {}) {
  const article = document.createElement('article');
  article.className = 'profile-card';
  article.tabIndex = 0;
  article.innerHTML = `
    <div class="profile-avatar" aria-hidden="true">${escapeHtml(profile.initials || profile.name?.slice(0, 1) || 'S')}</div>
    <div class="profile-main">
      <div class="profile-heading">
        <div>
          <h3>${escapeHtml(profile.name)}</h3>
          <p>${escapeHtml(profile.age)} · ${escapeHtml(profile.location)}</p>
        </div>
        ${profile.verified ? '<span class="verified" title="Verified profile" aria-label="Verified profile">✓</span>' : ''}
      </div>
      <p class="profile-meta">${escapeHtml(profile.education || '')}${profile.education && profile.profession ? ' · ' : ''}${escapeHtml(profile.profession || '')}</p>
      <div class="profile-tags">${(profile.tags || []).slice(0, 3).map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
      <div class="profile-actions">
        <button class="btn btn-secondary view-profile" type="button">View profile</button>
        <button class="btn btn-primary interest-profile" type="button">Express interest</button>
      </div>
    </div>`;
  article.querySelector('.view-profile').addEventListener('click', () => onView?.(profile));
  article.querySelector('.interest-profile').addEventListener('click', () => onInterest?.(profile));
  article.addEventListener('keydown', event => {
    if (event.key === 'Enter') onView?.(profile);
  });
  return article;
}

export function storyCard(story, onOpen) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'story-card';
  button.innerHTML = `<span class="story-avatar">${escapeHtml(story.initials || story.name?.slice(0, 1) || 'S')}</span><span>${escapeHtml(story.name)}</span>`;
  button.addEventListener('click', () => onOpen?.(story));
  return button;
}

export function emptyState(title, message, actionLabel, action) {
  const el = document.createElement('div');
  el.className = 'empty form-card';
  el.innerHTML = `<div class="empty-icon" aria-hidden="true">⌕</div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(message)}</p>${actionLabel ? `<button class="btn btn-primary empty-action" type="button">${escapeHtml(actionLabel)}</button>` : ''}`;
  if (actionLabel) el.querySelector('.empty-action').addEventListener('click', action);
  return el;
}

export function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
}
