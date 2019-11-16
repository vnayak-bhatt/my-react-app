import React from 'react';
import { connect } from 'react-redux'

import TableRecord from './TableRecord'

class ProductTable extends React.Component{

    render(){
        //filters data on te basis on search via input
        let filteredData = this.props.inventory.filter(e=>
            e.name.includes(this.props.searchInput)
        );
        //checks if data stocked or not
        let stockFiltered;
        if(this.props.stocked === true){
            stockFiltered = filteredData.filter(e=> e.stocked === true);
        }else{
            stockFiltered = filteredData;
        }
        //this functions groupbys the data on the basis of category name e.category
        const groupedMap = stockFiltered.reduce(
            (entryMap, e) => entryMap.set(e.category, [...entryMap.get(e.category) || [], e]),
            new Map()
        );

     return(
         <React.Fragment>
             <table border="1">
                 <thead>
                 <tr>
                     <th>Name</th>
                     <th>price</th>
                 </tr>
                 </thead>
                 <tbody>
                 {/*map function renders the list*/}
                 {[...groupedMap.keys()].map((item, key) => {
                     return <React.Fragment key={key + 'key'}>
                         <tr key="key" className="category">
                             <td colSpan={2}>{item}</td>
                         </tr>
                         {groupedMap.get(item).map((product) => {
                             return (
                                 <tr className={"row-data-"+(product.stocked ? 'in-stock' : this.props.stocked ? 'hide': 'not-in-stock') }  key={product.name}>
                                     <TableRecord text={product.name}/>
                                     <TableRecord text={product.price}/>
                                 </tr>
                             )
                         })
                         }
                     </React.Fragment>
                 })}
                 </tbody>
             </table>
         </React.Fragment>
     )
    }
}
const mapStateToProps = state => ({
    stocked: state.stockFilterValue,
    searchInput: state.stockSearchValue
}) ;


export default connect(
    mapStateToProps,
    null
)(ProductTable);