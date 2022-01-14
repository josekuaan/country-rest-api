
import { ActionTypes } from "../constant/action-types"


export const fetchCountries=(countries)=>{
    return {
        type:ActionTypes.FETCH_COUNTRIES,
        payload:countries
    }
}
export const searchCountry=(country)=>{
    return {
        type:ActionTypes.SEARCH_COUNTRY,
        payload:country
    }
}
export const searchCountryByRegion=(region)=>{
    return {
        type:ActionTypes.SEARCH_COUNTRY_BY_REGION,
        payload:region
    }
}

export const selectedCountry=(country)=>{
    return {
        type:ActionTypes.SELECTED_COUNTRY,
        payload:country
    }
}


