import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
       return (

            <div className="wrapper">
                <Router>
                    <div>
                        <div className="router-navbar">
                            <nav >
                                <ul className='router-list'>
                                    <li className='router-list-item'>
                                        <Link to="/cart">Cart</Link>
                                    </li>
                                    <li>
                                        <Link to="/header">Header</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/cart">
                                <FilterableCart />
                            </Route>
                            <Route path="/header">
                                <Header  name="Vinayak" desc="Habilelabs"/>
                            </Route>
                            <Route path="/">
                                <FilterableCart />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
    )
       }

}

export default App;
