# Image Search App

Keyword-based image search app powered by the [Unsplash API](https://unsplash.com/documentation).
Built with React + Vite.

## Features

- Image search by keyword
- Pagination via the **Load more** button
- Loading indicator (`react-spinners`)
- Notifications (`react-hot-toast`)
- Modal window with a large image and author info (`react-modal`),
  closes on `ESC` and backdrop click
- HTTP request error handling

## Tech stack

React 19, Vite, axios, react-hot-toast, react-modal, react-spinners, react-icons, CSS Modules.

## Running locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root (see `.env.example`) and add your
   Access Key from [Unsplash](https://unsplash.com/oauth/applications):

   ```
   VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
   ```

3. Start the app:

   ```bash
   npm run dev
   ```

## Deploying to Vercel

Don't forget to add the `VITE_UNSPLASH_ACCESS_KEY` environment variable
in your Vercel project settings (**Settings → Environment Variables**).
