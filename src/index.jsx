import React, {Component} from 'react'
import FlashMessage from './flashMessage';

/*
    Add handler to timeout flash message
*/

class FlashMessages extends Component {

    componentDidUpdate(formerProps) {
        // Pass props to state, and then clear state
        // Set timeout 
    }

    render () {
        if(this.props.error) {
            <FlashMessage error={this.props.error} />
        } else if(this.props.success) {
            <FlashMessage success={this.props.success} />
        } else {
            return null
        }
    }
}

export default FlashMessages;