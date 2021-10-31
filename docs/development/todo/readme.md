---
slug: /todo
sidebar_position: 12
title: Todo Plugin
---

## TODO PLUGIN DEVELOPER ON-BOARDING OVERVIEW
Zuri Todo plugin is a web based project management system that can be used by organizations and for personal use. This is a part of Zuri Chat. Todo plugin is a monolith app with the Backend(PHP-Laravel) and Frontend(JavaScript-Vue.js). The repo is divided into two major folders; Frontend - which is done in Single SPA, and the Backend.

- Live Link : [https://zuri.chat/todo#/](https://zuri.chat/todo#/)
- GitHub repo : [https://github.com/zurichat/zc_plugin_todo](https://github.com/zurichat/zc_plugin_todo)

### TABLE OF CONTENT : Quick reference

- [TODO PLUGIN DEVELOPER ON-BOARDING OVERVIEW](#todo-plugin-developer-on-boarding-overview)
    - [TABLE OF CONTENT: Quick reference](#table-of-content-quick-reference)
    - [Get Started](#get-started)
    - [Running Todo Plugin Locally on Windows OS](#running-todo-plugin-locally-on-windows-os)
         - [For Backend](#for-backend)
         - [For Frontend](#for-frontend)
    - [Running Todo Plugin Locally on Linux OS](#running-todo-plugin-locally-on-linux-os)
        - [For Backend](#for-backend)
        - [For Frontend](#for-frontend)
    - [Running Todo Plugin Locally on macOS](#running-todo-plugin-locally-on-macos)
        - [For Backend](#for-backend)
        - [For Frontend](#for-frontend)

 ### Get Started
 As a new develoer about to work on this project, you first have to fork and clone the GitHub Repo  [https://github.com/zurichat/zc_plugin_todo](https://github.com/zurichat/zc_plugin_todo)

### Running Todo Plugin Locally On Windows OS
#### For Backend
First, Fork and clone the GitHub on your local computer. Open powershell or git bash and run the following commands
```bash
cd zc_plugin_todo

composer install
```
This would generate the needed files to run on local machine, to serve the application run
```bash
php artisan serve
```
This serves on a port 8080.

#### For Frontend
After forking and cloning the GitHub, run it on VS code, then run windows powershell or Git bash. Run the following comands
```bash
cd frontend
```
then; 
```bash
yarn install
```
when yarn is done installing, you run this command
```bash
yarn serve
```
while this is running, create another git bash and run;
This is done because the frontend is a microfrontend so the config folder must be set up too

```bash
cd Config
```
then;
```bash
yarn install
```
when it's done, run
```bash
yarn serve
```
The project will now on port 9000.


### Running Todo Plugin Locally on Linux OS
#### For Backend
 First, Fork and clone the GitHub on your local computer. Open terminal and run the following commands
```bash
cd zc_plugin_todo

composer install
```
This would generate the needed files to run on local machine, to serve the application run
```bash
php artisan serve
```
This serves on a port 8080.

#### For Frontend
After forking and cloning the GitHub, run it on VS code, then run terminal. Run the following comands
```bash
cd frontend
```
then; 
```bash
yarn install
```
when yarn is done installing, you run this command
```bash
yarn serve
```
while this is running, create another git bash and run;
This is done because the frontend is a microfrontend so the config folder must be set up too

```bash
cd Config
```
then;
```bash
yarn install
```
when it's done, run
```bash
yarn serve
```
The project will now on port 9000.


### Running Todo Plugin Locally on macOS
#### For Backend
 First, Fork and clone the GitHub on your local computer. Open terminal and run the following commands
```bash
cd zc_plugin_todo

composer install
```
This would generate the needed files to run on local machine, to serve the application run
```bash
php artisan serve
```
This serves on a port 8080.

#### For Frontend
After forking and cloning the GitHub, run it on VS code, then run terminal. Run the following comands
```bash
cd frontend
```
then; 
```bash
yarn install
```
when yarn is done installing, you run this command
```bash
yarn serve
```
while this is running, create another git bash and run;
This is done because the frontend is a microfrontend so the config folder must be set up too

```bash
cd Config
```
then;
```bash
yarn install
```
when it's done, run
```bash
yarn serve
```
The project will now on port 9000.