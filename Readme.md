# Distributed Web Browser based Neural Network Training

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

We have currently built this model to recognize a 28×28 pixel grayscale handwritten digit. It will train the model across multiple connecting client devices, and finally predict the output.

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

## Requirements

1. nvm version -1.1.7
2. npm version - 6.13.4
3. Node version - v12.16.1
4. Tensorflow version - 6.13.4
    - "@tensorflow/tfjs": "^1.7.1"
    - "@tensorflow/tfjs-node": "^1.7.0"

### Procedure 

Install NVM v1.1.7 from online then use the commands:
```sh
1. nvm list available
2. nvm install 12.16.1
3. nvm use 12.16.1
4. npm install --global windows-build-tools (in Admin Powershell) 
```
May have to use a workaround to install windows build tools:
* First - npm install --global windows-build-tools@4.0.0
* Then - npm install --global windows-build-tools

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

Device IP Address: 192.168.2.12
Search on URL: 192.168.2.12:3000

## References

1. https://medium.com/codingthesmartway-com-blog/tensorflow-js-crash-course-machine-learning-for-the-web-handwriting-recognition-febc309b10aa

2. https://codelabs.developers.google.com/codelabs/tensorflowjs-nodejs-codelab/#5

3. https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
   - model = tf.loadLayersModel('https://cors-anywhere.herokuapp.com/https://pctestweb.000webhostapp.com/my-model/model.json');

## Problems

1. Cannot render res.render html pages without view engine. 
   - Solution: res.sendFile(path.resolve(__dirname, 'C:/Users/Vishnu/Desktop/Code/Mini-Project/public/index.html'));