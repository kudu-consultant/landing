# Kudu design

> **Note**
>
> This workspace is fully customized for being used within VSC, some helper
> extensions and bash terminal. It's recommended to follow the next steps:
>
> - Install following extensions: `svelte.svelte-vscode`, `pranaygp.vscode-css-peek`,
>   `usernamehw.errorlens`, `dbaeumer.vscode-eslint`, `eamodio.gitlens`, `kisstkondoros.vscode-gutter-preview`,
>   `VisualStudioExptTeam.vscodeintellicode`, `Zignd.html-css-class-completion`, `esbenp.prettier-vscode`,
>   `bradlc.vscode-tailwindcss`.
>
> - Use linux based terminal like zsh or bash.
>
> - To use the [pnpm package manager][pnpm-package-manager-docs], run command `npm install -g pnpm` to install it.

## Table of Contents

- [Kudu design](#kudu-design)
  - [Table of Contents](#table-of-contents)
  - [How to setup the project](#how-to-setup-the-project)
    - [Set up the environment](#set-up-the-environment)
    - [Set up the project locally](#set-up-the-project-locally)
    - [Run locally in development mode](#run-locally-in-development-mode)
  - [Environments](#environments)
    - [Production](#production)
    - [Preview](#preview)
    - [Localhost](#localhost)
    - [Deploy to production](#deploy-to-production)
  - [Important files and folders](#important-files-and-folders)
  - [Styling Framework](#styling-framework)
  - [I18n](#I18n)
  - [Logger and tracking events](#logger-and-tracking-events)
  - [Cookies](#cookies)
  - [Helper tools](#helper-tools)
    - [Lint](#lint)
    - [Code formatter](#code-formatter)
    - [Automatic update packages](#automatic-update-packages)
    - [Git hooks](#git-hooks)

## How to setup the project

### Set up the environment

1. Upgrade node to versión 18.x.x or higher
2. Install pnpm, via npm using `npm install -g pnpm`, via yarn using `yarn global add pnpm`
3. If you already have pnpm installed, upgrade to the latest version using `pnpm up --latest`

### Set up the project locally

1. Create a new `.env` file similar to `.env.example` and populate it.
2. If you are using Google for email services, you can learn more about setting up your SMTP
   server by following these links: [Google send email from app][google-smtp-server]
   and [google SMTP password][google-smtp-password].
3. To register your reCAPTCHA keys, please refer to the following link for instructions:
   [Google Reacptcha Docs][google-reacptcha-docs]

**You can see more information in [enviroments](#environments) section.**

### Run locally in development mode

```bash
pnpm install && pnpm run dev
```

When you run this development server, the changes you make in your frontend will be applied live using hot reloading.

### Deploy to production

> **Note**
>
> The steps for deploying to production may vary depending on your hosting service.
> However, this documentation focuses on deploying your app with Vercel.

1. Create your Sentry project following this link: [Sentry create project][sentry-create-project]
2. Follow this [guide][sveltekit-deploy-to-vercel] and override the `Build Command` with `pnpm run build`
   and the `Install Command` with `pnpm i`.
3. Populate all the required environment variables in your Vercel panel. For learn more
   go to [production environments](#production)

## Environments

| NAME       | URL                            | BRANCH  | VERCEL ENV | VERSION |
| ---------- | ------------------------------ | ------- | ---------- | ------- |
| PRODUCTION | https://www.kudu.design        | main    | Production | 0.0.0   |
| PREVIEW    | https://kudu-design.vercel.app | develop | Preview    | 0.0.0   |
| LOCALHOST  | http://localhost:5173          | NA      | NA         | NA      |

### Production

| NAME                      | VALUE                          |
| ------------------------- | ------------------------------ |
| PUBLIC_HOST_URL           | https://www.kudu.design        |
| SMTP_USER                 | your_smtp_user                 |
| SMTP_PASSWORD             | your_smtp_password             |
| SMTP_HOST                 | your_smtp_host                 |
| SMTP_PORT                 | your_smtp_port                 |
| PUBLIC_RECAPTCHA_SITE_KEY | your_public_recaptcha_site_key |
| RECAPTCHA_SECRET_KEY      | your_recaptcha_secret_key      |
| PUBLIC_LOGGER_ENABLED     | true                           |
| SENTRY_ORG                | your_sentry_org_slug           |
| SENTRY_PROJECT            | your_sentry_project_slug       |
| SENTRY_URL                | your_sentry_url                |
| SENTRY_AUTH_TOKEN         | your_sentry_auth_token         |
| PUBLIC_SENTRY_DSN         | your_sentry_dsn                |

### PREVIEW

| NAME                      | VALUE                          |
| ------------------------- | ------------------------------ |
| PUBLIC_HOST_URL           | https://kudu-design.vercel.app |
| SMTP_USER                 | your_smtp_user                 |
| SMTP_PASSWORD             | your_smtp_password             |
| SMTP_HOST                 | your_smtp_host                 |
| SMTP_PORT                 | your_smtp_port                 |
| PUBLIC_RECAPTCHA_SITE_KEY | your_public_recaptcha_site_key |
| RECAPTCHA_SECRET_KEY      | your_recaptcha_secret_key      |
| PUBLIC_LOGGER_ENABLED     | true                           |
| SENTRY_ORG                | your_sentry_org_slug           |
| SENTRY_PROJECT            | your_sentry_project_slug       |
| SENTRY_URL                | your_sentry_url                |
| SENTRY_AUTH_TOKEN         | your_sentry_auth_token         |
| PUBLIC_SENTRY_DSN         | your_sentry_dsn                |

### Localhost

| NAME                      | VALUE                          |
| ------------------------- | ------------------------------ |
| PUBLIC_HOST_URL           | http://localhost:5173          |
| SMTP_USER                 | your_smtp_user                 |
| SMTP_PASSWORD             | your_smtp_password             |
| SMTP_HOST                 | your_smtp_host                 |
| SMTP_PORT                 | your_smtp_port                 |
| PUBLIC_RECAPTCHA_SITE_KEY | your_public_recaptcha_site_key |
| RECAPTCHA_SECRET_KEY      | your_recaptcha_secret_key      |
| PUBLIC_LOGGER_ENABLED     | false                          |

## Important files and folders

| File(s)              | Description                                                        |
| -------------------- | ------------------------------------------------------------------ |
| `svelte.config.js`   | Config file for Svelte                                             |
| `vite.config.js`     | Config file for Vite                                               |
| `tsconfig.json`      | Config file for TypeScript                                         |
| `tailwind.config.js` | Config file for Tailwind and Daisy UI (design system)              |
| `postcss.config.js`  | Config file for PostCSS, dependency of Tailwind                    |
| `.prettierrc`        | Config file for Prettier                                           |
| `.prettierignore`    | Config file for Prettier ignore                                    |
| `.eslintrc.cjs`      | Config file for lint                                               |
| `.eslintignore`      | Config file for lint ignore                                        |
| `lefthook.yml`       | Config file for lefthook (githooks tools)                          |
| `.lefthook`          | Folder scripts for lefthook (githooks tools)                       |
| `renovate.json`      | Config file for renovate bot (Github app)                          |
| `.gitignore`         | Config file for git ignore                                         |
| `.vscode`            | Specific vscode config for project                                 |
| `env.example`        | Sample file showcasing development environment variables           |
| `statics`            | Serve static content                                               |
| `src`                | All sources files, the core of the project                         |
| `src/app.html`       | Main file of project structure                                     |
| `src/app.css`        | Main CSS file                                                      |
| `src/constants.ts`   | Add docs                                                           |
| `src/app.d.ts`       | Define custom types and interfaces for entry app                   |
| `src/routes`         | All pages of the project, use as router folder system              |
| `src/routes/api`     | All api routes of the project                                      |
| `src/components`     | Reusable visual components lib                                     |
| `src/libs`           | Libs already to use                                                |
| `src/locales`        | Store literals in all supported languages                          |
| `src/utils`          | All js utils are inside here                                       |
| `src/images`         | Store all static images (the static folder isn't working properly) |

## Styling Framework

This project uses the `kudu-ui-system` package based on Tailwind CSS and Daisy UI to style
the components.

If you want to open a style enhancement proposal for all applications using the
`kudu-ui-system` package, please go to the [kudu-ui-system repository][kudu-ui-system-repository].

Tailwind CSS allows for more efficient CSS writing and maintains a structured
approach. Daisy UI is a class library that provides styles for commonly used components. For
more details, you can refer to the documentation of [Tailwind CSS][tailwind-docs] and [Daisy UI][daisy-docs].

For customize Tailwind and theming styles go to `tailwind.config.js` file.

## I18n

This project provides support for multiple languages by utilizing the optional
parameter `[[lang]]` within the URL.

- To define the language of the main content, utilize the `DEFAULT_LANGUAGE` constant.
- To define a new language, utilize the `DEFAULT_LANGUAGE` constant.
- To add a new language, follow these steps: include it in the `SUPPORTED_LANGUAGES` constant
  and create a new JSON file inside the `src/locales` directory with the name of the new language.

## Logger and tracking events

To track errors occurring in the production environment, this project use a logger
connected to Sentry. It handles both caught and uncaught errors. You can find all the
code related to this logging library inside the `src/libs/logger` folder.

## Cookies

To enhance the user experience, this project sets certain cookies in the client's browser window.

- `preferred-lang` cookie: This cookie stores the user's preferred language, which is
  determined based on their `Accept-Language` header. If the user's `Accept-Language` header
  is not available, the preferred language cookie is set with the default language.
- `is-first-visit` Cookie: This cookie is used to determine if it is the user's first request
  to the server.

## Helper tools

Auxiliar tools that enhance productivity and streamline development workflows.

### Lint

This repository utilizes ESLint for lint the code. You can install the ESLint extension
in Visual Studio Code to automatically run ESLint. Alternatively, you can use the command
`pnpm run lint` to lint your code manually if needed.

### Code formatter

This repository utilizes Prettier for code formatting. You can install the Prettier extension
and enable the 'formatOnSave' setting in Visual Studio Code to automatically run Prettier when
saving a file. Alternatively, you can use the command `pnpm run format` to standardize your
code manually if needed.

### Automatic update packages

This repo use renovate for up to date all packages

- [How to set up Renovate][renovate-tutorial]
- [Renovate dashboard][renovate-dashboard]
- [Renovate docs][renovate-docs]

### Git hooks

This repo use Lefthook to automatize actions on git flow. Learn more
about Lefthook here: [Lefthook Github][lefthook-github]

- Start using git hooks on your project: `pnpm run install:git-hooks`
- Clean git hooks: `pnpm run uninstall:git-hooks`

[pnpm-package-manager-docs]: https://pnpm.io/
[google-smtp-server]: https://support.google.com/a/answer/176600?hl=en
[google-smtp-password]: https://support.google.com/accounts/answer/185833?hl=en
[google-reacptcha-docs]: https://developers.google.com/recaptcha/docs/v3
[sentry-create-project]: https://docs.sentry.io/product/sentry-basics/integrate-frontend/create-new-project/?original_referrer=https%3A%2F%2Fwww.google.com%2F
[tailwind-docs]: https://tailwindcss.com/docs/utility-first
[daisy-docs]: https://daisyui.com/docs/use/
[sveltekit-deploy-to-vercel]: https://sveltekit-deploy-to-vercel.vercel.app/
[renovate-tutorial]: https://github.com/renovatebot/tutorial
[renovate-dashboard]: https://developer.mend.io/github/kudu-consultant/landing
[renovate-docs]: https://docs.renovatebot.com/
[lefthook-github]: https://github.com/evilmartians/lefthook
[kudu-ui-system-repository]: https://github.com/kudu-consultant/kudu-ui-system
