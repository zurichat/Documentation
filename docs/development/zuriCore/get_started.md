# Zuri Core

`Zuri Core` is the **backbone** of Zuri Chat, it uses the Golang laguage. It is the main backend language of the entire application. It provides all the endpoints for the application.

Here's a quick guide on how to contribute to `Zuri Core`

## Quickstart: 

Visit the repo <https://github.com/zurichat/zc_core>, clone or fork the main branch, create your local environment using the `.envexample`, run the codebase locally with: `go run main.go` or `make run`. If you would prefer to build first, run `go build`.

### How to fork the repo: 

Visit the repo <https://github.com/zurichat/zc_core> on github and click on the fork button at the top right corner of your screen

### How to clone the repo: 

On your Terminal run: 

```bash
git clone https://github.com/zurichat/zc_core.git
```

### Install dependencies: 

The dependencies will automatically be installed when you start the server with `go run main.go` or `make run`. You can also decided to run `go install ./...` or `make install` to install dependencies.

### How to run the app locally/build: 

To run the app locally, install `go` on your laptop and set it up. Go further by setting it up on your code editor. You can set it up on vscode, using go vscode extension. You can google how to set it up on other IDEs

Run `go run main.go` or `make run` to start the server, and `go build -o bin/main main.go` or `make build`, if you need to create a build.

### How to run tests: 

Run `make test.unit` or make `test.integration` to run either unit or integration tests

### Additional resources: 

For additional resources on `git` and `go` you can watch some tutorials on youtube

### Local development: 

While developing locally, you will need to use personalized env data, like mongodb cluster and several others stated in the example env

### Tests that have been setup: 

We currently have tests setup for organization module, auth module, plugin module, and a golang-ci lint test

#### Linting: 

To get started with linting install the golang-ci lint with: 

```bash
go install github.com/golangci/golangci-lint/cmd/golangci-lint@v1.42.1
```

 or `make install_lint` and afterwards you can run the lint with: `golangci-lint run` or `make run`

### Procedures to follow and laws not to break before pushing to make PR: 

When making a PR ensure you adhere to the following:
- Ensure everyone on the team expecially the team lead is aware of what you are working on
- You have pulled from the upstream and resolved all resolving conflicts
- You have ensure that your changes do not affect folders outside it's scope. E.g, when working on auth feature, ensure you make no changes to other modules excpet auth module
- Ensure you work runs properly on your local server
- Ensure your work does not negatively affect another feature
- Ensure you have properly linted your work
- Lastly ensure you are not affecting too many files or making too many changes

### Setup for different operating systems: 

The codebase works the same on all operating systems as long as you have `go` installed.

### Errors: 

Incase of any errors running the codebase while getting started, please contact any member of the team

### Contact

If you have any questions, feel free to contact any of these people:

- Team lead:

  Jubril Aminu

  Email: <jubrilaminu304@gmail.com>

  Slack workspace display name - **@jb**)

  **OR**

- Nwokoye Chigozie Gregory

  Email: <gregoflash05@gmail.com>

  Slack workspace display name - **@grego**)