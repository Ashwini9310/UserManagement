class UserForm extends Component {
  handleChange = e => {
    this.props.onChange(e.target.name, e.target.value)
  }

  render() {
    const {form, onSubmit} = this.props
    return (
      <div className='border p-4 rounded-lg'>
        <h2 className='text-xl mb-2'>{form.id ? 'Edit User' : 'Add User'}</h2>
        <input
          name='firstName'
          placeholder='First Name'
          value={form.firstName}
          onChange={this.handleChange}
        />
        <input
          name='lastName'
          placeholder='Last Name'
          value={form.lastName}
          onChange={this.handleChange}
        />
        <input
          name='email'
          placeholder='Email'
          value={form.email}
          onChange={this.handleChange}
        />
        <input
          name='department'
          placeholder='Department'
          value={form.department}
          onChange={this.handleChange}
        />
        <button className='mt-2' onClick={onSubmit}>
          {form.id ? 'Update User' : 'Add User'}
        </button>
      </div>
    )
  }
}

export default UserForm
