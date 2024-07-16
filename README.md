# MOVIEFIX

MOVIEFIX is a web application that allows users to browse popular movies based on the year of release and genre. 
It uses the TMDB API to fetch movie data and displays it in an infinite scrolling grid. The application is styled to 
resemble Netflix, with a focus on user-friendly design and functionality.

## Live Link

You can access the live version of the project https://6696c2ddb2875d100db6dbac--charming-kataifi-a95199.netlify.app/

## Features

- Infinite scrolling to load movies based on the year of release.
- Filter movies by genre.
- Responsive design to ensure a great user experience on both desktop and mobile devices.
- Detailed movie information displayed in a styled grid.

## Requirements

### Covered

- **React:** Utilized for building the UI components.
- **Axios:** Used for making API requests to the TMDB API.
- **TMDB API:** Used to fetch movie data.
- **React Hooks:** Including useState, useEffect, useRef, and useCallback for state management and side effects.
- **Material-UI:** For grid layout and styling components.
- **CSS:** Custom CSS for styling the application, including a Netflix-like title.

### Not Covered

- **Authentication:** No user authentication or authorization is implemented.
- **Error Handling:** Basic error handling for API requests, but no comprehensive error boundary implementation.
- **Performance Optimization:** No performance optimizations are implemented, such as lazy loading or code splitting.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/moviefix.git
cd moviefix
npm Install
npm run dev

### use the Edge browser 