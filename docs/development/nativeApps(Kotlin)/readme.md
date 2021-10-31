# Zuri Chat Native Application

# Quickstart

# Overview

Zuri Chat is an open source slack clone. However, it offers a lot more functionality via a plugin system where each room can be provided by a different plugin provider.

This is Zuri Chat Native Android Application written with pure Kotlin.

Kotlin is a modern statically typed programming language used by over 60% of professional Android developers that helps boost productivity, developer satisfaction, and code safety.

# How to Contribute to Zuri Chat Native Application
```want to contribute ?  Follow the procedures below: ```

**Forking and Cloning the repository**
- Fork the repository
- click on **Code** button on your forked repo and copy the URL.
- go to your terminal or code editor.
- clone your forked repository `git clone "https://github.com/[your_github_username]/zc_app_android.git"`

**Setting and Pulling Upstream**
- Add remote upstream using the command `git remote add upstream "https://github.com/zurichat/zc_app_android.git"`
-  pull from develop to be updated using the command `git pull upstream develop`
-  Merge updates from upstream using `git merge upstream/develop`

**Adding Commits**
- Create a new branch with your task name e.g "feat- implement user log-in".
- Checkout from the current branch ad create a new branch by using the comand `git checkout -b feat/user-login`
- `git add .`
- `git commit -m "feat: implemented user login"`


**Commit Message Format**
- For a feature:` git commit -m "feat: implemented user log-in"`
- For a bug: `git commit -m "bug: fixed inconsistency in log in screen"`
- For a chore: `git commit -m "chore: updated read me to include API endpoints"`

**Push New Branch**
- `git pull upstream develop` to get the update copy on your machine in other to avoid conflicts.
- Push your branch by using the command `git push origin feat/user-login`

**Creating Pull Request**
- What is the feature/bug/issue completed ?
- What the PR actually does ?
- How can this PR be manually tested ?
- Any background contexts ? (maybe something a tester might not notice and be useful for testing)
- Screenshots (of your implementation - a web page, a mobile app screen or an API payload.
- For Fragments, use the already created delegate function viewBinding() to use viewBinding.


# How to run the app locally/build
# How to run tests
# Additional Resources
# Local development
# Tests that have been setup