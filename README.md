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
