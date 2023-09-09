# Crypo-Tip-Jar

## About

This project uses [pnpm](https://pnpm.io/), [Turborepo](https://turborepo.org/) and contains:

```
apps
  └─ nextjs
packages
  ├─ api
  |  └─ tRPC v10 router definition
  └─ db
     └─ typesafe db-calls using Prisma
```

## FAQ

### Set up the project on windows

Notice that:

1. Don't use default option `convert LF to CRLF` when install git, which may fail the eslint in local environment.

2. Sometimes you need to change the execution policy by running the following command in powershell as an admin:

```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

3. Recommend using [scoop](https://scoop.sh/), the package manager for windows.

4. Sometimes `postinstall` script failed, then try running `pnpm db:generate` manually before `pnpm dev`.
