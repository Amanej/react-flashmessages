import React from 'react'

import FlashMessages from '../../src/index.jsx'

class Examples extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: [
                {
                    success: 'Something great',
                    error: '',
                    key: 1
                },
                {
                    success: '',
                    error: 'Something wrong',
                    key: 4
                }
            ]
        }
    }

    render() {
        return (
            <>
                {this.state.messages.map(m => {
                    return <FlashMessages 
                        success={m.success} error={m.error} key={m.key} 
                    />
                })}
                <button
                    onClick={() => {
                        console.log(this.state.messages);
                        this.setState({
                            messages: [{error: 'Random error', success: '', key: Math.random()}]
                        })
                    }}
                >Add error</button>
                <button
                    onClick={() => {
                        console.log(this.state.messages);
                        this.setState({
                            messages: [{success: 'Random success', error: '', key: Math.random()}]
                        })
                    }}
                >Add success</button>
                <h3>Autohide false</h3>
                <FlashMessages 
                        success={''} error={'This error should persist.'} notHide={true} />
                <h3>Custom Timeout: 10 seconds</h3>
                <FlashMessages 
                        success={''} error={'This error should persist.'} timeout={10000} />
                <h3>Styling</h3>
                <FlashMessages 
                    success={''} error={'This error should persist.'} notHide={true} 
                    style={{
                        background: 'darkred',
                        border: '1px solid red',
                        borderRadius: '4px'
                    }}
                    color={{
                        error: '#fff'
                    }}
                />
            </>
        )
    }
}

export default Examples