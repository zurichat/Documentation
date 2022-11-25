---
---

# Zuri Main Contribution Guide

## QuickStart

To get started with contributing to this repo,

1. First of you need to fork the repo at [Zuriman](https://github.com/zurichat/zc_main)

2. Clone it to your local machine with the following command:

```
    git clone https://github.com/<your-username>/zc_main
```

3. Run `yarn install` in the root folder to install all the dependencies for this project, make sure you have the latest version of [Node](https://www.nodejs.org) and [Yarn](https://www.yarn.org) installed

4. Then run `yarn dev` to run the app locally, the app should be available on port `9000` of your local machine

<!-- 5. To run tests:  -->

5. Extra Information

   1. Building

   ```
   yarn build
   ```

   2. To remove dist folder

   ```
   yarn clean
   ```

   3. To remove all node_modules

   ```
   yarn clean-fresh
   ```

   4. We're using eslint for js linting, and prettier for code formatting, make sure you install [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugins in your editor so you can see linting errors as you code and have your code formatted on save by prettier. If formatOnSave doesn't work please google how to set up format on save for the eslint & prettier plugins in your editor 🙃

6. Additional resources
   1. Nodejs - https://www.nodejs.org
   2. Yarn - https://yarnpkg.com/
   3. eslint for vscode - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
   4. Git - https://git-scm.com/downloads
   5. Prettier vscode - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
   6. [STYLING GUIDE](https://github.com/zurichat/zc_main/blob/dev/docs/STYLING.md)
   7. [CONTRIBUTION GUIDE](https://github.com/zurichat/zc_main/blob/dev/docs/CONTRIBUTING.md)

## Local Development

<!-- 1. Tests that have been setup  -->

1. Procedures to follow and laws not to break before making a PR

   ### Before send PR or making a merge make sure you code is properly formatted. You can easily do that by running

   ```
   yarn lint # to lint all files # in project directory
   yarn lint:js # to lint only js,jsx files # in project directory

   yarn prettify # to prettify files # in project directory
   ```

   you can also lint for all files in the repo by running that command in the root folder.

<!-- 3. Guides on how to make PRs specific to this repo -->

<!-- 4. Setup for different operating systems if any difference be -->

## Troubleshooting

<!-- 1. Possible errors that may happen and solutions to each problem -->

2. Who or where to go incase of certain errors
   1. `@Obifortune` on the ZuriChat Slack workspace
   2. `@Pidoxy` on the ZuriChat Slack workspace

### This documentation was written by [lekandev](https://lekan.vercel.app) 🙂
