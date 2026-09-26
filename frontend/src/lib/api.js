const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1';

async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: response.statusText }));
    throw new Error(error.detail || `Request failed with status ${response.status}`);
  }

  return response.json();
}

export async function getHealth() {
  return fetchJson(`${API_BASE_URL}/health`);
}

export async function getPortfolio() {
  return fetchJson(`${API_BASE_URL}/portfolio`);
}

export async function submitContact(data) {
  return fetchJson(`${API_BASE_URL}/contact`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
