import React, {Component} from 'react'
import FlashMessage from './flashMessage';

/*
    Add handler to timeout flash message
*/

class FlashMessages extends Component {

    constructor(props) {
        super(props)
        //console.log('props ',props);
        this.state = {
            error: '',
            success: ''
        }
    }

    componentDidMount() {
        console.log('componentDidMount',this.props);
        // Pass props to state, and then clear state
        this.setState(this.props);
        // Set timeout 
        setTimeout(() => {
            this.setState({
                error: '',
                success: ''
            })
        },1500)
    }

    render () {

        const {error,success} = this.state;

        //return <FlashMessage success={this.props.success} message={this.props.message} />
        if(error) {
           return <FlashMessage error={error} message={error} />
        } else if(success) {
            return <FlashMessage success={success} message={success} />
        } else {
            return null
        }
    }
}

export default FlashMessages;