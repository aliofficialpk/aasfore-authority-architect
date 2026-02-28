# Muhammad Ali | LinkedIn Authority Architect Website Deployment Guide

This guide will walk you through hosting your professional website for free using **GitHub Pages**.

## Phase 1: Create Your GitHub Repository
1.  **Sign In:** Go to [GitHub.com](https://github.com/) and log in to your account.
2.  **New Repository:** Click the **"+"** icon in the top-right corner and select **"New repository"**.
3.  **Repository Name:** Type a name like `muhammad-ali-site` or `linkedin-authority`.
4.  **Public/Private:** Ensure **"Public"** is selected so GitHub Pages can host it.
5.  **Initialize:** Do NOT check "Add a README file" (you already have one).
6.  **Create:** Click the green **"Create repository"** button.

## Phase 2: Upload Your Files
1.  **Upload Link:** On the "Quick setup" page, click the link that says **"uploading an existing file"**.
2.  **Drag & Drop:** 
    *   Open your local `linkeinpro/website-root` folder on your computer.
    *   Select **ALL** files (`index.html`, `about.html`, `css/`, `js/`, `assets/`, etc.).
    *   Drag and drop them into the GitHub upload area.
3.  **Commit:** Once the bar finishes loading, scroll down to the "Commit changes" box.
    *   Type "Initial website upload" in the summary.
    *   Click **"Commit changes"**.

## Phase 3: Launch the Website
1.  **Settings:** In your repository, click the **Settings** tab (top menu).
2.  **Pages:** Click **"Pages"** in the left-hand sidebar (under the "Code and automation" section).
3.  **Branch:** Under "Build and deployment" > "Branch":
    *   Click the dropdown that says **"None"** and select **"main"** (or `master`).
    *   Ensure the folder is set to `/(root)`.
    *   Click **"Save"**.
4.  **Live Link:** Wait about 1-2 minutes. Refresh the page until you see a banner stating: *"Your site is live at [link]"*.

## Phase 4: SEO & Performance Checklist
*   **Google Search Console:** Go to [GSC](https://search.google.com/search-console/about) and submit your new URL to start ranking for "Aasfore" and "Muhammad Ali".
*   **Google AdSense:** Once you have a custom domain (optional) or after your GitHub URL has been active, submit it to AdSense.
*   **Custom Domain (Optional):** If you buy a domain like `aasfore.com`, you can link it in the **Settings > Pages** section under "Custom domain".

---

## Phase 5: Troubleshooting Common Issues

### ⚠️ Issue: 404 - File Not Found
*   **Cause:** You likely uploaded the entire `website-root` folder *as a folder* instead of uploading the **contents** inside it.
*   **Fix:** Ensure `index.html` is at the very first level (root) of your repository. If you see a folder named `website-root` in your GitHub repo, you uploaded it incorrectly. Delete the repo or delete the folder and upload the files *inside* it directly.

### ⚠️ Issue: Styling (CSS) Not Applying
*   **Cause 1: Case Sensitivity.** GitHub is case-sensitive. Ensure the folder is named `css` (lowercase) and the file is `styles.css`.
*   **Cause 2: Broken Folders.** If you uploaded files one-by-one, you might have missed the folder structure. 
*   **Fix:** Use the ".nojekyll" file I included. It tells GitHub not to mess with your folder structure. Always drag the **actual folders** (`css`, `js`, `assets`) into the upload area so GitHub recreates them.

### ⚠️ Issue: Images Not Showing
*   **Fix:** Double check that `muhammad-ali.jpg` and `logoForAssfore.png` are inside the `assets/images/` folder in your repository.
