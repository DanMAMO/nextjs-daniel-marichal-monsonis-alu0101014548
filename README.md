[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=12789715)


# DMSI Lab: Next.js with OpenAI Project

This README provides a comprehensive overview of the DMSI Lab project, which integrates Next.js with OpenAI's API. The project aims to create a web application with unique features like pet name generation and image fetching. However, due to limitations with the API quota, certain functionalities could not be fully implemented.

## Project Overview

This project is part of the DMSI Lab curriculum, focusing on the development and maintenance of information systems. It involves building a Node.js application using the Next.js framework and integrating it with OpenAI's API.

## Features

The project was intended to have the following features:

1. **Pet Name Generation**: A feature allowing users to input an animal type and receive generated medieval hero names for their pet. 
2. **Image Fetching**: The ability to fetch and display images based on the provided animal name.

Due to the exhaustion of the API quota, these features were not fully implemented in the final project. However, the codebase is structured to support these functionalities once the API access is restored.

## Project Structure

The project follows a standard Next.js application structure:

- `pages`: Contains the main pages of the application, including the home page, about page, pet name generator, and image fetcher.
- `api`: Houses the backend logic for interacting with the OpenAI API.
- `public`: Stores static assets like images and icons.
- `docs`: Documentation and images explaining various aspects of the project.
- `styles`: CSS modules for styling the application.

## Setup and Installation

To set up the project:

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Set up the `.env` file with your OpenAI API key.
4. Start the development server using `npm run dev`.

## Challenges and Limitations

The main challenge faced during this project was the exhaustion of the OpenAI API quota. This limitation prevented the full realization of the pet name generation and image fetching features. However, the application's structure and code are ready for these features to be activated once the API access is restored.

## Future Enhancements

Once the API quota is reinstated, the following enhancements can be made:

1. Fully functional pet name generation.
2. Image fetching and display based on user input.
3. Additional styling and user interface improvements.

## Conclusion

This DMSI Lab project represents an important learning experience in integrating external APIs with a Next.js application. Despite the limitations faced, the project lays a solid foundation for future enhancements and full functionality.

---x---

For any queries or contributions, feel free to open an issue or a pull request in the project's GitHub repository. Your feedback and contributions are highly appreciated.

## OpenAI API Queries

- Various requested queries have been executed:

  - Retrieve all models.
  - Retrieve information about a specific model.
  - Retrieve a awesome image*.
  - Retrieve a completion*.
  - Retrieve a moderation*.

## Pet Name Generator Website

  - The file `index.js` presents the interface for the homepage and the code to make a fetch request for a random name based on the user's input.

  - The fetch redirects the query to the `/api/generate` route where an unnamed exported function creates the completion, returning the pet's name.


## Deployment on Netlify

  - The project is deployed using Netlify's UI. 

## Deployment on Vercel

  - The deployment is also carried out on the Vercel development and deployment platform
## Dynamic Routes Exercise

- The exercise involves creating a blog with various posts using dynamic routing mechanisms.
- See the following functionalities used in the code:

### Functionalities:

#### 1. Imports:

- Imports necessary elements like the header (`Head`), layout (`Layout`), styles (`utilStyles`), functions to get sorted data (`getSortedPostsData`), links (`Link`), and the date component (`Date`).

#### 2. Main Function (`Home`):

- Defines a functional component named `Home` that represents the main page of the blog.
- Uses the `Layout` component and sets the page title with the site name (`siteTitle`).
- Contains two sections: one for a personalized introduction and another to display blog posts.

#### 3. Personalized Introduction:

- The first section includes a paragraph for a brief personal introduction.

#### 4. Blog Post Listing:

- The second section presents a header (`h2`) titled "Blog".
- Displays a list (`ul`) of links to blog posts.
- Each post is listed with a link (`Link`) to its details, the post title, and the publication date.

#### 5. Static Data Fetching (`getStaticProps`):

- Uses the `getStaticProps` function to fetch and sort all blog post data.
- Returns these data as properties (`allPostsData`) for rendering the page.

#### Help from colleagues was asked for solving this las task.
---
and images could not be realized in this iteration of the project.