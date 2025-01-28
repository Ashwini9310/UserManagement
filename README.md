# User Management App

A React-based User Management Application that allows users to view, add, edit, and delete user details using a mock backend API (`JSONPlaceholder`).

## Features

- **View Users:** Fetch and display a list of users with details like ID, First Name, Last Name, Email, and Department.
- **Add Users:** Add a new user by submitting a form. Simulates adding a user to the list.
- **Edit Users:** Edit existing user details and update them in the list.
- **Delete Users:** Remove users from the list by clicking the delete button.
- **Error Handling:** Gracefully handles API errors and displays user-friendly messages.

---

## Technology Stack

- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **Mock API:** JSONPlaceholder (https://jsonplaceholder.typicode.com/)

---

## Installation and Setup

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd user-management
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Application:**

   ```bash
   npm start
   ```

4. Open the application in your browser at `http://localhost:3000`.

---

## File Structure

```
/src
  |-- UserManagementApp.jsx  # Main component containing the entire application
  |-- components/
      |-- UserList.jsx        # Component to display the list of users
      |-- UserForm.jsx        # Component to handle adding and editing user details
      |-- ErrorBoundary.jsx   # Component to catch and display errors
  |-- App.js                 # Wrapper to render the application
  |-- index.js               # Entry point of the React app
```

---

## API Endpoints

This app uses `JSONPlaceholder` as a mock backend API:

- **Fetch Users:** `GET /users`
- **Add User:** `POST /users`
- **Edit User:** `PUT /users/{id}`
- **Delete User:** `DELETE /users/{id}`

---

## Deployment

### Deploy with Vercel

1. Install Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Build the project:

   ```bash
   npm run build
   ```

3. Deploy using Vercel:

   ```bash
   vercel
   ```

4. Follow the prompts, and your app will be live at `https://your-project-name.vercel.app`.

---

## How to Use

1. **View Users:** The homepage displays a list of users fetched from the API.
2. **Add User:** Click the "Add User" button, fill in the form, and submit.
3. **Edit User:** Click the "Edit" button next to a user, modify their details, and update.
4. **Delete User:** Click the "Delete" button to remove a user from the list.

---

## Future Enhancements

- Implement search and filter functionality.
- Add pagination for large datasets.
- Replace `JSONPlaceholder` with a real backend API.
- Enhance styling and add animations.

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

## Acknowledgements

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing a free mock API.
- React.js for the frontend framework.
- Tailwind CSS for quick and responsive styling.

