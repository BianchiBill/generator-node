const files =
{
  vanilla: [
    { template: "js/index.js.template", destination: "src/index.js" },
    { template: "js/run.js.template", destination: "src/run.js" },
    { template: "js/config.js.template", destination: "src/config.js" },
    { template: "js/package.json.template", destination: "package.json" },
    {
      template: "js/eslint.config.js.template",
      destination: "eslint.config.js"
    },
  ],
  typescript: [
    { template: "ts/index.ts.template", destination: "src/index.ts" },
    { template: "ts/run.ts.template", destination: "src/run.ts" },
    { template: "ts/config.ts.template", destination: "src/config.ts" },
    {
      template: "vscode/extensions.json.template",
      destination: ".vscode/extensions.json"
    },
    { template: "ts/tsconfig.json.template", destination: "tsconfig.json" },
    { template: "ts/package.json.template", destination: "package.json" },
    { template: "editorconfig.template", destination: ".editorconfig" },
    {
      template: "ts/eslint.config.js.template",
      destination: "eslint.config.js"
    },
  ],
  common: [
    { template: ".env.template", destination: "src/.env" },
    { template: "gitignore.template", destination: ".gitignore" },
    { template: "LICENSE.template", destination: "LICENSE" },
    { template: "npmrc.template", destination: ".npmrc" },
    { template: "README.md.template", destination: "README.md" },
    {
      template: "vscode/extensions.json.template",
      destination: ".vscode/extensions.json"
    },
    { template: "editorconfig.template", destination: ".editorconfig" },
    { template: ".prettiertc.template", destination: ".prettiertc" },

  ]
};

module.exports = files;
