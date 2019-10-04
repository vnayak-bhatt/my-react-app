import React from 'react';
import ReactDOM from 'react-dom';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.value = "";
        this.inStock = false;

        this.handleChangeofCheckbox = this.handleChangeofCheckbox.bind(this);
        this.handleChangeofInput = this.handleChangeofInput.bind(this);
        this.sendData = this.sendData.bind(this);
        //refs of search input and instock checkbox
        this.searchInput = React.createRef();
        this.inStockRef = React.createRef();
    }
    //executes onChange of input
    handleChangeofInput(event) {
        this.searchValue = this.searchInput.current.value;
        this.sendData('input',this.searchValue);
    }
    //executes when checkbox toggles
    handleChangeofCheckbox(event) {
        this.inStock = event.target.checked;
        this.sendData('checkbox',this.inStock);
    }
    //sends data to parent as a callback with the type to differentiate
    sendData (type,data){
        this.props.parentCallback(type, data);
    }
    render(){
        return(
            <React.Fragment>
                <input type="text" placeholder="search"  ref={this.searchInput} onChange={this.handleChangeofInput} className="filter-search-input"/>
                <br />
                <div className="instock-checkbox">
                    <input type="checkBox" ref={this.inStockRef} name="inStock" onClick={this.handleChangeofCheckbox}/>
                    <span className="instock-span">Only show products in stock</span>{this.inStock}
                </div>
            </React.Fragment>
        )
    }
}
export default Filter;
