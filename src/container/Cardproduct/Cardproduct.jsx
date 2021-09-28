import React, {Component} from 'react';
import '../Product/Product.css';
import 'bootstrap/dist/css/bootstrap.css';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class CardProduct extends Component {
    state = {
        order: 0
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    //arrow function
    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })
        
        // alert("Plus Button")
        // console.log('plus: ', this)

    }

    handleMinus = () =>  {
        if(this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }        
    }

    render() {
        return(
            <div className="card">
                <div className="img-thum-prod">
                    <img src="https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?b=1&k=20&m=938742222&s=170667a&w=0&h=HyfY78AeiQM8vZbIea-iiGmNxHHuHD-PVVuHRvrCIj4=" alt="" />
                </div>
                <p className="product-title">Pizza Kulit Badak</p>
                <p className="product-price">Rp. 100.000</p>
                <p className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </p>
            </div>
        )
    }
}

export default CardProduct;