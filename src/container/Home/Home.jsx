import React, {Component} from 'react';
// import HelloComponent from '../../component/HelloComponent';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
// import Product from '../Product/Product';
// import Blog from '../Blog/Blog';
import Food from '../Food/Food';

class Home extends Component {

    state = {
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 5000);
    }

    render(){
        return(
            <div>
                {/* <hr />
                <h1>Counter</h1>
                <hr />
                <Product />
                <hr />
                <HelloComponent title="Cute Cat 1" price="100.000" img="https://media.istockphoto.com/photos/kitten-at-home-garden-wall-picture-id1273661469?b=1&k=20&m=1273661469&s=170667a&w=0&h=K-b-88J89oSBIwbD0WhhDoOvybcbjfePJoOHS0grHHA="/>
                <HelloComponent title="Cute Cat 2" price="200.000" img="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                <HelloComponent title="Cute Cat 3" price="300.000" img="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                <HelloComponent title="Cute Cat 4" price="400.000"/>
                <HelloComponent title="Cute Cat 5" price="500.000"/>
                <HelloComponent/>
                <hr />  
                <p>LifeCycle Component</p>
                <hr />
                {
                    this.state.showComponent
                    ?
                    <LifeCycleComp />
                    : null
                } */}
                {/* <Blog /> */}
                <Food />
            </div>
        )
    }
}

export default Home;