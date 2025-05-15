import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from './hooks';

import { fetchRestuarants } from './finalSlice';
interface fastfoodID{
    id: number
}
// export default function Restuarant({id} : fastfoodID){
//     const [data, setData] = useState<RestuarantI[]>([]);
//     console.log("Restuarant " + id);
//     useEffect(() => {
//         console.log("Getting data");
//         axios.get('/api/data')
//         .then(response => {
//             setData(response.data);
//         })
//         .catch(error => {
//             console.error('There was an error fetching the data!', error);
//         });
//     },[]);
//     if(data[id-1] != null){
//         console.log("I Have INFO");
//         console.log(data[id-1].Name);
//         return(
//             <>
//                 <h1>{data[id - 1].Name}</h1>   
//                 <p>Rating: {data[id - 1].Rating}</p>
//             </>
//         )
//     } else{
//         console.log("NOT DATA")
//         return (
//                 <>
//                     <h1>Restuarant</h1>
//                     {/* <h1>{data[id].name}</h1> */}
//                     {/* <p>Rating: {data[id].rating}</p> */}
//                 </>
//             );
//     }
   
// }


export default function Restuarant({id}: fastfoodID) {

    const dispatch = useAppDispatch();

    let restuarants = useAppSelector((state) => state.final.restuarants);
    // console.log(restuarants);
    const status = useAppSelector((state) => state.final.status);

    const error = useAppSelector((state) => state.final.error);

    useEffect(() => {

        if (status === 'idle') {

        dispatch(fetchRestuarants());
        } 

    }, [status, dispatch]);
    
    return (

        <div>
            {(

                <div>
                        {status === 'loading' && <p>Loading...</p>}
                        {status === 'failed' && <p>Error: {error}</p>}
                        {status === 'succeeded' && (
                            <>
                                <p>{restuarants[id-1].Name}</p>
                                <p>Rating: {restuarants[id-1].Rating}</p>
                            </>
                        )}
                </div>
        )}
    </div>
);
}