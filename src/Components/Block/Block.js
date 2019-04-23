// Imports
import "./Block.css"
import React , {Component} from "react";

// Stateless Component
const Block = (props) => {
        return(
            <div>
                <button className="Block" onClick={props.onClick}>
                    {props.value}
                </button>
            </div>
        )
}
// Exports
export default Block;