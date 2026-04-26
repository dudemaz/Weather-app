import { domEl } from './dom/domel.js';
import { renderData, getUserLocation } from './render.js';
export function bindUiHandlers() {
  domEl.searchButton.addEventListener('click', renderData);
  window.addEventListener('load', getUserLocation);
}
