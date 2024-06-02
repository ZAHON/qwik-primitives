import { addQwikLoader } from 'cypress-ct-qwik';
import 'cypress-real-events';

addQwikLoader();

import './commands';

import { mount } from 'cypress-ct-qwik';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);
