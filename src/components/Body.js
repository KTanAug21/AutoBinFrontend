import React from 'react'
import { StyledBody } from './styles/Body-styled';
import Table from './Table';
import { useEffect, useState } from 'react';

const Body = () => {

    // Data for table
    const [ orderList, setOrderList ] = useState([]);

    const getOrderList = async() =>{
        console.log( 'Setting order list...');
        let data = await fetchDbOrderList();
        setOrderList( data.data );
    }

    // Define data endpoint call
    const fetchDbOrderList = async()=>{
        console.log('Getting order list...');
        let res = await fetch('http://localhost:5000/bin-open-order/list');
        const data = await res.json() 
        return data;
    };

    const updateDbOrderDetail = async( data )=>{
        console.log( `Updating order list with data ` );
        console.log(data);
        let toSend = {
            'id':data['_id']['$oid'],
            'reverse_price':data['reverse_price'],
            'reverse_origQty':data['reverse_origQty'],
            'reverse_stopPrice':data['reverse_stopPrice'],
            'allow_trigger':data['allow_trigger']
        }
        console.log(toSend);
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(toSend)
        };

        const response = await fetch('http://localhost:5000/bin-open-order/detail', requestOptions);
        const responseData = await response.json();
        

        return data;
    };

    // Call data endpoint on page load
    useEffect( () => {
        getOrderList();
    },[]);

    return (
        <StyledBody>
            <Table data={orderList} setOrderList={setOrderList} updateDbOrderDetail={updateDbOrderDetail}/>
        </StyledBody>
    );
}

export default Body;
