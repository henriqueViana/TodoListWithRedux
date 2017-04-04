import React from 'react';

export default props => (
    <div className={'alert alert-' + props.type} role='alert'>{props.message}</div>
)

