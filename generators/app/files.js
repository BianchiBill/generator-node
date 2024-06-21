const files = [
  { template: "src/index.js.template", destination: "src/index.js" },
  { template: "editorconfig.template", destination: ".editorconfig" },
  {
    template: "eslint.config.json.template",
    destination: ".eslint.config.json"
  },
  { template: "gitignore.template", destination: ".gitignore" },
  { template: "LICENSE.template", destination: "LICENSE" },
  { template: "npmrc.template", destination: ".npmrc" },
  { template: "package.json.template", destination: "package.json" },
  { template: "README.md.template", destination: "README.md" }
];

export default files;
