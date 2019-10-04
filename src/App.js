import React from 'react'
import ReactDOM from 'react-dom'

import logo from './logo.svg';
import './App.css';
import Header from './Header'
import FilterableCart from './FilterableCart'

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            props: [],
            date: new Date(),
            counter: 0,
            value: 0,
            flag: false
        };
        // this.state.props = props;
        //calls this.changetime every 1 second
       // setInterval(this.changeTime.bind(this),1000);
        //////////////////////////////////doubt to be asked to sir
        // this.incrementFunction = this.incrementFunction.bind(this);
        //setInterval(this.incrementFunction.bind(this),1000);
        //this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value})
    }
    changeTime(){
        this.setState({
            date: new Date()
        });
    }
    incrementFunction = ()=>{
        if(this.state.counter < this.state.value) {
            this.state.flag = false;
            this.setState({
                counter: this.state.counter + 1
            });
        }
        else if(this.state.counter >= this.state.value) {
            this.state.flag = true;
            this.setState({
                counter: this.state.counter + 1
            });
            this.state.counter = 0;
        }
    }
    decrementFunction(){

        this.setState({
            counter: this.state.counter - 1
        });
    }
    render() {
       /* let display;
       if(this.state.flag) {
          display = <h1>counter===value{this.state.flag}</h1>;
       }
      else {
         display = <h1>counter!==value</h1>;
       }*/
       return (
            <div className="wrapper">
                <FilterableCart/>


                {/*<Header/>*/}

                {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                {/*<p>*/}
                    {/*{this.state.date.toString()}*/}
                {/*</p>*/}
                {/*{this.state.props}*/}
                {/*<h4>The counter automatically increments after every one second until the value {this.state.value} is reached</h4>*/}
                {/*{this.state.counter}*/}
                {/*<div className="test-css">*/}
                    {/*<button type="button" onClick={this.incrementFunction}>increment</button>*/}
                    {/*<button type="button" onClick={this.decrementFunction.bind(this)}>decrement</button>*/}
                    {/*<input type="text" placeholder="value" value={this.state.value} onChange={this.handleChange}/>*/}
                {/*</div>*/}

                {/*{display}*/}
        </div>
    )
       }

}

export default App;
