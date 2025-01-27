import React, {Component} from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export default class UserManagementApp extends Component {
  state = {
    users: [],
    form: {id: null, firstName: '', lastName: '', email: '', department: ''},
    error: null,
  }

  componentDidMount() {
    this.fetchUsers()
  }

  fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL)
      this.setState({users: response.data})
    } catch (err) {
      this.setState({error: 'Failed to fetch users.'})
    }
  }

  handleFormChange = (name, value) => {
    this.setState({form: {...this.state.form, [name]: value}})
  }

  handleAddUser = async () => {
    try {
      const response = await axios.post(API_URL, this.state.form)
      this.setState({
        users: [...this.state.users, response.data],
        form: {
          id: null,
          firstName: '',
          lastName: '',
          email: '',
          department: '',
        },
      })
    } catch (err) {
      this.setState({error: 'Failed to add user.'})
    }
  }

  handleEditUser = user => {
    this.setState({form: user})
  }

  handleUpdateUser = async () => {
    try {
      await axios.put(`${API_URL}/${this.state.form.id}`, this.state.form)
      this.setState({
        users: this.state.users.map(user =>
          user.id === this.state.form.id ? this.state.form : user,
        ),
        form: {
          id: null,
          firstName: '',
          lastName: '',
          email: '',
          department: '',
        },
      })
    } catch (err) {
      this.setState({error: 'Failed to update user.'})
    }
  }

  handleDeleteUser = async id => {
    try {
      await axios.delete(`${API_URL}/${id}`)
      this.setState({users: this.state.users.filter(user => user.id !== id)})
    } catch (err) {
      this.setState({error: 'Failed to delete user.'})
    }
  }

  render() {
    return (
      <ErrorBoundary>
        <div className='p-6 max-w-4xl mx-auto'>
          <h1 className='text-2xl font-bold mb-4'>User Management</h1>
          {this.state.error && (
            <p className='text-red-500'>{this.state.error}</p>
          )}
          <UserList
            users={this.state.users}
            onEdit={this.handleEditUser}
            onDelete={this.handleDeleteUser}
          />
          <UserForm
            form={this.state.form}
            onChange={this.handleFormChange}
            onSubmit={
              this.state.form.id ? this.handleUpdateUser : this.handleAddUser
            }
          />
        </div>
      </ErrorBoundary>
    )
  }
}
