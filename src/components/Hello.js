import React, {Component} from "react";

class Hello extends Component {
    render(){
        return (
            //this syntax is called jsx and it is similar to html
            <div className="f1 tc">
                <h1>Hello Rusith</h1>
                <h2>{this.props.greeting}</h2> {/* This how to use props or propertieds */} 
            </div>
            
        );
    }
}

export default Hello;