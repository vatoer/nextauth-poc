# Readme

## Prisma

[prisma doc](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql)

```sh
pnpm add -D prisma
pnpm add @prisma/client
pnpm prisma init
```

Next steps:

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. create model in scheme.prisma see <https://authjs.dev/getting-started/adapters>
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
5. Run prisma db push to sync prisma to server

create `lib/db.ts`

## nextauth

<https://authjs.dev/getting-started/providers/oauth-tutorial>

```sh
pnpm add next-auth
```

setup google create new project and then go to <https://console.cloud.google.com/apis/dashboard/>

create credentials
setup Oauth consent Screen

use Client Id and Client secret to .env

create server side session `lib\session.ts`
