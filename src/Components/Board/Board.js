// Imports
import "./Board.css"
import Block from "../Block/Block";
import React , {Component} from "react";

// Stateful Component
class Board extends Component{
    constructor(){
        super();
        this.state = {
            block : Array(9).fill(null)
        }
    }

    handleClick = () => {

    }


    renderBlock = (value) => {
        return <Block 
                    value = {this.state.block[value]}
                    onClick = {() => this.handleClick(value)}
                />
    }

    render(){
        return(
            <div className="Board">
                <div className="boardRow">
                    {this.renderBlock(0)}
                    {this.renderBlock(1)}
                    {this.renderBlock(2)}

                    {this.renderBlock(3)}
                    {this.renderBlock(4)}
                    {this.renderBlock(5)}
                    
                    {this.renderBlock(6)}
                    {this.renderBlock(7)}
                    {this.renderBlock(8)}
                    
                </div>
            </div>
        )
    }
}

// Exports
export default Board;