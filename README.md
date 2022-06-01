## Getting Started

Local environment setup:

AUTH0 setup

1. Make a copy of the `.env.example` file in the root directory and rename it `.env.local`
2. Create an [auth0 account](https://auth0.com/signup?place=header&type=button&text=sign%20up)
3. Create a new tenant in auth0
![Screen Shot 2022-06-01 at 3 39 48 PM](https://user-images.githubusercontent.com/40549249/171488165-cec1345f-cbd8-4866-a69d-7fe46567445b.png)
4. Under your newly created tenant, create a new application
![Screen Shot 2022-06-01 at 3 42 39 PM](https://user-images.githubusercontent.com/40549249/171488574-1d29e49a-cb0f-4edb-8ac2-27509138b8f1.png)
![Screen Shot 2022-06-01 at 3 43 59 PM](https://user-images.githubusercontent.com/40549249/171488677-f0c2b673-63db-45b0-a2cf-a4394dc9f2a8.png)
5. Once your application is created, go to the settings tab. Here you will find the environment variables needed to run auth locally.
![Screen Shot 2022-06-01 at 3 44 47 PM](https://user-images.githubusercontent.com/40549249/171488937-50c7e92b-b478-4c26-be04-b7c4fc846f66.png)
6. Fill in the following for your `.env.local` variables:
```
AUTH0_BASE_URL="http://localhost:3000" <- change the port if you modified the default nextjs port
AUTH0_CLIENT_ID= <- Client ID field in Auth0 application settings
AUTH0_CLIENT_SECRET= <- Client Secret field in Auth0 application settings
AUTH0_DOMAIN= <- Domain field in Auth0 application settings
AUTH0_ISSUER_BASE_URL= <- Domain field with https:// in front
AUTH0_SECRET= <- run `openssl rand -base64 32` to generate a secret
```
7. Still in the settings tab for your application, scroll down to the `Application URIs` section. Copy in the following:

Allowed Callback URLs
```
http://localhost:3000/api/auth/callback, http://localhost:3000/callback, http://localhost:3000/api/auth/callback/auth0, http://localhost:3001/api/auth/callback, http://localhost:3001/callback, http://localhost:3001/api/auth/callback/auth0
```

Allowed Logout URLs
```
http://localhost:3000/, http://localhost:3001/
```

Allowed Web Origins
```
http://localhost:3000/, http://localhost:3001/
```

Database setup

1. Get a postgres connection string. You can get a local db connection string or a hosted one. I like to use [supabase](https://supabase.com/), but feel free to use Heroku or whatever else.
2. Add your connection string to the `DATABASE_URL=` env variable.

Next Auth setup

1. Run `openssl rand -base64 32` to generate a secret and place it in the `NEXTAUTH_SECRET` environment variable.
2. `NEXTAUTH_URL` will be your localhost and port. For example `http://localhost:3000`.


Test env setup

> Note: to run cypress, you will need to add a test env file (`.env.test`). You can utilize the same Auth0 tenant if you'd like, however, I would encourage using a dedicated test db.

1. Make a copy of the `.env.example` file in the root directory and rename it `.env.test`
2. Complete the env variables from above auth0 setup for this new file.
3. Create a new cypress user in auth0 and provide the credentials to the `AUTH0_USERNAME` and `AUTH0_PASSWORD` env variables. This will be your test user.
4. `AUTH0_SCOPE="openid profile email"`
5. Create a new test db and insert the connection string for the `DATABASE_URL` env variable.


To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

