import React , { useEffect , useState } from "react";
import { useSelector , useDispatch } from 'react-redux';
import { GetCountry , GetCountryData , Loader } from "./dataReducer";
import Data from '../data/data';
import Load from '../loader/loader';

function Todo () {
    const dispatch = useDispatch ();
    const [ cancel , setCancel ] = useState ( false );
    const country = useSelector ( state => state.DataReducer.country );
    const loader = useSelector ( state => state.DataReducer.loader );
    const load = true;
    useEffect ( () => {
        dispatch ( GetCountry () );
    } , [] );

    function Cancel () {
        setCancel ( false );
        dispatch ( Loader ( !load ) );
    }

    function selectCountry ( e ) {
        dispatch ( Loader ( load ) );
        dispatch ( GetCountryData ( e ) );
        setCancel ( true );
    }

    return (
        <div>
            {
                loader ? <Load/> :
                    <div>
                        {
                            cancel ?
                                <div>
                                    <Data/>
                                    <button className={ "btn btn-primary cancel" } onClick={ () => Cancel () }> Cancel
                                    </button>
                                </div>
                                :
                                <div className={ "select-country" }>
                                    {
                                        country.length !== 0 ?
                                            <select className={ "form-control" }
                                                    onChange={ ( e ) => selectCountry ( e.target.value ) }>
                                                <option> Select Country</option>
                                                { country.map ( item =>
                                                    <option key={ item }> { item } </option> ) }
                                            </select> : ""
                                    }
                                </div>
                        }
                    </div>

            }
        </div>
    )
}

export default Todo;

