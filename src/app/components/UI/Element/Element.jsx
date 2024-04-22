import React from 'react';
import './style.css';

const Element = ({children,tag,className}) => {
    const Tag = tag;
    return (
<>
<Tag className={className}>
{children}
</Tag>
</>
    );
}

export default Element;
