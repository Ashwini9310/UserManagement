import React, { Component } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2 className="text-red-500">Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

class UserList extends Component {
  render() {
    return (
      <div className="grid gap-4 mb-4">
        {this.props.users.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg flex justify-between items-center">
            <div>
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Department:</strong> {user.department}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => this.props.onEdit(user)}>Edit</button>
              <button onClick={() => this.props.onDelete(user.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

class UserForm extends Component {
  handleChange = (e) => {
    this.props.onChange(e.target.name, e.target.value);
  };

  render() {
    const { form, onSubmit } = this.props;
    return (
      <div className="border p-4 rounded-lg">
        <h2 className="text-xl mb-2">{form.id ? "Edit User" : "Add User"}</h2>
        <input name="firstName" placeholder="First Name" value={form.firstName} onChange={this.handleChange} />
        <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={this.handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={this.handleChange} />
        <input name="department" placeholder="Department" value={form.department} onChange={this.handleChange} />
        <button className="mt-2" onClick={onSubmit}>{form.id ? "Update User" : "Add User"}</button>
      </div>
    );
  }
}

export default class UserManagementApp extends Component {
  state = {
    users: [],
    form: { id: null, firstName: "", lastName: "", email: "", department: "" },
    error: null,
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      this.setState({ users: response.data });
    } catch (err) {
      this.setState({ error: "Failed to fetch users." });
    }
  };

  handleFormChange = (name, value) => {
    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  handleAddUser = async () => {
    try {
      const response = await axios.post(API_URL, this.state.form);
      this.setState({
        users: [...this.state.users, response.data],
        form: { id: null, firstName: "", lastName: "", email: "", department: "" },
      });
    } catch (err) {
      this.setState({ error: "Failed to add user." });
    }
  };

  handleEditUser = (user) => {
    this.setState({ form: user });
  };

  handleUpdateUser = async () => {
    try {
      await axios.put(`${API_URL}/${this.state.form.id}`, this.state.form);
      this.setState({
        users: this.state.users.map((user) => (user.id === this.state.form.id ? this.state.form : user)),
        form: { id: null, firstName: "", lastName: "", email: "", department: "" },
      });
    } catch (err) {
      this.setState({ error: "Failed to update user." });
    }
  };

  handleDeleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      this.setState({ users: this.state.users.filter((user) => user.id !== id) });
    } catch (err) {
      this.setState({ error: "Failed to delete user." });
    }
  };

  render() {
    return (
      <ErrorBoundary>
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">User Management</h1>
          {this.state.error && <p className="text-red-500">{this.state.error}</p>}
          <UserList users={this.state.users} onEdit={this.handleEditUser} onDelete={this.handleDeleteUser} />
          <UserForm form={this.state.form} onChange={this.handleFormChange} onSubmit={this.state.form.id ? this.handleUpdateUser : this.handleAddUser} />
        </div>
      </ErrorBoundary>
    );
  }
}
