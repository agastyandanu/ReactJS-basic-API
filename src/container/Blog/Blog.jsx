import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import BlogComponent from '../../component/BlogComponent/BlogComponent';
// import axios from 'axios';

class Blog extends Component{
    state = {
        post: []
    }

    componentDidMount(){
        //menggunakan fetch - default react js
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            this.setState({
                post: json
            })
        })

        //menggunakan axios
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then((response) => {
        //     this.setState({
        //         post: response.data
        //     })
        // })
    }

    render(){
        return(
            <Fragment>
                <div className="container">
                    <hr />
                    <h1 className="text-center">React JS - API BLOG</h1>
                    <hr />
                    { //mapping/looping data json
                        this.state.post.map(post => {
                            return(
                                <BlogComponent key={post.id} title={post.title} desc={post.body} />
                            ) 
                        })
                    }                    
                </div>
            </Fragment>
        )
    }
}

export default Blog;