import { ActionTypes } from "../constant/action-types"

const initialState: CountryState ={
    countries:[],
    error:[]
}


 const countryReducer=(state:CountryState=initialState,{type,payload}:any):CountryState=>{

    switch(type){
        case ActionTypes.FETCH_COUNTRIES:
            return { ...state, countries: payload, }

        case ActionTypes.SEARCH_COUNTRY:
            return { ...state, countries: payload, }

        case ActionTypes.SEARCH_COUNTRY_BY_REGION:
            return { ...state, countries: payload, }

       

        case ActionTypes.SELECTED_COUNTRY:

            return state
        case "ERROR":
            return { ...state, error: payload }

        default :
        return state
          

    }

}

export default  countryReducer

// export type RootState = ReturnType<typeof countryReducer>