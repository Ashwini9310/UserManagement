class UserList extends Component {
  render() {
    return (
      <div className='grid gap-4 mb-4'>
        {this.props.users.map(user => (
          <div
            key={user.id}
            className='p-4 border rounded-lg flex justify-between items-center'
          >
            <div>
              <p>
                <strong>ID:</strong> {user.id}
              </p>
              <p>
                <strong>Name:</strong> {user.firstName} {user.lastName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Department:</strong> {user.department}
              </p>
            </div>
            <div className='flex gap-2'>
              <button onClick={() => this.props.onEdit(user)}>Edit</button>
              <button onClick={() => this.props.onDelete(user.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default UserList
