import React from 'react';

class TodoClass extends React.Component {
    constructor(props){
        super(props);
        this.inputTodo = 'test';
        this.state = {
            todoInput: '',
        };
    }
    handleChangeOfInput(e){

        console.log(e);
        // this.setState({todoInput: this.inputTodo.current.value});
    }
    render(){
        return(
            <React.Fragment>
                <h1>this is todo made up of class</h1>
                <span>
                    TODO:
                </span>
                <input type='text' ref={this.inputTodo} onChange={this.handleChangeOfInput} placeholder='enter a thing todo'/>
                <div>
                    <ul>
                        <li>{this.state.input}</li>
                        <li>sample2</li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}


export default TodoClass;