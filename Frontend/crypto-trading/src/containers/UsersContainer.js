import React, { Component } from 'react'
import Users from '../components/Users'

export default class UsersContainer extends Component {
    render() {
        let users = this.props.users
        return (
            <div className='main'>
                <h1>Users</h1>
                {users.map((user) => <Users users={user} key={user.id} />)}
            </div>
        )
    }
}
