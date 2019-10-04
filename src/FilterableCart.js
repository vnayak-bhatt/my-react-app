import React from 'react'
import ReactDOM from 'react-dom'

import Filter from './Filter'
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


        // let inventoryList = this.state.inventory.map((item) => {
        //     let lists = <ul key={"item-" + item}>{item.category}
        //         <li>
        //             {item.name}
        //         </li>
        //     </ul>
        // })
        return (
            <React.Fragment>
                <div className="filter-component ">
                    <Filter parentCallback = {this.callbackFunction} inventory={this.inventory} />
                </div>
                <div>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...groupedMap.keys()].map((item, key) => {
                                return <React.Fragment key={key + 'key'}>
                                    <tr key="key" className="category">
                                        <td colSpan={2}>{item}</td>
                                    </tr>
                                    {groupedMap.get(item).map((product, i) => {
                                        return (
                                            <tr className={"row-data-"+(product.isInStock ? 'in-stock' : this.state.inStockChecked ? 'hide': 'not-in-stock') }  key={product.name}>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                            </tr>
                                        )
                                    })
                                    }
                                </React.Fragment>
                            })}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>

        )
    }

    /*// render() {*
    //     let displayListAudi = ['Audi'];
    //     let displayListBmw = ['BMW'];
    //     this.state.inventory.forEach(e => {
    //         console.log(e);
    //             if(e.category==='Audi'){
    //                 let test = <div><h1>{e.name}-{e.price}</h1></div>;
    //                 displayListAudi.push(test)
    //             }
    //             else{
    //                 let test = <div><h1>{e.name}-{e.price}</h1></div>;
    //                 displayListBmw.push(test)
    //             }
    //     });
    //     // if (display[e.category]) {
    //         //     display[e.category].push('<div> <h1>{e.name} - {e.price}</h1> <br /></div>')
    //         // }
    //         // else if (!display[e.category]) {
    //         //     display[e.category] = [];
    //         //     display[e.category].push('<div><h1>{e.name} - {e.price}</h1> <br /></div>')
    //         // }
    //         // console.log('display', display);
    //     return (
    //             <div>
    //                 <div className="Heading" >
    //                     <h1>name</h1>-<h1>price</h1>
    //                 </div>
    //                 <div>
    //                     {displayListAudi}
    //                 </div>
    //                 <div>
    //                     {displayListBmw}
    //                 </div>
    //             </div>
    //     )
    // }*/
}

export default cartItems;