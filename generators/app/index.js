"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");

const files = require("./files");

module.exports = class extends Generator {
  async prompting() {
    this.log(chalk.green("Bianchi Node Project Generator"));
    this.log(chalk.green("Made by Rafael 'Bill' Bianchi"));
    this.log();

    const prompts = [
      {
        type: "input",
        name: "project",
        message: "Name of your project",
        default: this.appname.replace(' ', '-')
      },
      {
        type: "input",
        name: "description",
        message: "Description of your project?",
        default: "This project aim to..."
      },
      {
        type: "list",
        name: "type",
        message: "Type? (module or commonjs)",
        choices: ["module", "commonjs"],
        default: "module",
        store: true
      },
      {
        type: "confirm",
        name: "privated",
        message: "Private?",
        default: false,
        store: true
      },
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        default: this.name,
        store: true
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
        default: this.email,
        store: true
      },
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        default: this.username,
        store: true
      },
      {
        type: "confirm",
        name: "config",
        message: "Create .env config file?",
        choices: ["Yes", "No"],
        default: true,
        store: true
      }
    ];

    const props = await this.prompt(prompts);
    this.props = props;
  }

  writing() {
    this.log(chalk.green("Generating project..."));
    this.log(chalk.green("Please Wait..."));
    this.log();

    const {
      project,
      description,
      name,
      email,
      username,
      type,
      privated,
      config
    } = this.props;

    const templates = {
      project,
      description,
      name,
      email,
      username,
      type,
      privated,
      year: new Date().getFullYear()
    };

    files.forEach(file => {
      if ((file.template === 'env.template' || file.template === 'config.js.template') && !config) {
        return;
      }

      this.fs.copyTpl(
        this.templatePath(file.template),
        this.destinationPath(file.destination),
        templates
      );
    });
  }

  install() {
    this.log();
    this.log("📦  Installing dependencies...");
    this.log();

    this.yarnInstall(
      [
        "@eslint/js",
        "@stylistic/eslint-plugin-js",
        "@types/eslint__js",
        "eslint",
        "eslint-config-prettier",
        "nodemon"
      ],
      { dev: true },
    );

    this.yarnInstall(["dotenv"], { dev: false });
  }

  end() {
    this.fs.delete(".yo-rc.json");

    this.log();
    this.log("Successfully generated!");
  }
};
