import React, { Component } from 'react'
// import axios from 'axios'
import Nav from './Nav'
import { HashRouter, Route } from 'react-router-dom'
import Users from './Users'

const home = () => {
    return <div>Home text, build this site... </div>
}

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Acme Users</h1>
                <HashRouter>
                    <Nav />
                    <Route exact path="/" component={home} />
                    <Route path="/users/" component={Users} />
                    {/* <Route exact path="/users/search/:index?" component={Users} /> */}
                </HashRouter>
            </div>
        )
    }
}
