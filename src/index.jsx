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
        //const messageValues = {error,success} = this.props
        // Pass props to state, and then clear state
        this.setState({
            error: this.props.error,
            success: this.props.success,
        });
        if(!this.props.notHide) {
            // Set timeout 
            setTimeout(() => {
                this.setState({
                    error: '',
                    success: ''
                })
            },this.props.timeout || 1500)
        }
    }

    render () {

        const {error,success} = this.state;
        const {style,color} = this.props;

        //return <FlashMessage success={this.props.success} message={this.props.message} />
        if(error) {
           return <FlashMessage style={style} color={color} error={error} message={error} />
        } else if(success) {
            return <FlashMessage style={style} color={color} success={success} message={success} />
        } else {
            return null
        }
    }
}

export default FlashMessages;