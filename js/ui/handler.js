import { domEl } from './dom/domel.js';
import { renderData } from './render.js';
export function bindUiHandlers() {
  domEl.searchButton.addEventListener('click', renderData);
}
