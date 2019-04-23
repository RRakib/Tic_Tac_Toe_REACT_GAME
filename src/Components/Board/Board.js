// Imports
import "./Board.css"
import Block from "../Block/Block";
import React , {Component} from "react";

// Stateful Component
class Board extends Component{
    constructor(){
        super();
        this.state = {
            block : Array(9).fill(null),
            xIsNext : false,
            increment : 0,
        }
    }

    handleClick = (i) => {
        const blocks = this.state.block.slice();
        this.setState({
            xIsNext : !this.state.xIsNext
        })
        if(this.state.xIsNext){
            blocks[i] = "X"
        }else{
            blocks[i] = "O"
        }
        this.setState({
            block : blocks,
            increment : this.state.increment + 1
        })
    }
    handleClick2 = () => {
        this.xWins = false;
        this.oWins = false;
        this.setState({
            block : Array(9).fill(null),
            increment : 0
        })
    }


    renderBlock = (value) => {
        return <Block 
                    value = {this.state.block[value]}
                    onClick = {() => this.handleClick(value)}
                />
    }

    render(){
        const {block , xWins , oWins} = this.state
        this.xWins = false;
        this.oWins = false;
        // Condition For X
        if(block[0] == "X" && block[1] == "X" && block[2] == "X"){
            this.xWins = true
        }
        else if(block[0] == "X" && block[3] == "X" && block[6] == "X"){
            this.xWins = true
        }
        else if(block[0] == "X" && block[4] == "X" && block[8] == "X"){
            this.xWins = true
        } 
        else if(block[2] == "X" && block[5] == "X" && block[8] == "X"){
            this.xWins = true
        } 
        else if(block[6] == "X" && block[7] == "X" && block[8] == "X"){
            this.xWins = true
        }
        else if(block[6] == "X" && block[4] == "X" && block[2] == "X"){
            this.xWins = true
        }
        else if(block[1] == "X" && block[4] == "X" && block[7] == "X"){
            this.xWins = true
        }
        else if(block[3] == "X" && block[4] == "X" && block[5] == "X"){
            this.xWins = true
        }

        // Condition For O
        if(block[0] == "O" && block[1] == "O" && block[2] == "O"){
            this.oWins = true
        }
        else if(block[0] == "O" && block[3] == "O" && block[6] == "O"){
            this.oWins = true
        }
        else if(block[0] == "O" && block[4] == "O" && block[8] == "O"){
            this.oWins = true
        } 
        else if(block[2] == "O" && block[5] == "O" && block[8] == "O"){
            this.oWins = true
        } 
        else if(block[6] == "O" && block[7] == "O" && block[8] == "O"){
            this.oWins = true
        }
        else if(block[6] == "O" && block[4] == "O" && block[2] == "O"){
            this.oWins = true
        }
        else if(block[1] == "O" && block[4] == "O" && block[7] == "O"){
            this.oWins = true
        }
        else if(block[3] == "O" && block[4] == "O" && block[5] == "O"){
            this.oWins = true
        }


        return(
            <div className="Board">
                <p>{this.xWins? "X Wins" : (this.oWins? "O Wins" : (this.state.increment > 8? "It's a draw" : (this.state.xIsNext? " Player is : X" : " Player is : O"))) }</p>
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
                <button className="reset" onClick={this.handleClick2}>Reset</button>
            </div>
        )
    }
}

// Exports
export default Board;