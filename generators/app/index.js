"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");

const files = require("./files");

module.exports = class extends Generator {
  prompting() {
    this.log(chalk.green("Bianchi Node Project Generator"));
    this.log(chalk.green("Made by Rafael 'Bill' Bianchi"));
    this.log();

    const prompts = [
      {
        type: "input",
        name: "project",
        message: "Name of your project",
        default: this.appname
      },
      {
        type: "input",
        name: "description",
        message: "Description of your project?",
        default: "This project aim to..."
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
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.log(chalk.green("Generating project..."));
    this.log(chalk.green("Please Wait..."));
    this.log();

    const { project, description, name, email, username } = this.props;

    const templates = {
      project,
      description,
      name,
      email,
      username,
      year: new Date().getFullYear()
    };

    files.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(file.template),
        this.destinationPath(file.destination),
        templates
      );
    });
  }

  // Install() {
  //   this.installDependencies();
  // }
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
      { dev: true }
    );
  }

  end() {
    this.log();
    this.log("🎉  Successfully generated!");
  }
};
