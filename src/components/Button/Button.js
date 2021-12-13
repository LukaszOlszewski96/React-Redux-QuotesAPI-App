import React, { Component } from 'react';

class Button extends Component{
    render(){
        return(
            <div className="buttons"> 
                <button className="buttons__new-quote" onClick={this.props.click}>{this.props.text}</button>
            </div>
        )
    }
}

export default Button