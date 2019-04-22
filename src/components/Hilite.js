import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export default withRouter(class Hilite extends Component {
    replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g', replace))
    }

    render() {
        const { component } = this.props
        const search = this.props.location.pathname.split('/')[3]
        if (!search) return (component)
        // component.replace(search, `<mark>${search}</mark>`)
        let result = this.replaceAll(component, search, `<mark>${search}</mark>`)

        console.log(search, component, result)
        return (
            component
        )
    }
})
