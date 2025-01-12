# React Projects Hub

**React Projects Hub** is a web application showcasing 10 interactive mini React projects, designed to improve development skills and offer real-world solutions. The application is deployed on AWS EC2, ensuring smooth performance and accessibility.

## Projects Overview

1. **FAQ Section**: Clickable questions with expandable answers for an engaging FAQ experience.
2. **Grocery Manager**: Manage a grocery list by adding, editing, and removing items.
3. **Header Navigation**: A responsive navbar featuring logos, links, and social media icons.
4. **Random Text Generator**: Generate random text and paragraphs for content creation.
5. **Restaurant Menu**: A dynamic menu displaying restaurant items categorized by type.
6. **Birthday Tracker**: Track and manage a list of birthdays efficiently.
7. **Stripe Theme Design**: A modern interface inspired by Stripe's sleek design.
8. **Sidebar with Modal**: Toggle navigation with a user-friendly modal.
9. **Reviews Slider**: Display customer reviews with dynamic, smooth transitions.
10. **Shopping Cart**: Fully functional shopping cart for item management.

## Technologies Used

- **Frontend:** React JS, Tailwind CSS, React Router DOM, Framer Motion
- **State Management:** Context API
- **Hosting:** AWS EC2
- **Version Control:** Git/GitHub

## Features

- Interactive and user-friendly design
- Responsive layouts with modern UI
- Deployed on a robust AWS infrastructure
- Reusable React components and clean architecture

```plaintext
react.projects.hub/ 
├── public/
│   └── favicon.ico                   # Application icon
├── src/
│   ├── assets/                       # Images and other assets
│   ├── components/                   # Reusable UI components
│   │   ├── Footer.jsx                # Footer component
│   │   ├── Header.jsx                # Header component
│   │   ├── data.jsx                  # Data handling for components
│   │   └── index.js                  # Component exports
│   ├── pages/                        # Project-specific pages
│   │   ├── AccordionMenu/            # FAQ Section project
│   │   ├── BirthdayTracker/          # Birthday Tracker project
│   │   ├── GroceryManager/           # Grocery Manager project
│   │   ├── HeaderNavigation/         # Header Navigation project
│   │   ├── Home/                     # Home page
│   │   ├── RandomTextGen/            # Random Text Generator project
│   │   ├── RestaurantMenu/           # Restaurant Menu project
│   │   ├── ReviewsSlider/            # Reviews Slider project
│   │   ├── ShoppingCart/             # Shopping Cart project
│   │   ├── SidebarWithModal/         # Sidebar with Modal project
│   │   └── StripeThemeDesign/        # Stripe Theme Design project
│   │   └── index.jsx                 # Pages exports
│   ├── App.jsx                       # Main application component
│   ├── App.css                       # Application styles
│   └── main.jsx                      # Application entry point
├── index.html                        # Root HTML file
├── tailwind.config.js                # Tailwind CSS configuration 
└── package.json                      # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js and npm installed
- A code editor like VS Code
- Git (optional, for cloning the repository)

### Setup Instructions

1. **Clone the Repository**

    ```bash
    git clone https://github.com/ahadalireach/react.projects.hub.git
    ```

    Alternatively, download and unzip the repository.

2. **Install Dependencies**

    - Navigate to the project directory:

      ```bash
      cd react.projects.hub
      ```

    - Install the required packages:

      ```bash
      npm install
      ```

3. **Run the Development Server**

    Start the application locally:

    ```bash
    npm run dev
    ```

4. **Access the Application**

    Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the app.

## Live Demo

- **Live Web**: [React Projects Hub](http://13.60.247.46)
- **GitHub Repository**: [Give it a Star!](https://github.com/ahadalireach/react.projects.hub)

## Contact

For any questions, suggestions, or feedback, feel free to contact me at [ahadali.reach@gmail.com](mailto:ahadali.reach@gmail.com).
