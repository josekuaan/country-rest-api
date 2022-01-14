import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useDispatch} from 'react-redux'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { SearchContainer } from '../styles/Main.style';

import '../App.css'


interface Props {
    
}

export default function SearchCountries({}: Props) {

    const dispatch = useDispatch();

    const [region, setRegion] = useState("")
    const [selectedRegion, setselectedRegion] = useState("")
    const handleChange=(event : React.ChangeEvent<HTMLInputElement>)=>{
        if(event.target.value === ''){
            return
        }else{
            fetch(`https://restcountries.com/v2/name/${event.target.value}`)
        .then((res) => res.json())
        .then(
          (data) => {
            dispatch({ type: "SEARCH_COUNTRY", payload: data });
          
          },
          (error) => {
            
            dispatch({ type: "ERROR", error: "Not Found! Try Again" });
          }
        );
        }
    
        
        }

        const handleSelect=(event : React.ChangeEvent<HTMLSelectElement>)=>{

            if(event.target.value === ''){
                setRegion("")
                fetch("https://restcountries.com/v2/all")
                .then((res) => res.json())
                .then(
                  (data) => {
                   
                    dispatch({ type: "FETCH_COUNTRIES", payload: data });
                    
                  },
                  (error) => {
                    dispatch({ type: "ERROR", error: error });
                  }
                );
            }else{
                setselectedRegion(event.target.value)
              fetch(`https://restcountries.com/v2/region/${event.target.value}`)
             
              .then((res) => res.json())
            .then(
              (data) => {
              setRegion(data)
              dispatch({ type: "SEARCH_COUNTRY_BY_REGION", payload: data });
              
              },
              (error) => {
               
                dispatch({ type: "ERROR", error: error });
              }
            );
           
        }
       
      };
       
            
    return (
        <>
        <SearchContainer>
            <div style={{position:"relative"}}>
          <FontAwesomeIcon icon={faSearch} className="search-icon"  style={{color:'black'}}/>
          <input type='text' onChange={handleChange} placeholder="Search for a country"  className='search-container'/>

            </div> 
          <select style={{ height: "35px" }} onChange={ handleSelect}>
                  <option value="">Filter By Region</option>
                  <option value="africa">Africa</option>
                  <option value="asia">Asia</option>
                  <option value="europe">Europe</option>
                  <option value="oceania">Oceania</option>
                </select>
        </SearchContainer>
        {region.length > 0 ? <h3>Search Results For <span style={{textTransform:"capitalize"}}>{selectedRegion}</span>({region.length})</h3>: ""}
    </>
    )
}
