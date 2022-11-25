---
sidebar_position: 1
slug: /plug-in/how-to-build-a-plugin
title: How to build a plugin
---

# How to build a plugin

## Introduction to Zuri Chat Plugin

Zuri Chat software Plugin is a standalone application with full fledged fuctionalites that is unique to the plugin. It can either create, fetch or delete data from it's own configured database ( from a core system) with the use of an application programming interface(API).

## Zuri Chat Plugin system

Adding specific features to Zuri Chat is achieved with the zuri chat plugins. Zuri Chat is a software with microservice archtecture, its features are connected in a plugin form.

## Zuri Chat plugins

- Chess Plugin
- Music Plugin
- DM Chat Plugin
- Todo Plugin
- Channels Plugin
- NoticeBoard Plugin
- Company Goals Plugin
- Sales CRM PLugin

## Features a plugin must have

- A plugin must have a dashboard.
- A plugin must have a side bar.
- It must have create, read, update and delete functionalities.
- A plugin can have rooms in their sidebars, this is not a compulsory feature. E.g. Chat apps can have rooms while some plugins might not need to have rooms. This feature is dependent on the plugin structure.
- A plugin must have either a local or external database which its connected to.
- A plugin can be downloaded and attched to other core softwares (E.g. Microservice system)
- A plugin can be deleted, downlaoded and installed to the core system.

## steps for building a Plugin

- Create a database (zuri Chat database)
- Create fields for data acceptance
- Create Endpoints ( url which users can visit).
