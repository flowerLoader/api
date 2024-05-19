<h1>Flower Loader CLI</h1>

![Static Badge](https://img.shields.io/badge/Language-Typescript_ESM-blue?style=for-the-badge&logo=typescript)

![NPM Downloads](https://img.shields.io/npm/d18m/%40flowerloader%2Fapi?style=for-the-badge&logo=npm)

**Flower Loader** is a Plugin loader and detour manager for Node.js applications. With Flower Loader, you can easily manage and develop Plugins. This repository contains the API definitions and interfaces used by Flower Loader Core. It is built with ESBuild and is source-available under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.

![License](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-yellowgreen?style=for-the-badge&logo=creativecommons)

<h2>Get Involved</h2>

[![Join the Discord](https://img.shields.io/discord/1239786034561028136?color=5865F2&label=Join+The+Discord&logo=discord&style=for-the-badge)](https://discord.gg/kHSEXyawFY)

<h2>Supported Games</h2>

[![Steam](https://img.shields.io/badge/Steam-Creator_Of_Another_World-1b2838?style=for-the-badge&logo=steam)](https://store.steampowered.com/app/2761610/Creator_of_Another_World/)  
by [kuetaro (くえたろう)](https://store.steampowered.com/curator/44822906)

<h2>Table of Contents</h2>

- [Installing](#installing)
  - [From a released version](#from-a-released-version)
  - [From a preview version](#from-a-preview-version)


## Installing
### From a released version
Flower API is already referenced in every plugin cloned from our [Template Plugin](https://github.com/flowerLoader/plugintemplate). Activating it is as simple as running NPM install in the source directory of your plugin.

### From a preview version
First, clone the branch of the preview API with `git clone`. Navigate to your existing Flower API based project and remove the API with `npm remove @flowerloader/api` and then install the local version with `npm install @flowerloader/api /path/to/cloned/repo`. Note that preview version should only be used to _preview_ upcoming features and __not__ in release-ready plugins as preview APIs are subject to rapid, breaking change at Robin's whim.