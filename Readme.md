![NoMise](/assets/nomise-logo.png)

# NoMise: Your Customizable E-Commerce Store

## Tentative Tech Stack

</br>

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat-square) ![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white&style=flat-square) ![Java](https://img.shields.io/badge/-Java-007396?logo=java&logoColor=white&style=flat-square) ![AWS](https://img.shields.io/badge/-AWS-232F3E?logo=amazon-aws&logoColor=white&style=flat-square) ![Docker](https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white&style=flat-square) ![Kubernetes](https://img.shields.io/badge/-Kubernetes-326CE5?logo=kubernetes&logoColor=white&style=flat-square) ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square) ![REST APIs](https://img.shields.io/badge/-REST_APIs-FF5733?logo=json&logoColor=white&style=flat-square)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
- [Run on local machine](#run-on-local-machine)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is going to be a no-code store where our final goal is to make a customizable store where people can build their own by dragging and dropping the components.

## Features

As of now, features will be mentioned in issues that you can see and start working on.

## Usage

You can use this product as your E-Commerce Store where you'll get a lot of features. Some of the tentative main features are:

- Drag and drop the components (no-code)
- Admin dashboard (track your sales)
- Payment integration
- Catalogue and videos feature and more....

## Run on local machine

### Dependencies

To get started with the AlphaDecodeX/NoMise_Store project, please make sure you have the following installed on your system.
- [Node.js](https://nodejs.org) (v12 or higher)
- [pnpm](https://pnpm.io/installation) (v6 or higher)

To check whether Node.js and pnpm is installed in your system, run the following commands in your terminal or command line.
```sh
$ node --version
$ pnpm --version
```  

* If node/pnpm is already installed in your system, it will show the version number after you run the above commands. Please make sure you meet the version requirements.
* If it doesn't show version number, you have to install it from the above [links.](#required)

### Setup
Once you have the dependencies installed, you can follow these steps to run this project locally.

1. Get the project to your local machine via cloning or downloading the project.
  - Option 1:
    -Clone this repository to your local machine
    ```sh
    $ git clone https://github.com/AlphaDecodeX/NoMise_Store.git
    $ cd NoMise_Store
    ```
  - Option 2:
    - Download source code from [this link](https://github.com/AlphaDecodeX/NoMise_Store/archive/refs/heads/master.zip)
    - Extract the downloaded zip file
    - Open a terminal from the extracted folder.

2. Install the project dependencies inside the project folder.
  ```sh
  $ pnpm install
  ```

3. Start the development server
  ```sh
  $ pnpm dev
  ```
#Troubleshooting : (Error :running script is disabled on the system)
```sh
 1.search for powershell.

 2.right click and run as administration.

 3.run this simple command Set-ExecutionPolicy RemoteSigned.

 4.Press A And Enter.

```

4. Open the url which is shown in the terminal. [http://localhost:5173](http://localhost:5173) in the following example
    ![Development server](/assets/devServerScreenshot.jpg)

## Contributing

This project has been started while keeping beginners in focus. You will receive a detailed blog each time on the progress of the project and how it is going. Blogs will be much detailed on how and what are the changes made. It would be beginner-friendly, keeping in mind learning open-source and enterprise-level software development.

- [contributing.md](contributing.md)

- [Detailed Blogs on Whats and Hows of building NoMise, Beginner Friendly](Blogs.md)

- Contribute to Backend:-
  - [Inventory Service](https://github.com/AlphaDecodeX/nomise_inventory)

## License

This project is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.

This license allows others to share and adapt the work for non-commercial purposes, as long as they give appropriate credit and license their new creations under the same terms. For more information, please see the [License.md](LICENSE.md).
