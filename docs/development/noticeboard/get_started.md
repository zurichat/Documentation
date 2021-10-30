# GETTING STARTED

## Quickstart

## Cloning the Repository

1. Fork this repository https://github.com/zurichat/zc_plugin_noticeboard.
2. Open a terminal and clone the repository: `git clone https://github.com/your_username/zc_plugin_noticeboard.git`

## Installing Dependencies

Ensure python, nodejs and git are installed in your machine by running `python --version && git --version && node -v` in your terminal. If they are not installed, you can follow the guide [here](#setting-up-for-windowslinuxmac) to install.

### Backend
1. Change directory into the new cloned folder: `cd ./zc_plugin_noticeboard/backend/`
2. Set up your virtual environment by running: `python -m venv env`
3. Activate your virtual environment by running: `env\Scripts\activate`
4. Navigate to the `notice_project` directory and install the dependencies: `pip install -r requirements.txt`
5. Add the precommit to the git folder: `pre-commit install`

### Frontend
1. Change directory into the new cloned folder: `cd ./zc_plugin_noticeboard/backend/notice_project/frontend/`
2. Run this in the terminal to install all dependencies: `yarn`

## How to Run the App Locally

### Backend
1. Navigate to the backend folder: `cd ./zc_plugin_noticeboard/backend/`  
2. Now run server in development mode with `python manage.py runserver`  
3. Visit http://localhost:8000/

### Frontend
1. Navigate to the frontend folder: `cd ./zc_plugin_noticeboard/backend/notice_project/frontend/`  
2. Run the command `yarn start` to run in integrated mode or `yarn start:standalone` to run in standalone.

## Local Development

### Linting

Linting is the automated checking of a source code for programmatic and stylistic errors. This is done by using a lint tool (otherwise known as linter). A lint tool is a basic static code analyzer. Linting is important to reduce errors and improve the overall quality of our code.

For the backend part of this project, Pylint is used for linting and Black for formatting the code. A code style is set of conventions (sometimes arbitrary) about how to write code for that project. It is much easier to understand a large codebase when all the code in it is in a consistent style.

The Pylint and Black can be found in the precommit file for the project.

### Contribution Guide

1. Open your cloned repo in your prefered code editor.
2. Add the remote upstream: `git remote add upstream https://github.com/zurichat/zc_plugin_noticeboard.git`  
3. Create a development branch `git checkout -b development` or `git checkout development` if you already have one.
4. Get the latest code from the upstream: `git pull upstream development`
5. When you are done add your changed files to the staging area: `git add .`
6. Commit your changes: `git commit -m 'what changes you made and why'`
7. Pull from upstream again to avoid conflicts when mergin `git pull upstream development`
8. Push your changes to your remote repo: `git push origin development`
9. Create a pull request to the `development` branch.

### PR Guide

1. Pull request (PR) should clearly state clearly state its purpose/task in the description.
2. PR should only touch files within its scope. **Do not** correct comment typos or change variable names in another file. Fix only what is needed to make things work.
3. Lint your files before making PRs.
4. Always pull and merge into latest upstream dev branch before making PRs to avoid merge conflicts.
5. Your PR must be approved by 2 PR approvers/mergers before it is merged.  

### Setting Up for Windows/Linux/Mac

- [How to install Git on Windows, Linux and macOS](https://www.digitalocean.com/community/tutorials/how-to-contribute-to-open-source-getting-started-with-git)
- [How to install Python on Windows, Linux and macOS](https://realpython.com/lessons/how-install-python-your-computer/)

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
| Python is not recognized as an internal or external command                                       | python executable file is not found in the environment variables. | Add the executable to the environment variables. See guide [here.](https://www.educative.io/edpresso/err-python-is-not-recognized-as-an-internal-or-external-command) |

### Contact

If you have any questions, feel free to contact any of these people:
- Frontend Lead:
  [Someone](https://github.com/someone)
  (Email: someone@gmail.com; Slack workspace display name - **@someone**)  
- Backend Lead:
  [Someone](https://github.com/someone)
  (Email: someone@gmail.com; Slack workspace display name - **@someone**)