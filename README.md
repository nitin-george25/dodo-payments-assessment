# DodopaymentsAssessment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## About the app

- Overview -> mock page that displays the UI
- Transactions: 
  - Can be accessed in the "Transactions" tab in the left side menu
  - lists transactions from a mock api
  - transactions can be filtered and sorted
- User Settings:
  - Can be accessed by clicking on the user profile pic / name "Superstars AI"
  - A mock form with basic validation

## Design and Development Documentation

### Overview

This documentation outlines the design and development process for the Dodo Payments' Merchant Dashboard. The dashboard was designed to be a user-friendly, responsive web application that allows digital businesses to manage their global payments, compliance, and financial reporting. The key features implemented include an overview of key metrics, a table of recent transactions, a compliance alerts section, a navigation menu, and a user settings form.

### Development Process
1. Initial Setup
- Framework Choice: Angular was chosen as the framework for its robust features, native typescript support and strong community support.
- Project Initialization: The project was initialized using Angular CLI to quickly scaffold the application structure.
Styling: SCSS was used for styling to take advantage of its features like variables and nesting.

2. User Interface Design
- Figma Design: The design provided in Figma was closely followed to ensure a consistent and visually appealing UI.
- Component Library: ng-zorro-antd was chosen for its comprehensive set of components, especially the select component, which is highly customizable and provides a better user experience compared to other libraries.

3. Dashboard Overview
- Key Metrics Display: A section was created to display total revenue, transactions, and other key metrics using Angular components and ng-zorro-antd cards.

4. Transactions Table
- Table Component: The transactions table was implemented using the MatTableModule from Angular Material for its powerful features like sorting, pagination, and filtering.
- Filtering and Sorting: Custom filter components were built using ng-zorro-antd select components for better appearance and functionality. Sorting was handled using Angular Material's MatSort.

5. Compliance Alerts and Notifications
Alerts Section: A section was added to display compliance alerts and notifications

6. Navigation Menu
- Menu Component: A navigation menu was implemented with a sleek and modern look.
- Routing: Angular Router was used to handle navigation between different sections of the dashboard.
7. User Settings Form
- Form Implementation: The user settings form was built using Angular's Reactive Forms. Given the simplicity of the form, no additional form libraries were used to keep the build size optimized.
- Validation: Basic form validation was implemented using Angular's form validation features.
8. Mock Data and API Calls
- Mock Data: Mock data was used to simulate API calls. The data was managed using Angular services and HttpClient.
- Error Handling: Basic error handling was implemented to manage potential issues with data fetching.

### Decision Rationale
1. ng-zorro-antd for Filter Component
- Appearance: ng-zorro-antd provides highly customizable and visually appealing components that align well with the Figma design.
- Select Component: The select component from ng-zorro-antd offers better functionality and appearance compared to other libraries, making it an ideal choice for the filter component.

2. No Form Library
- Simplicity: The form implementation was straightforward, with basic input fields and validation. Using Angular's built-in form capabilities was sufficient.
- Build Size Optimization: Avoiding additional form libraries helped keep the build size smaller, improving the application's performance and load times.

### Challenges and Time Constraints
- Time Factor: The limited time frame of 2-3 days influenced several decisions, prioritizing core functionality and a responsive design over additional features.
- Trade-offs: Some advanced features and optimizations were deferred to ensure the primary requirements were met within the given timeline.
Future Enhancements
- Unit Tests: Adding comprehensive unit tests for critical components and functions to ensure code quality and reliability.

### Conclusion
The development of the Dodo Payments' Merchant Dashboard was guided by a commitment to creating a user-friendly and visually appealing application. The choice of Angular, ng-zorro-antd, and the exclusion of additional form libraries were strategic decisions aimed at meeting the project's requirements within the given time frame while ensuring performance and build size optimization. Future enhancements and thorough testing will further refine the application, enhancing its functionality and user experience.

