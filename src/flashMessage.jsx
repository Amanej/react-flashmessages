import React from 'react';
import s from 'styled-components';

export default (props => {
    const colors = {
        error: (props.color && props.color.error) ? props.color.error : '#B00000',
        success: (props.color && props.color.success) ? props.color.success : '#2EC94F'
    }
    return (
        <FlashMessage colors={colors} error={props.error}>{props.message}</FlashMessage>
    )
}) 


const FlashMessage = s.span`
color: ${props => props.error ? props.colors.error : props.colors.success};
position: sticky;
display: block;
top: 0;
background: white;
width: 100%;
z-index: 1000;
padding: 10px;
transition: 0.4s;  
`