import React from 'react';
import MaterialTable from 'material-table';
import tableIcons from "./MaterialTableIcons";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { useState } from 'react';
import { render } from '@testing-library/react';

const getTotalPrice = (price, amount)=>{
   
    const total = parseFloat(price) * parseFloat(amount );
    return total;

}

const columns = [
    { 
        title: "Date", 
        tooltip: "Date order was created in Binance",
    
        editable: false,
        render: (rowData) => (new Date(rowData.time).toUTCString())  
    },
    { 
        title: "Symbol", 
        tooltip: "Symbol or pair requested in the order",
        editable: false,
        field: "symbol" 
    },
    { 
        title: "Type",
        tooltip: "Limit, Stop Limit, OCO, or Market", 
        editable: false,
        field: "type" 
    },
    { 
        title: "Side", 
        tooltip: "Sell or Buy",
        editable: false,
        field: "side" 
    },
    { 
        title: "Price", 
        tooltip: "Price per unit to be bought",
        editable: false,
        field: "price" 
    },
    { 
        title: "Amount", 
        tooltip: "Number of units to be bought",
        editable: false,
        field: "origQty" 
    },
    { 
        title: "Total Price",
        tooltip: "Price * Amount",
        editable: false,
        field: "orgQty",
        render: (rowData) => getTotalPrice( rowData.price,rowData.origQty )
        
    },
    { 
        title: "Trigger Condition", 
        tooltip: "Once the coin reaches this price, an order for Amount under Price is made",
        editable: false,
        field: "stopPrice" 
    },
    {
        title: "Reverse Price",
        tooltip: "Once current order is successfully completed, Another order with this price is to be requested on Reverse Side of current order",
        field: "reverse_price"
    },
    {
        title: "Reverse Amount",
        tooltip: "Once current order is successfully completed, Another order with this amount is to be requested on Reverse Side of current order",
        field: "reverse_origQty"
    },
    { 
        title: "Reverse Trigger Condition", 
        tooltip: "Once the coin reaches this price, an order for Amount under Price is made",
        field: "reverse_stopPrice" 
    },
    { 
        title: "Enable",
        tooltip: "Determines whether a reverese order is applicable to be made once current order is executed",
        field: "allow_trigger",
        type: "boolean"
    },
    
];


const Table = ({data, setOrderList, updateDbOrderDetail}) => {
    
    return <MaterialTable 
        title="Open Orders" 
        icons={tableIcons} 
        columns={columns} 
        data={data} 
        options={{
            exportButton: true,
            grouping: true,
            sorting: true,
            actionsColumnIndex: -1, // add save icon at end
            addRowPosition: "first"
        }}
        editable={{
            /*onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
                console.log( newRow );
                const updatedRows =[...data,newRow];
                setOrderList( updatedRows );
                resolve();
            }),
            onRowDelete:selectedRow=>new Promise((resolve,reject)=>{
                const rowIndex = selectedRow.tableData.id ;
                const updatedRows = [...data]
                updatedRows.splice(rowIndex,1)
                setOrderList( updatedRows )
                resolve();
            }),*/
            onRowUpdate:(updateRow,oldRow)=>new Promise( async (resolve,reject)=>{
                console.log('starting update');
                const rowIndex = oldRow.tableData.id;
                const updatedRows = [...data];
                updatedRows[rowIndex] = updateRow;
                await updateDbOrderDetail( updateRow );
                setOrderList( updatedRows );
                console.log('ended update');
                resolve();
            })
        }}
      
    />;
};

export default Table;

