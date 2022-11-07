# Website

Zuri Chat is an open source slack clone. However, it offers a lot more functionality via a plugin system where each room can be provided by a different plugin provider.

Our API is organised around using HTTP verbs and REST. Our API accepts and returns JSON formatted payload.

### Hosted URL

[https://docs.zuri.chat](https://docs.zuri.chat)

### Project Setup & Contribution Guide:

- Fork this REPO
- Clone the repo from your account to your local PC

```bash
git clone https://github.com/YOUR_USERNAME/documention.git
```

- Make your contribution.
- Make a PR!

# DOCUMENTATION

This is the Zuri Chat Frontend built with [React](https://reactjs.org/) (Frontend)

## Getting Started.

Make sure you have nodejs installed by running the following command:

```bash
node -v
```

If the output is not the version of your nodejs installation, install nodejs from [here](https://nodejs.org/en/download/)

After installing nodejs install [yarn](https://www.npmjs.com/package/yarn)
if you have it then install the project's dependencies:

```bash
yarn install
```

## STARTING THE SERVER

To start the whole application server

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### **Building**

```bash
yarn build
```

To deploy to staging server

```bash
yarn deploy
```

To remove dist folder

```bash
yarn clean
```

To remove all node_modules

```bash
yarn clean-fresh
```

## Editor setup

We're using eslint for js linting, and prettier for code formatting, make sure you install eslint and prettier plugins in your editor so you can
see linting errors as you code and have your code formatted on save by prettier. If formatOnSave doesn't work please google how to set up
format on save for the eslint & prettier plugins in your editor 🙃

## Contributing

For detailed information on how to go about contributing to this project. Check out the

- [Contribution Guide](docs/CONTRIBUTING.md)

**Before send PR or making a merge make sure you code is properly formatted.** You can easily do that by running

```bash
yarn lint # to lint all files # in project directory
yarn lint:js # to lint only js,jsx files # in project directory

yarn prettify # to prettify files # in project directory
```

you can also lint for all files in the repo by running that command in the root folder.
