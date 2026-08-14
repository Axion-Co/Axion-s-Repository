import { profiles } from '../../mock/profiles.js';

export const profileService = {
  async getRecommended() { return profiles.filter(profile => profile.verified); },
  async search(query = '') {
    const q = query.trim().toLowerCase();
    if (!q) return profiles;
    return profiles.filter(profile => Object.values(profile).join(' ').toLowerCase().includes(q));
  },
  async getById(id) { return profiles.find(profile => profile.id === id) ?? null; },
  async update(profile) { return { ...profile, updatedAt: new Date().toISOString() }; }
};

// Future adapter point: replace mock reads/writes with API calls without changing the UI.
