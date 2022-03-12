import {createSlice} from '@reduxjs/toolkit';
import axios from "axios";

// ________________________  STATE AND REDUCER  ______________________

const Covid = createSlice({
    name: "todos",
    initialState:{
        loader: false,
        country: [],
        OneCountryData: []
    },
    reducers:{
        Country:(state, action)=> {
            state.country = action.payload.response;
        },
        CountryData:(state, action) => {
            state.OneCountryData = action.payload;
            state.loader = false;
        },
        ResLoader:(state, action)=> {
            state.loader = action.payload
        }
    }
})

// ____________________________  ACTION  ____________________________

export function GetCountry() {
    return(dispatch)=>{
        axios({
            method: 'GET',
            url: 'https://covid-193.p.rapidapi.com/countries',
            headers: {
                'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                'x-rapidapi-key': '76c0c37ecamsh069b31c3f128364p1592a3jsn467dabd170f0'
            }
        }).then((res)=> {
            dispatch({
                type: Country.type,
                payload: res.data
            })
        })
    }
}

export function GetCountryData(data) {
    return(dispatch)=>{
        axios({
            method: 'GET',
            url: 'https://covid-193.p.rapidapi.com/statistics',
            params: {country: data},
            headers: {
                'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                'x-rapidapi-key': '76c0c37ecamsh069b31c3f128364p1592a3jsn467dabd170f0'
            }
        }).then((res)=> {
            dispatch({
                type: CountryData.type,
                payload: res.data
            })
        })
    }
}

export function Loader(data) {
    return(dispatch)=> {
        dispatch({type: ResLoader.type, payload: data})
    }

}

// ________________________  EXPORT ACTION __________________________

export const {Country, CountryData, ResLoader} = Covid.actions
export default Covid.reducer;