import React from 'react';

export default function Expression({children}) {
    return (
        <p style={{
            fontSize: '1.5em',
            fontWeight: 'bold',
            margin: '1em',
        }}>
        {children}
        </p>
    );
}
