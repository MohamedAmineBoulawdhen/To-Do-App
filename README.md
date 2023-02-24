# ToDo Application with Redux

In this project, I will be building a ToDo application using Redux to manage the global state.I will the chef principle of this project and it can be expanded as needed.

## Components

I will need to create the following components:

- `AddTask`: A component that allows the user to add a new task.
- `ListTask`: A component that displays the list of tasks.
- `Task`: A component that represents an individual task.

Each task will have the following attributes:

- `id`: A unique identifier for the task.
- `description`: A string that describes the task.
- `isDone`: A boolean that indicates whether the task has been completed or not.

## Functionality

The user should be able to perform the following actions:

- Add a new task: The `AddTask` component should allow the user to enter a description for a new task and add it to the list of tasks.
- Filter tasks: The `ListTask` component should allow the user to filter the list of tasks by whether they are done or not.
- Edit a task: The `Task` component should allow the user to edit the description of a task.

## Implementation

I will be using Redux to manage the global state of the application. Specifically, I will create the following Redux components:

- `store`: A Redux store that holds the global state of the application.
- `actions`: Redux actions that define the possible changes to the state.
- `reducers`: Redux reducers that implement the logic for the state changes.

I will also use React-Redux to connect my React components to the Redux store.

## Getting Started


1. Create a new React application using `create-react-app`.
2. Install the following dependencies: npm install redux react-redux react.
3. Create the Redux components (`store`, `actions`, `reducers`).
4. Create the React components (`AddTask`, `ListTask`, `Task`).
5. Use `react-redux` to connect the React components to the Redux store.
6. Implement the functionality (adding, filtering, editing tasks).
7. Style the application as desired.

## Conclusion

In this project, I have built a ToDo application using Redux to manage the global state. I have created Redux components for the store, actions, and reducers, and used React-Redux to connect my React components to the Redux store. I have implemented the functionality to add, filter, and edit tasks, and styled the application as desired.

