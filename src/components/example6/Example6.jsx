import React, {Component} from "react";

class Example6 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>This is the example6 class component</h1>
                <h1 className="text-success text-center">props = {this.props.title}</h1>
                <h1 className="text-danger">the sum of firstnumber and secondnumber = {this.props.firstnumber + this.props.secondnumber}</h1>

                <button className={`btn ${this.props.btn}`}>{this.props.text}</button>
            </div>
        )
    }
}

export default Example6;