import React from 'react';
import TableRecord from './TableRecord'
class ProductTable extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let inventoryData = this.props.inventory;
        console.log(inventoryData, 'id=======');
        let filterdData = inventoryData.filter(e=>
            e.name.includes(this.props.searchInput)
        );
        console.log(filterdData, 'datafiltered');

        let stockFilterd;
        if(this.props.inStockChecked === true){
            stockFilterd = filterdData.filter(e=> e.isInStock === true);
        }else{
            stockFilterd = filterdData;
        }
        console.log(stockFilterd, 'stockfiltered');
        const groupedMap = stockFilterd.reduce(
            (entryMap, e) => entryMap.set(e.category, [...entryMap.get(e.category) || [], e]),
            new Map()
        );

        console.log([...groupedMap.keys()].map(data => {
            console.log(data, 'data')
        }));
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
                 {[...groupedMap.keys()].map((item, key) => {
                     return <React.Fragment key={key + 'key'}>
                         <tr key="key" className="category">
                             <td colSpan={2}>{item}</td>
                         </tr>
                         {groupedMap.get(item).map((product, i) => {
                             return (
                                 <tr className={"row-data-"+(product.isInStock ? 'in-stock' : this.props.inStockChecked ? 'hide': 'not-in-stock') }  key={product.name}>
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
export default ProductTable;