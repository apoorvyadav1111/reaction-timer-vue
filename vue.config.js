const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: ["*.csb.app"], // <  Copy and paste the domain from the URL Codebox provides for your runtime here
  },
});
