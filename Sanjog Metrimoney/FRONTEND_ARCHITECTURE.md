# Sanjog Frontend Architecture

## Direction

Sanjog is being developed frontend-first. Backend, database, authentication, storage, and messaging infrastructure will be connected later through service boundaries.

## Layers

UI -> Pages/Components -> Services -> Mock Data (now) -> API/Backend (later)

## Frontend priorities

1. Preserve and improve the current Sanjog visual identity.
2. Separate structure, styling, components, page logic, state, and data services.
3. Keep all backend-facing behavior behind service interfaces.
4. Use mock data while the frontend is being completed.
5. Build loading, empty, error, validation, accessibility, and responsive states.
6. Do not place secrets or database credentials in frontend code.

## Planned structure

- `index.html` — application shell
- `css/` — base, components, pages, responsive styles
- `js/app.js` — application bootstrap
- `js/router.js` — client-side navigation
- `js/state.js` — frontend state
- `js/components/` — reusable UI components
- `js/pages/` — page-level UI and behavior
- `js/services/` — backend-ready service interfaces
- `mock/` — temporary frontend data

## Service boundaries

Services will expose frontend-friendly methods such as:

- `auth.getCurrentUser()`
- `profiles.getRecommended()`
- `profiles.getById(id)`
- `profiles.update(profile)`
- `matches.getMatches()`
- `messages.getConversations()`
- `messages.getMessages(conversationId)`
- `notifications.getNotifications()`

During frontend development these methods use mock data. Later they can be switched to API calls without rebuilding the UI.

## Scope

This phase intentionally does not implement a production database or backend. The goal is a polished, responsive, accessible frontend with clean integration points for the future platform services.
