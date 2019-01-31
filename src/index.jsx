import React, {Component} from 'react'
import FlashMessage from './flashMessage';

/*
    Add handler to timeout flash message
*/

class FlashMessages extends Component {


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