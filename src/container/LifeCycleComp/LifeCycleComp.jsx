import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class LifeCycleComp extends Component {

    constructor(props) {
        super(props); // digunakan karna extends dari Component
        this.state = {
            count: 1
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('ComponentDidMount');
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 3000);        // set time out for 3 seconds
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.group('shouldComponentUpdate');
        console.log('nextState: ', nextState);
        console.log('this state: ', this.state);
        console.groupEnd();
        if(nextState.count >= 4){
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        console.log('render');
        return(
            <button className="btn btn-primary" onClick={this.changeCount}>Component Button {this.state.count}</button>
        )
    }
}

export default LifeCycleComp;