# Contributing to the Developers Conference 2019 website

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

The following is a set of guidelines for contributing to DevCon2019. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Goals

- A website that has useful information about the conference.
- A sessions schedule interface that is easy to use.
- A sessions rating interface for attendees, to gather feedback.

# 1. Before you start, READ SECTION 1

## 1.1 Technology Stack

- HTML/CSS 😜
- Vuejs + Vuex
- Golang 1.11
- Netlify CI (for dev)
- Google Spreadsheet as a CMS

## 1.2 Theme : Ice & Fire

## Design

- Download the Desktop PSD [here](https://drive.google.com/drive/folders/14yEFxL-sYgp3TxDfLz5_khvm35856jpl?usp=sharing)
- Download the Mobile PSD [here](https://drive.google.com/open?id=1IYo5jyR9RBM3pCqej2qh3FH0VRqTvcX4)
- Download the Page Extras PSD [here](https://drive.google.com/drive/u/1/folders/14yEFxL-sYgp3TxDfLz5_khvm35856jpl)
- Download the Schedule Page PSD [here](https://drive.google.com/drive/u/1/folders/14yEFxL-sYgp3TxDfLz5_khvm35856jpl)

# 2. Where to begin

- The first part of the project will be mostly Front-end Development(VueJS)
- Take a look at the [Project Board](https://github.com/mscraftsman/devcon2019/projects/1)
- It is likely there are open [issues](https://github.com/mscraftsman/devcon2019/issues) that you can help with.

# 3. How to contribute

1. [Pick an Issue](https://github.com/mscraftsman/devcon2019/issues) or Create an issue to help with
2. Comment on the issue and let everyone know you'll be helping on this. (to avoid duplicates)
3. Clone the `dev` branch and resolve the issue locally.
4. Make a merge request to the `dev` branch
5. One of the maintainers will review the PR and merge, else there will be comments if adjustments are required.

# 4. Deployment to Staging

We're using Netlify as a our 'continuous integration' thing during development.

Once a maintainer merges new changes in the branch `dev-deploy`, netlify will
automatically trigger a new build pipeline and after a few minutes the changes will be shown on the staging website.

[Click here to view the staging website &raquo; ](https://youthful-panini-25fb9a.netlify.com/)

# 5. Questions?

You can reach the maintainers on [Twitter](https://twitter.com/MSCraftsman) or [MSCC Slack](https://msccmu.slack.com/) !

- Sandeep Ramgolam: 🐦 `@__sun__`

- Cedric Poilly: 🐦 `@cedpoilly`

- Jochen Kirstaetter: 🐦 `@JKirstaetter`
