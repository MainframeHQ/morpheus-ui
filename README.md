# Morpheus UI - By Mainframe

A React UI Library designed by Mainframe

## Collection

This library contains 4 packages:

@morpheus-ui/core - Set of UI Components
@morpheus-ui/fonts - Fonts used by Morpheus UI
@morpheus-ui/forms - Used by Morpheus UI to add a form context to some UI components
@morpheus-ui/icons - Collection of Icon Components designed by Mainframe


## Development Overview

This library contains a set of UI/UX components used to build Mainframe dApps

In order to make it easier to share code among packages, this project uses [lerna](https://lernajs.io/). Whenever code changes, it's expected that you run `yarn build` from the root of the project directory, and it will kick off the necessary `lerna` build processes in the package folders.

## Getting Started

Each package contains (or will contain) a readme with further information pertaining to setup. A shortcut guide is as follows:

In the root of the project, install node dependencies:

```
yarn bootstrap
yarn build
```

## Run Demo

```
yarn start
```
