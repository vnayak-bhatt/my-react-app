import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Filter from './Filter'
import ProductTable from './ProductTable'

class cartItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inStockChecked: false,
            searchInput: '',
            inventory: []
        };

        //callbackfunction executes when the child component 'Filter' returns data(sendData function)
        this.callbackFunction = (type, childData) => {
            if (type === 'input') {
                this.setState({searchInput: childData});
            }
            else {
                this.setState({inStockChecked: childData});
            }
        };

    }

    componentDidMount() {
        axios.get("http://my-json-server.typicode.com/habilelabs/fake-products/products").then(res => {
            console.log(res);
            this.setState({
                inventory: res.data
            });
        }).catch((error) => {
            this.setState({
                error
            });
        })

    }

    render() {
        return (
            <React.Fragment>
                <div className="filter-component ">
                    <Filter parentCallback={this.callbackFunction} inventory={this.inventory}/>
                </div>
                <div>
                    <ProductTable inventory={this.state.inventory} searchInput={this.state.searchInput}
                                  inStockChecked={this.state.inStockChecked}/>
                </div>
            </React.Fragment>

        )
    }

}

export default cartItems;