import React from 'react';

export default function HeaderItem({ title, Icon }) {
    return (
        <div>
            <Icon className="h-8 mb-1" />
            <p>{title}</p>
        </div>
    );
}
