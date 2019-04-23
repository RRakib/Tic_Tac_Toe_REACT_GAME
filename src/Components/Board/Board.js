// Imports
import "./Board.css"
import Block from "../Block/Block";
import React , {Component} from "react";

// Stateful Component
class Board extends Component{
    render(){
        return(
            <div className="Board">
                <div className="boardRow">
                    <Block />
                    <Block />
                    <Block />

                    <Block />
                    <Block />
                    <Block />

                    <Block />
                    <Block />
                    <Block />
                </div>
            </div>
        )
    }
}

// Exports
export default Board;