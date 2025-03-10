# NextAuth Starter

A robust authentication solution for Next.js applications, leveraging NextAuth with custom enhancements like RBAC, multi-provider support, and email handling.

## Tools and Adapters Used

- **Next.js**
- **TypeScript**
- **Auth.js (v5)**
- **PostgreSQL**
- **Prisma**

## Getting Started



## Setup & Configuration

Create a .env file in the root directory and add the following configuration:

```
DB_URL="postgresql://dbuser:password@localhost:5432/dbname"

AUTH_SECRET="your-secret"

GITHUB_CLIENT_ID="your-client-id"
GITHUB_CLIENT_SECRET="your-client-secret"

GOOGLE_CLIENT_ID="your-client-id"
GOOGLE_CLIENT_SECRET="your-client-secret"

FACEBOOK_CLIENT_ID="your-client-id"
FACEBOOK_CLIENT_SECRET="your-client-secret"

GMAIL_SENDER_EMAIL="your-app-gmail"
GMAIL_SENDER_PASSWORD="gmail-app-password"

HOST="http://localhost:3000"

   NEXT_PUBLIC_RECAPTCHA_SITE_KEY : ""
        RECAPTCHA_SECRET : ""
```
