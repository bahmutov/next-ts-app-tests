# next-ts-app-tests ![cypress version](https://img.shields.io/badge/cypress-9.5.1-brightgreen) [![CircleCI](https://circleci.com/gh/bahmutov/next-ts-app-tests/tree/main.svg?style=svg)](https://circleci.com/gh/bahmutov/next-ts-app-tests/tree/main) [![ci](https://github.com/bahmutov/next-ts-app-tests/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bahmutov/next-ts-app-tests/actions/workflows/ci.yml)

> Cypress tests for [bahmutov/next-ts-app](https://github.com/bahmutov/next-ts-app) repo

Read the blog post [Code Coverage For Nextjs Application](https://glebbahmutov.com/blog/code-coverage-for-nextjs-app/)

## Test the deployed application

```
$ DEBUG=code-coverage CYPRESS_baseUrl=https://next-ts-app-swart.vercel.app/ npx cypress open
```

## Code coverage report

The code coverage report is produced on CI using [workflows/ci.yml](./.github/workflows/ci.yml) and hosted at GitHub Pages at [https://glebbahmutov.com/next-ts-app-tests/](https://glebbahmutov.com/next-ts-app-tests/)

![Code coverage report](./images/report.png)
