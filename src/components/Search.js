import React, { Component } from 'react'
import { withRouter } from 'react-router'

export default withRouter(class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: this.props.location.pathname.split('/')[3] || ''
        }
    }
    handleChange = (evt) => {
        this.setState({
            search: evt.target.value
        })
    }
    handleSubmit = (val) => {
        // console.log(this.props.location.pathname.split('/'))
        if (/*this.props.location.pathname.split('/')[3] === this.state.search ||*/ this.state.search.length < 1) return
        if (val === 'submit' && !(this.props.location.pathname.split('/')[3] === this.state.search)) return this.props.history.push(`/users/search/${this.state.search}`)
        if (this.props.location.pathname.split('/')[2] !== 'search') return
        this.props.history.push('/users')
        this.setState({ search: '' })
    }
    render() {
        const sameSearch = this.props.location.pathname.split('/')[3] === this.state.search
        const noClear = this.props.location.pathname.split('/')[2] !== 'search'
        return (
            <div className="m-2">
                <div className="input-group">
                    <input type="text" onChange={this.handleChange} value={this.state.search} placeholder="Search Results" className="form-control" />
                    <div className="input-group-append">
                        <button className={`btn btn-primary ${this.state.search.length <= 0 || sameSearch ? 'disabled' : ''}`} onClick={() => { this.handleSubmit('submit') }} type="submit">Go</button>
                        <button className={`btn btn-info ${this.state.search.length <= 0 || noClear ? 'disabled' : ''}`} onClick={() => { this.handleSubmit('clear') }} type="reset">Clear</button>
                    </div>
                </div>

            </div >
        )
    }
})
