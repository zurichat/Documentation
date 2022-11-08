# Get Started

**This plugin is built with React and Node JS**

Make sure you have nodejs and yarn installed by running the following command:

```bash
node -v
yarn -v
```

> If you do not have node installed, install nodejs suitable for your operating system from [here](https://nodejs.org/en/download/)

> If your node version is less than v14, you would need to update it.

> If you do not have yarn installed on your local machine;

**For windows OS** run `npm i -g yarn` in your terminal to install it.
**For Mac OS** run `brew install yarn` make sure you have [Homebrew] (https://tecadmin.net/install-homebrew-macos/) installed

## How to fork and clone the repo

To fork the repo, go to [https://github.com/zurichat/zc_plugin_company_goals] (https://github.com/zurichat/zc_plugin_company_goals), click on the **fork** button to fork the repo. Clone your forked repo in a terminal, say git bash or any other terminal run `git clone https://github.com/yourusername/zc_plugin_company_goals.git`

After cloning the project on your local machine, create new branch for your task, then set the original repo as upstream. Like this; `git remote add upstream https://github.com/zurichat/zc_plugin_company_goals`

## Install dependencies

In the IDE of your choice, run `yarn install` in the root folder of the project to install dependencies
cd into the serve-client folder, run `yarn install` to install dependencies in the folder
cd into the client folder, run `yarn install` to install dependencies in the folder

## How to run the app locally/ build

**Run the frontend development server using either of the following commands from the root folder:**
In your IDE terminal run;

```
npm run client:dev
# or
yarn run client:dev
```

Open [http://localhost:9000](http://localhost:9000) in your browser to see the result.

**Run the backend development server using either of the following commands:**

In your IDE terminal run;

```
npm run server
# or
yarn run server
```

## How to run test

## Additional resources

Get familiar with [MUI](https://mui.com/getting-started/usage/), the world's most popular React UI framework. It's used with [styled-components](https://styled-components.com/) for styling.

## Local development

Work only in the folder you're creating/updating components in, changes immediately reflect on [http://localhost:9000](http://localhost:9000) so you can see you work.

## PR Guidelines

**Ensure your branch name is descriptive enought to tell the PR reviewer what you worked on.**

> Before you start working, be sure to pull from the upstream dev branch `git pull upstream dev`

> When you're making commits, ensure your commit message is as descriptive as possible.

> Pull from the upstream dev branch again before you push your commit(s) to your branch on github to avoid merge conflicts.

> After pushing your changes to your branch on github, create a pull request, ensure the **dev** branch is the base branch you're making the pull request to else your PR won't be merged.
