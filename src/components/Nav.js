import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

export default withRouter(class Nav extends Component {
    render() {
        const userPath = this.props.location.pathname.split('/')[1] === 'users'
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/" className={`nav-link ${this.props.location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/users" className={`nav-link ${userPath ? 'active' : ''}`}>Users</Link>
                </li>
            </ul>
        )
    }
})
