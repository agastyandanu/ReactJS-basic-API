import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FoodMenu from  '../../component/FoodComponent/FoodMenu';
import axios from 'axios';
import $ from 'jquery';

class Food extends Component{

    state = {
        // [] menandakan bahwa data berupa array
        post: [],
        formSave: {
            title: '',
            image: '',
            content: '',
            time: ''
        }
    }

    getAllData = () => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        axios.get('http://localhost:8000/api/v1/post/data')
        .then((response) => {
            this.setState({
                post: response.data.data
            })
        })

        // // fetch('https://jsonplaceholder.typicode.com/posts')
        // fetch('http://localhost:8000/api/v1/post/data')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })
    }

    handleFormChange = (event) => {
        // console.log('form change', event.target) // event.target akan menunjukkan inputan mana yang dimodifikasi
        let formSaveNew = {...this.state.formSave}; // mengambil nilai state awal
        let timeStamp = new Date().getTime(); // mendapatkan nilai waktu
        formSaveNew['time'] = timeStamp; // mengubah value khusus target time
        formSaveNew[event.target.name] = event.target.value; // mengubah target.value berdasarkan target.name
        this.setState({
            formSave: formSaveNew
        }
            // , () => {
            //     console.log('Value Object formSave: ', this.state.formSave); // callback untuk kebutuhan testing/console
            // }
        )
    }

    handleSubmit = () => {
        console.log(this.state.formSave);
        // data
        axios.post('http://127.0.0.1:8000/api/v1/post/save-data', this.state.formSave)
        .then((res) => {
            this.getAllData()
            alert('Data Inserted Successfully')
        })
    }

    handleRemove = (data) => { //(data) digunakan untuk menentukan data manakah yang akan diproses/handle
        console.log(data.id)
        axios.post('http://localhost:8000/api/v1/post/delete-data/' + data.id)
        .then((res) => {
            this.getAllData()
            alert('Data Deleted')
        })
    }

    componentDidMount(){
        this.getAllData();
        
        //JQuery
        $("#close").on('click', function(){
            $("#form-input").hide();
        })
        
        $("#insert").on('click', function(){
            $("#form-input").show();
        })
    }

    render(){
        return(
            <Fragment>
                <div className="container">   
                    <hr />
                    <center><h1>Food Menu</h1></center>
                    <button type="button" id="insert" className="btn btn-primary">Insert Data</button>
                    <button type="button" id="close" className="btn btn-warning">Close Form</button>
                    <hr />
                    <div className="col-md-6 card p-4 shadow" id="form-input">
                        <form>
                            <div className="form-group mb-2">
                                <label>Title</label>
                                <input type="text" name="title" className="form-control mt-2" onChange={this.handleFormChange} />
                            </div>
                            <div className="form-group mb-2">
                                <label>Image Source</label>
                                <input type="text" name="image" className="form-control mt-2" onChange={this.handleFormChange} />
                            </div>
                            <div className="form-group mb-2">
                                <label>Content</label>
                                <textarea name="content" rows="3" className="form-control mt-2" onChange={this.handleFormChange} ></textarea>
                            </div>
                            <button type="reset" className="btn btn-danger">Reset</button>
                            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                        </form>
                    </div>
                    <hr />
                    <div className="row">
                        {
                            this.state.post.map(post => {
                                return(
                                    <FoodMenu key={post.id} data={post} remove={this.handleRemove} /> //data={post} -> akan mewakili setiap data dari API
                                )
                            })
                        }  
                    </div>                                      
                </div>
            </Fragment>
        )
    }
}

export default Food;