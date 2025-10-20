# Leonardo's Portfolio (React Version)

This project is a complete conversion of a static HTML/CSS/JS portfolio website into a dynamic, single-page application (SPA) built with React.js.

The primary goal was to refactor the original static code into a modern React application, focusing on componentization, routing, and state management with React Hooks.

## Features

* **Component Structure:** The static HTML (`home.html`, `portifolio.html`) was broken down into reusable React components (e.g., `Home`, `Portfolio`, `Watch`).
* **Client-Side Routing:** Navigation is handled by `react-router-dom`, allowing for seamless page transitions without a full-page reload.
* **React Hooks:** The original JavaScript for the horizontal scroll gallery was re-implemented using the `useRef` and `useEffect` hooks to interact with the DOM in the "React way".
* **Scoped Styling:** Each component imports its own CSS file (`Home.css`, `Portfolio.css`) to keep styles encapsulated.

## Technologies Used

* React.js
* React Router (`react-router-dom`)
* CSS3
* HTML5
