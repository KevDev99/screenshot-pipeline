const { setup: setupDevServer } = require("jest-dev-server");

module.exports = async function globalSetup() {
  await setupDevServer({
    command: "npm run start",
    launchTimeout: 10000,
    port: 9999,
  });

  // Your global setup
  console.log("globalSetup.js was invoked");
};
