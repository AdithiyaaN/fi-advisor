# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

---

## Deploying Your Project

Here’s how you can connect this project to a GitHub repository and deploy it live on Vercel, all without leaving your browser.

### 1. Connect to GitHub

First, you need to get your code into a GitHub repository.

1.  **Create a new GitHub Repository:**
    *   Go to [GitHub](https://github.com/new) and create a new, empty repository.
    *   Do **not** initialize it with a `README`, `.gitignore`, or license file, as your project already has these.

2.  **Link from Firebase Studio:**
    *   In the Firebase Studio interface, look for a "Source Control" or "Connect to GitHub" option. This will allow you to link your project to the repository you just created.
    *   You will be asked to authorize Firebase Studio with your GitHub account.
    *   Follow the prompts to connect to your new repository. You'll need the repository URL (e.g., `https://github.com/your-username/your-repo-name.git`).

3.  **Push Your Code:**
    *   Once linked, use the source control features within Firebase Studio to "commit" your changes with a message (e.g., "Initial commit") and then "push" them to your GitHub repository.

### 2. Deploy with Vercel

Vercel is a platform that makes it incredibly easy to deploy Next.js applications.

1.  **Sign up for Vercel:**
    *   Go to [Vercel.com](https://vercel.com) and sign up for a free account. It's easiest to sign up using your GitHub account.

2.  **Import Your Project:**
    *   Once logged in, go to your Vercel Dashboard and click "Add New... > Project".
    *   You will see a list of your GitHub repositories. Find the one you just created and click "Import".

3.  **Configure and Deploy:**
    *   Vercel will automatically detect that you're using Next.js and pre-fill the build settings. You can leave these as they are.
    *   **Important:** If your project needs any environment variables (from an `.env` file), expand the "Environment Variables" section and add them here. This is crucial for things like API keys to work in production.
    *   Click "Deploy".

4.  **Done!**
    *   Vercel will now build and deploy your application. In a few minutes, you'll have a live URL!
    *   From now on, every time you push a change to your main branch on GitHub, Vercel will automatically redeploy the site with the latest version.
