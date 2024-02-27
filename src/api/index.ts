const RESOURCE_URL = '/public/response.json';

export function fetchText() {
  return fetch(RESOURCE_URL);
}
