const path = require('path');

describe('My First Test', () => {
  it('Starts the Electron app', () => {
    // Start the Electron app using a custom task
    cy.task('startElectronApp', {
      env: {
        ELECTRON_RUN_AS_NODE: '1',
        ELECTRON_NO_ATTACH_CONSOLE: '1',
      },
    });

    // Perform your test assertions
    // ...

    // Close the Electron app
    cy.task('stopElectronApp');
  });
});