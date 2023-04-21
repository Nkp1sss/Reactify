// import { defineConfig } from 'cypress';

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       require('@cypress/code-coverage/task')(on, config);
//       // implement node event listeners here
//       return config;
//     },
//     baseUrl: 'http://localhost:5173',
//   },
//   video: false,
// });

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      // implement node event listeners here
      return config;
    },
    baseUrl: 'http://localhost:5173',
  },
  video: false,
};
