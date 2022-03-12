import { configureStore } from "@reduxjs/toolkit";
import DataReducer from './containers/todo/dataReducer';

export default configureStore ( {
    reducer : {
        DataReducer
    } ,
    devTools : true ,
} )
