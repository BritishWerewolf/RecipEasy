# RecipEasy - A Tauri App

I created this app after discovering [Tauri](https://tauri.app).  
A cross platform app, with the backend built using [Rust](https://www.rust-lang.org) and frontend using [Vue](https://vuejs.org) and [TypeScript](https://www.typescriptlang.org).

## Overview

The app allows users to search for recipes by keyword, ingredients, or based on what they have in their pantry.  
A pantry is just a database of items that the user can add to.

It displays the recipe results including title, ingredients, instructions, and nutrition information.

Users can save recipes, create shopping lists based on recipe ingredients, and view cooking timers.

## Usage

### Building the application
To speed up building the app, [Just](https://github.com/casey/just) has been used for task running and build automation.

Below are some commands that can be used:

* `just build dev` - Compiles and runs the dev build.
* `just build prod` - Compiles and runs the production build.
* `just backend [package]` - Install a package to the backend.
    * `just backend-dev [package]` - As above, but installs a dev dependency.
* `just frontend [package]` - Install a package to the frontend.
    * `just frontend-dev [package]` - As above, but installs a dev dependency.

### Adding additional packages

As this app uses Rust and JavaScript, packages can be added using the respective package manager; this was built with [npm](https://www.npmjs.com) and [cargo](https://doc.rust-lang.org/cargo).

JavaScript packages should be installed using the command line, in the root directory of the project.  
Rust packages should be added by navigating to the `src-tauri` directory, where you can run `cargo add [package]`.

## Features

- [ ] Search recipes by keyword or ingredients
- [ ] View recipe details and instructions
- [ ] Save recipes to view later
- [ ] Add ingredients to a digital pantry
- [ ] Create shopping lists from recipe ingredients
- [ ] Use cooking timers and notifications
