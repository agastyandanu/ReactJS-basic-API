import React from 'react';
import './HelloComponent.css';

const HelloComponent = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt="" />
            <h2 className="title">{ props.title }</h2>
            <span>Rp { props.price }</span>
        </div>
    )
}

HelloComponent.defaultProps = {
    title: 'No Title',
    price: '0',
    img: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
}

export default HelloComponent;