import { getRecommendedProfiles, getStories, searchProfiles } from '../services/profiles.js';
import { profileCard, storyCard, emptyState } from '../components.js';

export async function initDiscover({ toast, openProfile }) {
  const list = document.getElementById('recommendedList');
  const stories = document.getElementById('stories');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  const renderProfiles = (container, profiles) => {
    container.replaceChildren();
    if (!profiles.length) {
      container.appendChild(emptyState('No matches yet', 'Try a broader search or adjust your preferences.', 'Clear search', () => {
        if (searchInput) searchInput.value = '';
        renderProfiles(container, getRecommendedProfiles());
      }));
      return;
    }
    profiles.forEach(profile => container.appendChild(profileCard(profile, {
      onView: openProfile,
      onInterest: selected => toast(`${selected.name} added to your interests`)
    })));
  };

  const storyData = getStories();
  stories.replaceChildren(...storyData.map(story => storyCard(story, story => toast(`Viewing ${story.name}'s story`))));
  renderProfiles(list, getRecommendedProfiles());

  searchInput?.addEventListener('input', event => {
    const query = event.target.value.trim();
    renderProfiles(searchResults, searchProfiles(query));
  });
}
