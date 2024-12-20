const files = [
  { template: "src/index.js.template", destination: "src/index.js" },
  { template: "src/run.js.template", destination: "src/run.js" },
  { template: "src/config.js.template", destination: "src/config.js" },
  { template: "src/.env.template", destination: "src/.env" },
  {
    template: "vscode/extensions.json.template",
    destination: ".vscode/extensions.json"
  },
  { template: "editorconfig.template", destination: ".editorconfig" },
  {
    template: "eslint.config.js.template",
    destination: "eslint.config.js"
  },
  { template: "gitignore.template", destination: ".gitignore" },
  { template: "LICENSE.template", destination: "LICENSE" },
  { template: "npmrc.template", destination: ".npmrc" },
  { template: "package.json.template", destination: "package.json" },
  { template: "README.md.template", destination: "README.md" }
];

module.exports = files;
