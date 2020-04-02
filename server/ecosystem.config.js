require("dotenv").config({ path: `./envs/.${process.env.NODE_ENV}.env` });
const path = require("path");

//console.log(__dirname);

module.exports = {
  apps: [
    {
      name: "API",
      args: [
       "--color"
      ],
      interpreter: process.env.NODE_PATH, 
      script: path.resolve(__dirname, "index.js"),
      instances: process.env.INSTANCES || 0,
      exec_mode: "cluster",
      watch: true,
      ignore_watch: ["logs/*", "node_modules/*", "frontend/node_modules/*"],
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
    "post-deploy": "yarn install --ignore-engines && yarn prod && cd frontend && yarn install --ignore-engines && yarn prod:build"
    }
  }
};