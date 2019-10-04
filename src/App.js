import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import Header from './Header'
import FilterableCart from './FilterableCart'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
