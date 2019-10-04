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
        this.searchInput = React.createRef();
        this.inStockRef = React.createRef();
    }
    handleChangeofInput(event) {
        this.searchValue = this.searchInput.current.value;
        this.sendData('input',this.searchValue);
    }
    handleChangeofCheckbox(event) {
        this.inStock = event.target.checked;
        this.sendData('checkbox',this.inStock);
    }
    sendData (type,data){
        console.log('ddatat', data,type);
        this.props.parentCallback(type, data);
    }
    render(){
        return(
            <React.Fragment>
                <input type="text" placeholder="search"  ref={this.searchInput} onChange={this.handleChangeofInput} className="filter-search-input"/>
                <br />
                <div className="instock-checkbox">
                    <input type="checkBox" ref={this.inStockRef} name="inStock"  onClick={this.handleChangeofCheckbox}/>
                    <span className="instock-span">Only show products in stock</span>{this.inStock}
                </div>
            </React.Fragment>
        )
    }
}
export default Filter;
