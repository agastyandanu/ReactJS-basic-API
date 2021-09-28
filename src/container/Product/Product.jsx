import React, {Component} from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import './Product.css';
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import CardProduct from '../Cardproduct/Cardproduct';

class Product extends Component {
    state = {
        order: 0,
        name: "Danu Agastyan"
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <h1>Awokwk</h1>
                    </div>
                    <div className="troley">
                        <FontAwesomeIcon icon="check-square" />
                        <img src="" alt="Troley" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>                
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        )
    }
}

export default Product;