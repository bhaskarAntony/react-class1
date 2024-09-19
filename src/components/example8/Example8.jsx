import React, { Component } from "react";
import './style.css'

class Example8 extends Component{

    static defaultProps = {
        image:'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933',
        title:'This is the title',
        description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    }
    render(){
        const {image, title, description} = this.props;

        return(
            <div>
                <h1 className="text-center text-danger display-3 border shadow">Deafult props </h1>
                <div className="lead">
                    <p>{image}</p>
                    <p>{title}</p>
                    <p>{description}</p>
                </div>

                <div className="container">
                    <div className="col-md-6 offset-md-3">
                        <div className="card shadow">
                            <div className="card-header bg-transparent p-0">
                                <img src={image} alt={title} className="w-100" />
                            </div>
                            <div className="card-body">
                                <h1 className="fs-3 fw-bold">{title}</h1>
                                <p className="text-secondary fs-5">{description}</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Example8;

// rfce - functional component 
//rce - class component
//rcpe - class component with default props