import React from 'react';
import { connect } from 'react-redux'
import {updateStockFilter} from './js/action/updateStockFilter'
import {updateSearchFilter} from "./js/action/updateSearchFilter";

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.value = "";
        this.inStock = false;
        this.handleChangeofCheckbox = this.handleChangeofCheckbox.bind(this);
        this.handleChangeOfInput = this.handleChangeOfInput.bind(this);
        // this.sendData = this.sendData.bind(this);
        //refs of search input and instock checkbox
        this.searchInput = React.createRef();
    }
    //executes onChange of input
    handleChangeOfInput(event) {
        // console.log(event.value, this.searchInput.current.value)
        this.props.updateSearchFilter(this.searchInput.current.value);
    }
    //executes when checkbox toggles
    handleChangeofCheckbox(event) {
        this.props.updateStockFilter(event.target.checked)
    }
    //sends data to parent as a callback with the type to differentiate
    // sendData (type,data){
    //     this.props.parentCallback(type, data);
    // }
    render(){
        return(
            <React.Fragment>
                <input type="text" placeholder="search"  ref={this.searchInput} onChange={this.handleChangeOfInput} className="filter-search-input"/>
                <br />
                <div className="instock-checkbox">
                    <input type="checkBox"  name="inStock" onClick={this.handleChangeofCheckbox}/>
                    <span className="instock-span">Only show products in stock</span>{this.inStock}
                </div>
            </React.Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    updateStockFilter: (stocked) =>   dispatch(updateStockFilter(stocked)),
    updateSearchFilter: (searchValue) => dispatch(updateSearchFilter(searchValue))
});
export default connect(null, mapDispatchToProps)(Filter)
