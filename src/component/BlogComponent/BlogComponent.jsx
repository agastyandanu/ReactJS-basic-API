import React from 'react';

const BlogComponent = (props) => {
    return(
        <div className="row shadow m-2 p-4">
            <div className="col-md-4">
                <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="img" className="img-fluid" />
            </div>
            <div className="col-md-8">
                <div className="row">
                    <div className="col">
                        <h3>{props.title}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogComponent;