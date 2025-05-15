import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import Restuarant from './Restuarant';

interface RestuarantI {  ID: number;  Name: string;  Rating : number;}

interface FinalState {  restuarants: RestuarantI[];  status: 'idle' | 'loading' | 'succeeded' | 'failed';  error: string | null;}

const initialState: FinalState = {  restuarants: [],  status: 'idle',  error: null,};

export const fetchRestuarants = createAsyncThunk('final/fetchRestuarants', async () => {

const response = await axios.get('/api/data');

return response.data;

});
const finalSlice = createSlice({

    name: 'final',  initialState,

    reducers: {},

    extraReducers: (builder) => {

    builder

    .addCase(fetchRestuarants.pending, (state) => {

    state.status = 'loading';

})

.addCase(fetchRestuarants.fulfilled, (state, action) => {
    state.restuarants = action.payload;
    state.status = 'succeeded';

})

.addCase(fetchRestuarants.rejected, (state, action) => {

    state.status = 'failed';

    state.error = action.error.message ?? null;

});
},
});
export default finalSlice.reducer;