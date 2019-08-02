import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = (props) => {

    const { title, imageUrl, size, history, match, linkUrl } = props;

    return (
        <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`, height: '100%', width: '100%' }} />
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);