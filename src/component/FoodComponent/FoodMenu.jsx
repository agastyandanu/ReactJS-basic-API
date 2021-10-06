import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'

const FoodMenu = (props) => {

    return(
        <Fragment>
        <div className="col-md-6">
            <div className="row border shadow border m-2 p-4">
                <div className="col-md-4">
                    <img src={props.data.image} alt="img" className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col">
                            <h3>{props.data.title}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{props.data.content}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button onClick={() => props.update(props.data)} className="btn btn-primary">Edit</button>
                            <button onClick={() => props.remove(props.data)} className="btn btn-danger">Delete</button>
                            {/* onclick={} akan mengirim data ke remove/handleRemove */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </Fragment>
    )
}

export default FoodMenu;