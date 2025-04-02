# NestJS Static Web Application  
This repository contains a NestJS application that serves static HTML pages with client-side interactivity. The application demonstrates how to set up a NestJS project to serve static content while leveraging the NestJS framework.

## Project Overview  
This application features:  

- Static HTML pages served through NestJS
- Client-side form validation and navigation
- Data persistence using localStorage
- Custom styling with CSS

## Project Structure  
```
NestJS_EC2_Test/
├── src/                 # NestJS source code
│   ├── app.controller.ts    # Route definitions
│   ├── app.module.ts        # Main module configuration
│   ├── app.service.ts       # Service layer
│   └── main.ts              # Application entry point
├── public/             # Static assets
│   ├── scripts.js          # Client-side JavaScript
│   ├── styles.css          # Main stylesheet
│   └── styles1.css         # Secondary stylesheet
├── views/              # HTML templates
│   ├── index.html          # Homepage
│   └── page2.html          # Second page
├── test/               # Test files
├── dist/               # Compiled output (generated)
└── node_modules/       # Dependencies (generated)
```

## How it works  

1. The application uses NestJS to serve static HTML pages.  
2. The main page has an input field where users enter their name.  
3. After entering a name, the user can navigate to page 2.  
4. Page 2 displays a personalized welcome message using data stored in localStorage.  
5. The application uses EJS to render HTML templates.  

## Detailed explanation  

## 1. Application Entry Point
 - main.ts  
    This file bootstraps the NestJS application. It creates the Nest application instance, applies global middleware if necessary, and configures the server to listen on a specific port (typically port 3000). Any setup regarding the view engine (EJS) and static asset serving might also be initialized here, or in the module configuration.

## 2. Routing and Controllers
 - app.controller.ts  
    this file defines routes for the application. For example:  
      - GET /  
        A controller method handles the root URL, responsable for rendering the home page. It uses the EJS view engine to combine the index.html template with any dynamic data if needed.
      - GET /page2
        Another method handles the /page2 URL. This route renders the second HTML template (views/page2.html) where the personalized welcome message is displayed.

    The controller methods map specific URLs to the logic that renders these views.

## 3. Serving Static Assets  
 - Static Folder (public/)  
    The application contains a public folder that holds static files like JavaScript and CSS.
    - NestJS leverages Express’s built-in static middleware to serve these files.
    - When a client requests a static resource (e.g., scripts.js or styles.css), the middleware automatically serves the file from the public folder.  
## 4. View Engine Setup
 - Using EJS for Templating
    - The application is configured to use EJS as its view engine.
    - This configuration is typically set in the module file (e.g., app.module.ts) or directly in the bootstrap file (main.ts).
    - By setting the view engine to EJS and specifying the directory for views (usually views), NestJS can render the HTML templates dynamically.
    - This means that even though the HTML files are static, they can incorporate dynamic data (like user names) before being sent to the client.
## 5. Client-Side Interactivity and Data Flow
  - HTML Interaction Flow
    - Homepage (index.html):
    The homepage includes an input field where users can enter their name.
    Client-side JavaScript (located in scripts.js) may capture this input and store it in localStorage.

    - Second Page (page2.html):
    Upon navigating to the second page, the client-side script retrieves the stored name from localStorage and displays a personalized welcome message.
    This dynamic behavior improves the user experience by bridging simple server-rendered pages with client-side interactivity.

## 6. Development vs. Production Modes
  - Development Mode:

    - The application runs in watch mode (using npm run start:dev), which automatically restarts the server when files change.
    - This facilitates rapid testing and development.
  - Production Mode:

    - The application is built (compiled into the /dist folder) using a build script (npm run build).
    - Once built, it can run in production mode (npm run start:prod) which is optimized for performance and stability.

## Installation and Setup

### Prerequisites

- Node.js (v16 or higher)

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```
### Cloning the repository
```bash
git clone git@github.com:Bolson-s/NestJS_EC2_Test.git
cd NestJS_EC2_Test
```
### Instaling dependencies
```bash
npm install
```

### Running the application
  - #### Development mode
  ```bash
  npm run start:dev
  ```

  - #### Production mode
  - 1. Build the application
  ```bash
  npm run build
  ```

  - 2. Start in production mode
  ```bash
  npm run start:prod
  ```

Then configure a proxy to redirect all requests to port 3000.
