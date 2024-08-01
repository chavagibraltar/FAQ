# FAQ - Dreams Event Website
A Drupal project containing questions and answers about the production company - dreams event

## Project Description

The 'Dream Events' project is an event planning website built using Drupal 10 and utilizes advanced technologies like React 18 for the frontend. The purpose of the website is to offer a rich and impressive user experience for event planners, utilizing interactive and modern interfaces.

The website features a comprehensive questions and answers section categorized by topics to assist users in finding relevant information quickly and efficiently.

This project employs Webpack for building JavaScript and CSS files optimally. React is used for the user interface, and JSON:API is used for fetching data from Drupal. Sass is used for advanced styling and TypeScript for type checking and improving code quality.

The website is designed to be easy to maintain and extend, with a focus on user experience and accessibility. The project includes custom theme templates and dedicated plugins to ensure high performance. Additionally, the MUI design library is used.

## Technologies and Plugins

The website uses the following technologies and plugins:
- **Drupal 10**: Powerful content management system.
- **React 18**: Library for building user interfaces.
- **Webpack**: Tool for building and bundling JavaScript files.
- **JSON:API**: API interface for Drupal.
- **Sass**: For advanced styling.
- **TypeScript**: For type checking and improving code quality.
- **image-webpack-loader**: For image optimization.
- **MUI**: Design library for React.

## Required Versions

Before you begin the installation, make sure you have the following versions installed:
- **Composer**: 2.2.6
- **Docker**: Latest version (recommended)
- **DDEV**: v1.23.3
- **Node.js**: v22.5.1
- **npm**: 10.8.2
- **Drush**: 12.5.2

## Project Setup Steps

Follow these steps to set up the project:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/dream-events.git
   cd dream-events
   ```
2. **Start the DDEV environment**:
    ```bash
    ddev start
    ```

3. **Install Drupal dependencies**:
    ```bash
    ddev composer install
    ```

4. **Import the database and files**:
    ```bash
    ddev import-db --src=path/to/database.sql.gz
    ddev import-files --src=path/to/files.tar.gz
    ```

5. **Run Drupal database updates and cache clear**:
    ```bash
    ddev drush updatedb
    ddev drush cr
    ```

6. **Navigate to the custom theme directory and install Node dependencies**:
    ```bash
    cd web/themes/custom/my_new_theme
    npm install
    ```

7. **Build the React application**:
    ```bash
    npm run build
    ```

## Running and Testing
The Drupal site will be available at: https://linnovate.ddev.site:8443/
The React frontend will be available according to the Webpack configuration (usually at http://localhost:3000).

## Directory Structure
**web/themes/custom/my_new_theme:**  Contains the custom Drupal theme templates, files, and configurations.
**web/themes/custom/my_new_theme/js/src:**  Contains the React source code.
**webpack.config.js:**  Webpack configuration file with all custom settings and plugins.

## Documentation
Drupal Documentation
React Documentation
Webpack Documentation

## Support and Contributions
If you encounter any issues or have questions, please contact the project manager. 
Contributions are welcome

please submit pull requests with clear explanations of the changes made.

## Contact
For additional questions or issues, you can contact the project manager at c0548503101@gmail.com.

## License
This project is licensed under the MIT License.
