---
slug: /chess
sidebar_position: 2
title: Getting started
---

## Chess Plugin Overview
Zuri chesss plugin is a web based recreational and competitive board game that can be played between two players, that can easily be installed and used as part of the Zuri chat main application. Chess plugin is a monolith app with the Backend(Nodejs) and Frontend(JavaScript- React.js). The repo is divided into two major folders; Frontend - which utilizes Single SPA structure, and the Backend.

- Live Link : [https://chess.zuri.chat](https://chess.zuri.chat)
- GitHub repo : [https://github.com/zurichat/zc_plugin_chessboard](https://github.com/zurichat/zc_plugin_chessboard)

### Cloning the Repository

1. Fork this repository https://github.com/zurichat/zc_plugin_chessboard
2. Open a terminal and clone the repository: `git clone https://github.com/zurichat/zc_plugin_chessboard.git`

### Installing Dependencies

1. Ensure nodejs and git are installed in your machine `node -v && git --version`
   If they are not installed, you can follow the guide [here](#setting-up-for-windowslinuxmac) to install.
2. Change directory into the new clone. `cd zc_plugin_chessboard`
3. Switch to the backend directory and install all dependencies using 
    `cd backend`
    `yarn install` or `npm install`
4. Switch to the frontend directory and install all packages using 
    `cd frontend`
    `yarn install` or `npm install`

### How to Run the App Locally

1. Now to run both servers in development mode 
- Run backend server

```
cd server
npm run dev   or   yarn run dev
```

Open http://127.0.0.1:5050/
Open another terminal in vscode and run

```
cd client
npm start   or   yarn start
```
Open http://127.0.0.1:3000/


## Local Development

### Linting

Linting is the automated checking of a source code for programmatic and stylistic errors. This is done by using a lint tool (otherwise known as linter). A lint tool is a basic static code analyzer. Linting is important to reduce errors and improve the overall quality of our code.

For the backend part of this project, the Google code style is used with some minor modifications. A code style is set of conventions (sometimes arbitrary) about how to write code for that project. It is much easier to understand a large codebase when all the code in it is in a consistent style.

### Commit Guide

This plugin uses Commitlint to ensure commits messages follow a particular convention using the conventional config. If you're totally new to this convention, that's totally fine.

> _Commit CheatSheet_

| Type     |                          | Description                                                                                                 |
| -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| feat     | Features                 | A new feature                                                                                               |
| fix      | Bug Fixes                | A bug fix                                                                                                   |
| docs     | Documentation            | Documentation only changes                                                                                  |
| style    | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | Performance Improvements | A code change that improves performance                                                                     |
| test     | Tests                    | Adding missing tests or correcting existing tests                                                           |
| build    | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ci       | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | Chores                   | Other changes that don't modify backend, frontend or test files                                             |
| revert   | Reverts                  | Reverts a previous commit                                                                                   |

> _Sample Commit Messages_

- `chore: Updated README file` := `chore` is used because the commit didn't make any changes to the backend, frontend or test folders in any way.
- `feat: Added plugin info endpoints` := `feat` is used here because the feature was non-existent before the commit.
- `bug: Fixed plugin install endpoints` := `bug` is used here because a fix was done to an already existent feature.

### Contribution Guide

1. Open your cloned repo in your prefered code editor.
2. Open your terminal & set the upstream branch: `git remote add upstream https://github.com/zurichat/zc_plugin_chessboard.git`
3. Pull upstream `git pull upstream dev`
4. Create a new branch for the ticket you're working on e.g.: `git checkout -b <new branch name>`
5. After making changes, run `git add .`
6. Commit your changes with a descriptive commit message : `git commit -m "your commit message"`.
7. To make sure there are no conflicts : `git pull upstream dev`
8. Push changes to your new branch : `git push origin <new branch name>`
9. Create a pull request to the `dev` branch.

### PR Guide

1. Pull request (PR) should clearly state clearly state its purpose/task in the description.
2. PR should only touch files within its scope. **Do not** correct comment typos or change variable names in another file. Fix only what is needed to make your assigned ticket work.
3. Lint your files before making PRs.
4. Always pull and merge into latest upstream dev branch before making PRs to avoid merge conflicts.
5. Your PR must be approved by 2 PR approvers/mergers before it is merged.

### Setting Up for Windows/Linux/Mac

- [How to install Git on Windows, Linux and macOS](https://www.digitalocean.com/community/tutorials/how-to-contribute-to-open-source-getting-started-with-git)

#### Windows

- [How to install node.js](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
- Install yarn using `npm install --global yarn`
- Check installed yarn version `yarn --version`

#### macOS

- [How to install node.js on macOS](https://www.webucator.com/article/how-to-install-nodejs-on-a-mac/)
- Install Yarn using `npm install --global yarn` or `brew install yarn` or `curl -o- -L https://yarnpkg.com/install.sh | bash`
- Check installed yarn version `yarn --version`

#### Linux

- [How to install node.js on Linux PC](https://linuxconfig.org/how-to-install-node-js-on-linux)
- Install yarn using `npm install --global yarn`

  or

- Import the GPG key to verify the yarn packages: `curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`

- Enable the Yarn package manager repository: `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`

- Then install the yarn package manager: `sudo apt update && sudo apt install yarn`

- Check the installed yarn version: `yarn --version`

## Troubleshooting

### Possible Errors and Solutions

| Error                                                                                                                              | Probable Cause         | Solution                                                         |
| :--------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ---------------------------------------------------------------- |
| -bash: git: command not found<br></br>'git' is not recognized as an internal or external command, operable program, or batch file. | Git is not installed.  | Install git. See guide [here.](#setting-up-for-windowslinuxmac)  |
| 'yarn' is not recognized as an internal or external command, operable program or batch file.                                       | yarn is not installed. | Install yarn. See guide [here.](#setting-up-for-windowslinuxmac) |

### Contact

If you have any questions, feel free to contact:

- Team lead:
  [Ndubuisi Jr](https://github.com/NdubuisiJr)
  (Email: ndubuisijrchukuigwe@gmail.com; Slack workspace display name - **@ndubuisijr**)

