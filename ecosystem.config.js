require("dotenv").config({ path: `./envs/.${process.env.NODE_ENV}.env` });

module.exports = {
  apps: [
    {
      name: "API",
      args: [
       "--color"
      ],
      script: "./index.js",
      instances: process.env.INSTANCES || 0,
      exec_mode: "cluster",
      watch: "../",
      env: {
        ...process.env
      }
    }
  ],
  deploy: {
    production: {
      user: "harrison",
      host: process.env.HOST,
      key: "~/.ssh/id_rsa2",
      ref: "origin/master",
      repo: "git@github.com:KingOfCramers/express-script-handler.git",
      path: "/home/harrison/API",
      "post-deploy": "yarn install && yarn prod"
    }
  }
};
