// Imports
import "./Block.css"
import React , {Component} from "react";

// Stateful Component
class Block extends Component{

    render(){
        console.log(this.props)
        return(
            <div>
                <button className="Block" onClick={this.props.onClick()}>
                    {this.props.value}
                </button>
            </div>
        )
    }
}

// Exports
export default Block;