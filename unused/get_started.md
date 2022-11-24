# **GETTING STARTED WITH THE SALES PLUGIN**

# Quickstart

## Forking and Cloning the Repo

​
Fork the repo from (https://github.com/zurichat/zc_plugin_company_sales_prospect) then copy the HTTPS link from your fork which will look like this (https://github.com/{your-github-username}/zc_plugin_company_sales_prospect.git).
Then proceed to your terminal or CMD and clone the repo in a new folder using the git command `git clone ` as a prefix to the copied link
​

# Local development

​

## Running the app locally

​

## React Server

Still in a terminal go to the `frontend/mainApp` directory and then run the following:

```
yarn install
yarn start
```

The server will run on http://localhost:8080/
To actually build run `yarn build`
​

## Django server

​
Create a file called `.env` in the root directory of the cloned repo. <br/>
Then store your SECRET_KEY and DEBUG variables in the file
​

```
SECRET_KEY="<YOUR_SECRET_KEY>" can be any string
DEBUG=1
```

Then run

```
pip install -r requirements.txt (should take a while)
python manage.py migrate
python manage.py runserver
```

The server will run on http://localhost:8200/
​
​

## Fullstack Server

There are 2 root directories, backend and frontend
In the `/frontend/` root directory, the rootApp and mainApp. <br/>
Firstly in `/frontend/rootApp/`<br/>
​

1. Go to `/frontend/rootApp/src/index.ejs`
2. Go to line 33 and change `isLocal` to `!isLocal` PLEASE SWITCH IT BACK BEFORE PUSHING, IT SHOULD BE `isLocal`.
3. Then go back to `/frontend/rootApp/` and run `yarn relocate`
4. Then go to `/frontend/mainApp/` and run `yarn relocate`
5. Then you move to the `/backend/` root directory, run: <br/>
   `python manage.py collectstatic --noinput` <br/>
6. Then run `python manage.py runserver`.
   ​
   ​
   ​
   ​

# Setting Up backend for Windows/Linux/Mac

- [How to install Git on Windows, Linux and macOS](https://www.digitalocean.com/community/tutorials/how-to-contribute-to-open-source-getting-started-with-git)

#### Windows,Linux,Mac

- [How to install django on windows, linux , mac](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/development_environment)
- from the command line
- Install django using 'pip install django'
- Check installed django version 'django-admin --version'

# Laws to follow while contributing (making a PR)

​

1.  Please while in `/frontend/rootApp/src/index.ejs`, it should be `isLocal` not `!isLocal`.
    ​
2.  Every new installation on the backend should be added to the requirements.txt file using the command pip freeze > requirements.txt
    ​
3.  Users must have pulled from upstream to avoid conflicts
    ​
4.  All new views should be documented with doc strings and comments where appropriate
    ​
5.  Always check the source control on the sidebar of your VS-code and other text editors,also the files changed section of your commit/PR before requesting for merge files changed above 6 may not be merged without proper testing
    ​

# Troubleshooting possible errors that may occur

​

1.  SECRET_KEY not set error. This can be solved adding the SECRET_KEY and making sure that the .env file is in the project root like so
    `-backend -frontend -README.md -.env ​`
2.  Error while installing requirements.txt. this means a particular package was not compatible with your system and this can be solved by rooting out the bad install and commenting it out from the requirements.txt
    ​
    ​

# For contact

<br/>
If you need to contact anyone regarding issues you are facing as regards this repository, contact any of this people on the zuri-chat workspace(slack) **@ALASHI , @Khadeeejah , @Josephchinedu**
​
</MDXLayout>

)
};
