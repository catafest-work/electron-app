const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

module.exports = {
  ...(on, config) => {
    on("task", {
      startElectronApp(options) {
        // Start the Electron app
        const { execSync } = require("child_process");
        execSync("npm start", {
          env: {
            ...process.env,
            ...options.env,
          },
        });

        return null;
      },
    });
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
