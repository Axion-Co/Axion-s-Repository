export function navigate(pageId) {
  const page = document.getElementById(`page-${pageId}`);
  if (!page) return false;
  document.querySelectorAll('.page').forEach(el => el.classList.toggle('active', el === page));
  document.querySelectorAll('[data-nav]').forEach(el => el.classList.toggle('active', el.dataset.nav === pageId));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return true;
}
