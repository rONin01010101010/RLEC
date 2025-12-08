# FTP Deployment Guide for Doteasy

This guide explains how to deploy your Next.js website to Doteasy web hosting using FileZilla (FTP).

## Prerequisites

1. **FileZilla** - Download and install from [https://filezilla-project.org/](https://filezilla-project.org/)
2. **Node.js** installed on your local machine
3. **Doteasy hosting account** with FTP credentials

## Configuration

The application has been configured for static export with the following settings in `next.config.mjs`:

```javascript
{
  output: 'export',           // Generates static HTML files
  images: { unoptimized: true }, // Allows images to work without Next.js server
  trailingSlash: true,        // Adds trailing slashes to URLs for better compatibility
}
```

## Build Process

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Build the Static Site

```bash
npm run export
```

This will create an `out` directory containing all static files ready for deployment.

### Step 3: Verify the Build

After building, you should see an `out` directory containing:
- `index.html` (homepage)
- Folders for each page (therapies/, contact/, references/)
- `_next/` folder with optimized assets
- `assets/` folder with your images and files

## FTP Deployment with FileZilla

### Step 1: Configure FileZilla Connection

1. Open FileZilla
2. Click **File > Site Manager** (or press Ctrl+S)
3. Click **New Site** and name it (e.g., "Doteasy - RLEC Website")
4. Enter your connection details:
   - **Protocol**: FTP - File Transfer Protocol
   - **Host**: Your Doteasy FTP hostname (usually `ftp.yourdomain.com`)
   - **Port**: 21 (default)
   - **Encryption**: Use explicit FTP over TLS if available
   - **Logon Type**: Normal
   - **User**: Your FTP username from Doteasy
   - **Password**: Your FTP password from Doteasy

5. Click **Connect**

### Step 2: Navigate to the Correct Directory

On Doteasy, your website files typically go in:
- `/public_html/` or `/www/` or `/httpdocs/`

Check your Doteasy control panel documentation for the exact path.

### Step 3: Upload Files

1. **Local site** (left panel): Navigate to your project's `out` folder
2. **Remote site** (right panel): Navigate to your public HTML folder
3. **Select all files** in the `out` folder (not the folder itself)
4. **Right-click** and select **Upload** or drag and drop

**Important**: Upload the *contents* of the `out` folder, not the folder itself.

Your file structure on the server should look like:
```
/public_html/
  ├── index.html
  ├── _next/
  ├── assets/
  ├── therapies/
  ├── contact/
  └── references/
```

### Step 4: Verify Deployment

1. Wait for all files to upload (check the transfer queue at the bottom)
2. Visit your domain in a browser
3. Test all pages and navigation

## Re-deploying Updates

When you make changes to your site:

1. Make your code changes locally
2. Run `npm run export` to rebuild
3. Connect to FileZilla
4. Upload the contents of the `out` folder again
5. FileZilla will ask if you want to overwrite - select **Yes** or **Overwrite**

## Tips for Efficient FTP Deployment

### Option 1: Selective Upload
- Only upload files that changed (FileZilla can compare timestamps)
- Right-click on remote folder > **Directory Comparison** > Select files to upload

### Option 2: Delete and Re-upload
- Delete all files in the remote directory first
- Upload all fresh files from `out` folder

### Option 3: Create a Deployment Script
For faster deployments, you can use an FTP client with command-line support:

```bash
# Example using lftp (Linux/Mac)
lftp -u username,password ftp.yourdomain.com -e "mirror -R out/ /public_html/; quit"
```

## Troubleshooting

### Pages Show 404 Error
- Ensure the `trailingSlash: true` setting is in `next.config.mjs`
- Check that all folders were uploaded correctly
- Some servers require `.htaccess` configuration (see below)

### Images Not Loading
- Verify the `assets` folder was uploaded
- Check that `images: { unoptimized: true }` is in the config
- Ensure file paths are correct (case-sensitive on Linux servers)

### CSS/JavaScript Not Loading
- Check that the `_next` folder was uploaded completely
- Clear your browser cache
- Verify file permissions are correct (usually 644 for files, 755 for directories)

## Optional: .htaccess for Better Routing

Create a `.htaccess` file in your public_html directory with:

```apache
# Enable clean URLs
RewriteEngine On

# Handle trailing slashes
DirectorySlash On

# Redirect to HTTPS (optional but recommended)
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Custom error pages (optional)
ErrorDocument 404 /404.html
```

Upload this file to the root of your public_html directory.

## Getting Your Doteasy FTP Credentials

1. Log into your Doteasy control panel
2. Look for **FTP Accounts** or **File Manager**
3. Your credentials should show:
   - FTP Server/Host
   - Username
   - Port (usually 21)
4. Reset your password if needed

## Support

- Doteasy Support: Check their knowledge base or contact support
- FileZilla Documentation: [https://wiki.filezilla-project.org/](https://wiki.filezilla-project.org/)

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (FTP deployment)
npm run export

# The output will be in the 'out' folder
```
