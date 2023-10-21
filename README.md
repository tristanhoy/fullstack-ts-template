# Fullstack Typescript Example

## Overview

This project aims to give you a starting point if you want fullstack typescript but want to stick with boring technology instead of tRPC.

Hey, there's a lot of us like that.

## Stack
- Typescript
- Express
- Vite
- React

## How type sharing is implemented

The backend contains all shared types in a "shared" directory, which the frontend imports using tsconfig paths.

This is because:
1. Vite is able to import and bundle typescript from external folders, and
2. *Deploying* a Typescript backend that imports types from other directories is tricky

## Running the project

```
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
```

## Deploying to a hosting provider

### Backend

Deploy to any service that can host a NodeJS app - for example, render.com.

- Root directory: `backend`
- Build command: `npm install`
- Run command: `npm dev`

Once the backend has been deployed, you can test it by fetching the /greeting path e.g. https://fullstack-ts-template-backend.onrender.com/greeting

### Frontend

Deploy to any service that can host a static website - for example, render.com.

- Root directory: `frontend`
- Build command: `npm install && npm run build`
- Artifact/output directory: `dist`

To hook the frontend up to the backend, you'll need to take the endpoint you deployed to in the previous step and assigned this value to the `VITE_SERVER_URL` environment variable, for example `https://fullstack-ts-template-backend.onrender.com`.
