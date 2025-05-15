import React, {useEffect, useState} from 'react';
import axios from 'axios';
interface RestuarantI{
    ID: number,
    Name: string;
    Rating: number;
}
interface fastfoodID{
    id: number
}
export default function Restuarant({id} : fastfoodID){
    const [data, setData] = useState<RestuarantI[]>([]);
    console.log("Restuarant " + id);
    useEffect(() => {
        console.log("Getting data");
        axios.get('/api/data')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the data!', error);
        });
    },[]);
    if(data[id-1] != null){
        console.log("I Have INFO");
        console.log(data[id-1].Name);
        return(
            <>
                <h1>{data[id - 1].Name}</h1>   
                <p>Rating: {data[id - 1].Rating}</p>
            </>
        )
    } else{
        console.log("NOT DATA")
        return (
                <>
                    <h1>Restuarant</h1>
                    {/* <h1>{data[id].name}</h1> */}
                    {/* <p>Rating: {data[id].rating}</p> */}
                </>
            );
    }
   
}