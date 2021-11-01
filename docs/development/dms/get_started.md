---
title: Zuri Chat DM Plugin
---

## GETTING STARTED

## Quickstart

### Overview

This is a direct message (DM) plugin created to give the users of Zuri chat the ability to send private messages, messages in a group chat and use different functionalities such as emoji's, attach files, directly mention users in a chat, change fonts, use ordered lists, amongst other various functionalities to send messages. This plugin aims to serve the entire Zuri Chat.
    

### Forking And Cloning the Repository

1. Navigate to this repository https://github.com/zurichat/zc_plugin_dm and click on the octa-spoon icon to fork the repo.
2. Once the repo is forked, copy the remote url of the repo by clicking on the button labelled code and clicking the file icon to copy the url.
3. Go to your desktop, open the git bash terminal and clone the repository using: `git clone git clone https://github.com/zurichat/zc_plugin_dm.git`


### Installing Dependencies

#### Frontend
1. Ensure nodejs and git are installed in your machine `node -v && git --version`. If they are not installed, you can follow the guide [here](#setting-up-for-windowslinuxmac) to install.
2. Change directory into the new clone using: `cd dmreactplugin` and `cd dmspa`
3. Install all packages and dependencies using `yarn install`

#### Backend
1. Change directory into the new cloned folder: `cd zc_plugin_dm/backend`
2. Set up your virtual environment by running: `pip install pipenv`
3. Install required modules by running: `pipenv install -r requirements.txt`
4. Set an enviroment by creating a .env file and add the following conifg vars:
 
  `SECRET_KEY=Averyrandomstringthatwillbehardforanyonetoguessevenyou`

  `DEBUG=True`
  
  `EMAIL_HOST_USER=`
  
  `EMAIL_HOST_PASSWORD=`
  
4. Save the file

### Running The App Locally

#### Frontend
1. Run build script to get bundled react file using: `yarn build`
2. Now run server in development mode using:  `yarn start` on both directories
3. Visit `http://localhost:9000/` or `http://localhost:9000/dm`

#### Backend
1. Navigate to the backend folder: `cd zc_plugin_dm/backend `
2. To test development environment, run using: `python manage.py runserver`

### Contribution Guide

1. Open your git bash terminal of your cloned repository and set remote upstream using `git remote add upstream https://github.com/zurichat/zc_plugin_dm.git`.
2. CD into the Directory using: `cd dmreactplugin` and `cd dmspa`
2. Checkout to the development branch by running `git checkout dev`
3. Run `git pull upstream dev` to keep your branch updated with the upstream branch.
4. Create a new branch for the feature you want to work on using `git checkout -b feature-name`
5. After making changes, run `git add .`
6. Commit your changes with a descriptive commit message using : `git commit -m "your descriptive commit message"`.
7. To make sure there are no conflicts, pull from upstream using : `git pull upstream dev`
8. Push changes to your new branch : `git push origin feature-name`
9. Create a pull request to the `dev` branch on the repo on github.

### PR Guide

1. Always check the status of files to be committed using: `git status`
1. The task/purpose of your PR should be clearly stated in its description.
2. Do not touch files beyond the scope of your PR. Fix errors and ensure they are functioning properly before making a PR. **Do not** touch anything beyond your task.
3. If someone else's file/task is preventing yours from running or functioning properly, notify them and communicate properly before making amendments and ensure it doesn't break anything.
4. Ensure to always pull and merge into latest upstream dev branch before making PRs to avoid merge conflicts.
5. Your PR must be reviewed and approved by 2 reviwers before it is merged.

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
| 'python' is not recognized as an internal or external command                           | python executable file is not found in the environment variables. | Add the executable to the environment variables. See guide [here.](https://www.educative.io/edpresso/err-python-is-not-recognized-as-an-internal-or-external-command) |

### Contact

If you have any questions, feel free to contact any of these people:

- Team lead:
  [Mukhtar](https://github.com/mukhtarB)

- Frontend Lead:
  [Benjee](https://github.com/benjamin-bala)

- Backend Lead:
  [ZXenon](https://github.com/zxenonx)
