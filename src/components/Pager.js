import React, { Component } from 'react'
import { withRouter } from 'react-router'


export default withRouter(class Pager extends Component {
    // constructor() {
    //     super()
    // }

    navigate = (value) => {
        value = Number(value)
        const { count } = this.props
        const max = Math.ceil(count / 50)
        if (value >= max || value < 0) return
        let pathname = this.props.location.pathname.split('/')
        if (isNaN(Number(pathname.slice(-1)[0]))) pathname.push(0)
        const popped = Number(pathname.pop())
        if (Number(popped) === Number(value)) return
        pathname.push(value)
        this.props.history.push(pathname.join('/'))

    }

    render() {
        const { count } = this.props
        const max = Math.ceil(count / 50)
        const pathname = this.props.location.pathname.split('/')
        let userPageIndex = Number(pathname.pop())
        if (isNaN(userPageIndex)) userPageIndex = 0
        userPageIndex += 1
        return (
            <div>
                <div>
                    {count} Results. Page {userPageIndex} of {max}
                </div>
                <div className="btn-group">
                    <button className={`btn btn-info ${userPageIndex === 1 ? 'disabled' : ''}`} onClick={() => { this.navigate(0) }} type="button">First</button>
                    <button className={`btn btn-info ${userPageIndex === 1 ? 'disabled' : ''}`} onClick={() => { this.navigate(userPageIndex - 2) }} type="button">Prev</button>
                    <a className="btn btn-primary" href={`#/users/${userPageIndex - 1}`}>{userPageIndex}</a>
                    <button className={`btn btn-info ${userPageIndex === max ? 'disabled' : ''}`} onClick={() => { this.navigate(userPageIndex) }} type="button">Next</button>
                    <button className={`btn btn-info ${userPageIndex === max ? 'disabled' : ''}`} onClick={() => { this.navigate(max - 1) }} type="button">Last</button>
                </div>
            </div>
        )
    }
})
