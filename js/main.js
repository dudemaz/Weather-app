import { bindUiHandlers } from './ui/handler.js';
async function init() {
  bindUiHandlers();
  try {
  } catch (error) {
    console.error('Failed to initialize application: ' + error.message);
  }
}
init();
