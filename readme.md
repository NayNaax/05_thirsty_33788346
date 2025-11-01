# Thirsty Student Shop

A simple web app

## What You Can Do

-   **See Products:** Browse categories like Boba, Sandwiches, Soft Drinks, and Hot Drinks.
-   **About Page:** Learn more about the shop.
-   **Search:** Find products by name or category.
-   **Register:** Sign up with your name and email.
-   **Easy Navigation:** Use the menu to get around.

## How the Project is Organized

```
.
├── index.js                    # Main app file
├── package.json                # Project info and dependencies
├── routes/
│   └── main.js                 # Handles page routes
├── views/
│   ├── index.ejs               # Home page template
│   ├── about.ejs               # About page template
│   ├── search.ejs              # Search form page
│   ├── search_result.ejs       # Search results page
│   ├── register.ejs            # Registration form page
│   ├── registered.ejs          # Registration confirmation page
│   └── partials/
│       └── header.ejs          # Shared menu/header
└── public/
    └── css/
        └── main.css            # Stylesheet for the application
```

## How to Run It

1. Download or clone this project.
2. Open a terminal in the project folder.
3. Install the needed packages:

    ```sh
    npm install
    ```

## Dependencies

-   **express** (^5.1.0): Web application framework
-   **ejs** (^3.1.10): Template engine for rendering dynamic HTML

## Running the Application

Start the server:

    ```sh
    node index.js
    ```

5. Open your browser and go to [http://localhost:8000](http://localhost:8000)

## Main Pages

-   `/` - Home
-   `/about` - About the shop
-   `/search` - Search for products
-   `/register` - Sign up

## How to Use

-   **To Search:** Go to the Search page, type what you want, and pick a category.
-   **To Register:** Go to Register, fill in your details, and submit.

## Styling

The application uses a custom CSS stylesheet located at `public/css/main.css` that provides:

-   Dark navigation bar with hover effects
-   Clean, modern form styling
-   Responsive layout with consistent spacing
