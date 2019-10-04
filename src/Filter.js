import React from 'react';
import ReactDOM from 'react-dom';

class Filter extends React.Component {
    constructor(props) {

        super(props);
        console.log(props, 'props');
        this.value = "";
        this.inStock = false;
        this.handleChangeofCheckbox = this.handleChangeofCheckbox.bind(this);
        this.handleChangeofInput = this.handleChangeofInput.bind(this);
        this.sendData = this.sendData.bind(this);
        this.searchInput = React.createRef();
        this.inStockRef = React.createRef();
    }
    handleChangeofInput(event) {

        console.log(this.searchInput.current.value);
        this.searchValue = this.searchInput.current.value;
        console.log(this.searchValue, 'test1');
        this.sendData('input',this.searchValue);

    }
    handleChangeofCheckbox(event) {

        // console.log(this.input.current.value);
        //
        console.log(this.inStockRef.current.value);
        this.inStock = event.target.checked;
        console.log(this.inStock,'test2');
        this.sendData('checkbox',this.inStock);
    }

    sendData (type,data){
        console.log('ddatat', data,type);
        this.props.parentCallback(type, data);
    }
    render(){
        return(
            <React.Fragment>
                {/*<form onSubmit={this.handleSubmit}>*/}
                    {/*<label>*/}
                        {/*Essay:*/}
                        {/*<textarea value={this.state.value} onChange={this.handleChange} />*/}
                    {/*</label>*/}
                    {/*<input type="submit" value="Submit" />*/}
                {/*</form>*/}
                <input type="text" placeholder="search"  ref={this.searchInput} className="filter-search-input"/>
                <button type="button" onClick={this.handleChangeofInput}>search</button>
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
