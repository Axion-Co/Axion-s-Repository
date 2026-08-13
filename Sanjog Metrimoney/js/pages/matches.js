import { profiles } from '../../mock/profiles.js';
import { escapeHtml } from '../components.js';

export function renderMatches({ toast, onChat } = {}) {
  const page = document.getElementById('page-matches');
  if (!page) return;
  const pending = profiles.slice(0, 2);
  const mutual = profiles.slice(1, 3);
  page.innerHTML = `<div class="matches-page"><div class="matches-header"><div><p class="eyebrow">Your connections</p><h1>Matches</h1><p>People where interest and compatibility can grow into a meaningful connection.</p></div></div><div class="match-tabs" role="tablist"><button class="match-tab active" data-tab="mutual" role="tab">Matches <span>${mutual.length}</span></button><button class="match-tab" data-tab="pending" role="tab">Pending <span>${pending.length}</span></button></div><section class="match-panel" data-panel="mutual"><div class="match-list">${mutual.map(matchCard).join('')}</div></section><section class="match-panel hidden" data-panel="pending"><div class="match-list">${pending.map(matchCard).join('')}</div></section></div>`;
  page.querySelectorAll('.match-tab').forEach(tab => tab.addEventListener('click', () => { page.querySelectorAll('.match-tab').forEach(t=>t.classList.remove('active')); page.querySelectorAll('.match-panel').forEach(p=>p.classList.add('hidden')); tab.classList.add('active'); page.querySelector(`[data-panel="${tab.dataset.tab}"]`).classList.remove('hidden'); }));
  page.querySelectorAll('[data-match-action="chat"]').forEach(btn => btn.addEventListener('click', () => onChat?.(btn.dataset.id)));
  page.querySelectorAll('[data-match-action="remove"]').forEach(btn => btn.addEventListener('click', () => { btn.closest('.match-card').remove(); toast?.('Connection removed from this list'); }));
}

function matchCard(profile) {
  return `<article class="match-card"><div class="match-avatar">${escapeHtml(profile.initials)}</div><div class="match-info"><div class="match-title"><h2>${escapeHtml(profile.name)}</h2>${profile.verified?'<span class="verified">✓</span>':''}</div><p>${escapeHtml(profile.age)} · ${escapeHtml(profile.location)}</p><div class="profile-tags">${(profile.preferences||[]).slice(0,2).map(x=>`<span>${escapeHtml(x)}</span>`).join('')}</div></div><div class="match-actions"><button class="btn btn-primary" data-match-action="chat" data-id="${escapeHtml(profile.id)}">Message</button><button class="btn btn-secondary" data-match-action="remove" data-id="${escapeHtml(profile.id)}">Remove</button></div></article>`;
}
