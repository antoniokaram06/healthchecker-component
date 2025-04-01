# Healhchecker Component for export

This project is HealthChecker Component using Wax to check the data of APIs, and providing all the necessary factors for display. You can import it to your React project, configure the props and use the generic component for handling APIs.

### Techstack
* React
* Tailwind
* Shad UI
* Typescript
* Vite
* Wax

### Structure
The project is using Wax's Healthchecker to regularly check for API's score. Then it wrap the data up in dedicated service, that will be passed as a prop to custom component. On the service declaration level devs may add list of checks and default providers.