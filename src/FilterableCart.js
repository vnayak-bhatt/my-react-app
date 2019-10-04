import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Filter from './Filter'
import ProductTable from './ProductTable'
class cartItems extends React.Component {
    constructor(props) {
        super(props);
        this.stations = [
            {call: 'station one', frequency: '000'},
            {call: 'station two', frequency: '001'}
        ];
        this.state = {
            inStockChecked: false,
            searchInput: '',
        };
        this.inventory= [
            {
                category: 'Audi',
                name: 'A6',
                price: '50,00,000',
                isInStock: false,

            },
            {
                category: 'Audi',
                name: 'A4',
                price: '41,00,000',
                isInStock: true,
            },
            {
                category: 'Audi',
                name: 'A8',
                price: '50,00,000',
                isInStock: true,

            },
            {
                category: 'BMW',
                name: '320D',
                price: '39,00,000',
                isInStock: false,

            },
            {
                category: 'BMW',
                name: '520D',
                price: '49,00,000',
                isInStock: true,

            },
            {
                category: 'BMW',
                name: '720D',
                price: '1,22,00,000',
                isInStock: true,
            },
        ];
       this.callbackFunction = (type,childData) => {
            console.log(type,childData,'cbf');
            if(type==='input') {
                this.setState({searchInput: childData});
                this.filterListFunction();
            }
            else{
                this.setState({inStockChecked: childData});
            }
        };

    }
    componentDidMount(){
        // axios.get("http://my-json-server.typicode.com/habilelabs/fake-products/products").then(function (response) {
        //     console.log(response.data, 'response');
        // })

    }
    filterListFunction() {
        console.log('seeararaAR', this.state.searchInput);
    }

    render() {
        const groupedMap = this.inventory.reduce(
            (entryMap, e) => entryMap.set(e.category, [...entryMap.get(e.category) || [], e]),
            new Map()
        );

        console.log([...groupedMap.keys()].map(data => {
            console.log(data, 'data')
        }));


        return (
            <React.Fragment>
                <div className="filter-component ">
                    <Filter parentCallback = {this.callbackFunction} inventory={this.inventory} />
                </div>
                <div>
                    <ProductTable inventory={this.inventory} searchInput={this.state.searchInput} inStockChecked={this.state.inStockChecked} />
                </div>
            </React.Fragment>

        )
    }

}

export default cartItems;