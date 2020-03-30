# [Enter Project title]

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

[Enter Project description]

## Background

This project ustilizes the following packages as such:

1. eslint: For code quality
2. nodemon: For automatic rebuilding of files
3. rollup: To bundle the JS files
4. Express: The Node JS server
5. sass: For better control of client side styles
6. Tensorflow: (JS and Node) for client side and server side machine learning

### Folder structure

```sh
.
├── app.js # Startup file for server
├── public # Static files and compiled code dir.
│   ├── images
│   ├── index.html
│   ├── javascripts # Compiled javascript
│   └── stylesheets
│       └── style.scss # Root style sheet
├── routes # API and page routes
│   ├── index.js
│   └── model.js
├── server # Server side code here
│   ├── index.js
│   └── ...Server Components
└── client # Client side code here
    ├── index.js
    ├── config.js # All config values can be stored here
    └── ...client Components
```

The folders metioned above are the only ones that most likely need to be modified for the project. The rest are build scripts or configuration files.

1. public: All static assets reside here. Add HTML pages, styles and images here.
2. routes: For configuring page routes.
3. server: All server side code resides here.
4. client: All client side code resides here.

## Install

To  install the project, clone this repositior and install the dependencies using

```sh
npm install
```

## Usage

To start a development build, run:
```sh
npm run dev
```

This starts the build and runs the server. If any change is made to the files that the build is watching, the server is automatically restarted with the new changes.

To simply run the project, use:

```sh
npm start
```