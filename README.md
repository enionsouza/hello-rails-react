<p align="center">
  <a href="https://www.microverse.org/">
    <img alt="Microverse" src="https://img.shields.io/badge/-Microverse-blueviolet?style=flat-square">
  </a>
  <a href="https://github.com/enionsouza/hello-rails-react">
    <img alt="GitHub last commit (branch)" src="https://img.shields.io/github/last-commit/enionsouza/hello-rails-react/develop?color=blue&style=flat-square">
  </a>
  <a href="https://github.com/enionsouza/hello-rails-react">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/enionsouza/hello-rails-react?color=cyan&label=%E2%98%85%20stars%20&style=flat-square">
  </a>
</p>

# Hello Rails React!

## About

The main goals for this exercise are:

- Implement a connection between a Ruby on Rails back-end and React front-end.
- Understand the pros and cons of different approaches of connecting Ruby on Rails back-end with React front-end.

Below, we can see a screenshot of the app.

<p align="center">
<img style="border: 1px solid black;" src="./docs/Screenshot.png" width="700" alt="Greetings page">
</p>

## Built With

- Ruby on Rails
- ReactJS, Redux
- VisualStudio Code, Git, & GitHub

## Pre-requisites

- Ruby (v. 3.0.1)
- Rails (v. 6.1.4)
- NodeJs (v. 14.17)
- YarnJs (v. 1.22.10)
- Git

## Getting Started

1. In your terminal, in the folder of your preference, type the following bash command to clone this repository:

```sh
git clone git@github.com:enionsouza/hello-rails-react.git
```

2. Now that you have already cloned the repo run the following commands to get the project up and running:

```sh
cd hello-rails-react
yarn
bundle
rails db:setup
```

3. Now, on your terminal, run:

```sh
rails server
```

This should start your local server in [http://localhost:3000/](http://localhost:3000/). Now, you can go to your browser and visit this page, and you also can open the rest API client of your choice (Thunder Client extension for VScode is recommended) to fetch a randomly selected greeting message:

| Request                            | Endpoint         | Method | Header                                                               |
| ---------------------------------- | ---------------- | ------ | -------------------------------------------------------------------- |
| Randomly selected greeting message | `/api/greetings` | GET    | { "Accept": "application/json", "Content-Type": "application/json" } |

To stop the server, hit `<CTRL> + C` on your keyboard.

## Author

👤 **Ênio Neves de Souza**

- GitHub: [@enionsouza](https://github.com/enionsouza)
- Twitter: [@enionsouza](https://twitter.com/enionsouza)
- LinkedIn: [Enio Neves de Souza](https://www.linkedin.com/in/enio-neves-de-souza/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/enionsouza/hello-rails-react/issues).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./LICENSE) licensed.
