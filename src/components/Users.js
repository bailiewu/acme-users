import React, { Component } from 'react'
import axios from 'axios'
import Pager from './pager';
import { withRouter } from 'react-router'
import Search from './Search'
import Hilite from './Hilite'

export default withRouter(class Users extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            users: [],
        }
    }

    componentDidMount() {
        const path = this.props.location.pathname
        // console.log(path)
        axios.get(`https://acme-users-api.herokuapp.com/api${path}`)
            .then(response => response.data)
            .then(users => this.setState(users))
            .catch(er => console.log(er))
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            axios.get(`https://acme-users-api.herokuapp.com/api${this.props.location.pathname}`)
                .then(response => response.data)
                .then(users => this.setState(users))
        }
    }

    render() {
        // console.log(this.state)
        const { count, users } = this.state
        // console.log(this.props)
        return (
            <div>
                <Pager count={count} />
                <Search />

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Middle Name</th>
                            <th>Email</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.firstName}</td>
                                    {/* <td><Hilite component={user.firstName} /></td> */}
                                    <td>{user.lastName}</td>
                                    <td>{user.middleName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.title}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
})
